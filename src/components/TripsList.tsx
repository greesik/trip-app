import { Box, ChakraProvider } from "@chakra-ui/react";
import { TripCard } from "./TripCard";
import { useEffect, useState, useRef, useCallback } from "react";
import { Trip } from "../backend/backendTypes";
import axios from "axios";

export const TripsList = () => {
  const [trips, setTrips] = useState<Trip[] | null>(null);
  const [display, setDisplay] = useState(10);
  const [loading, setLoading] = useState(false);

  const observer = useRef<IntersectionObserver | null>(null);
  const lastTripElementRef = useCallback(
    (node: HTMLElement | null) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setLoading(true);
          setTimeout(() => {
            setDisplay((prevDisplayNumber) => prevDisplayNumber + 10);
            setLoading(false);
          }, 500);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading]
  );

  useEffect(() => {
    const fetchTrips = async () => {
      setLoading(true);
      try {
        const response = await axios.get<Trip[]>("http://localhost:3001/trips");
        setTrips(response.data);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTrips();
  }, []);

  return (
    <ChakraProvider>
      <Box
        display={"flex"}
        flexWrap={"wrap"}
        justifyContent={"space-around"}
        gap={"2rem"}
        bgColor={"#F6F6F7"}
        paddingTop={"3rem"}
      >
        {trips &&
          trips.slice(0, display).map((trip, index) => {
            if (trips.slice(0, display).length === index + 1) {
              return (
                <div ref={lastTripElementRef} key={trip.id}>
                  <TripCard {...trip} />
                </div>
              );
            } else {
              return <TripCard {...trip} key={trip.id} />;
            }
          })}
      </Box>
    </ChakraProvider>
  );
};
