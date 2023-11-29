import { Box, ChakraProvider } from "@chakra-ui/react";
import { TripCard } from "./TripCard";
import { useEffect, useState } from "react";
import { Trip } from "../backend/backendTypes";
import axios from "axios";

export const TripsList = () => {
  const [trips, setTrips] = useState<Trip[] | null>(null);

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        let response;
        const cachedResponse = localStorage.getItem("trips");

        if (cachedResponse) {
          response = JSON.parse(cachedResponse);
          setTrips(response);
        } else {
          response = await axios.get<Trip[]>("http://localhost:3001/trips");
          localStorage.setItem("trips", JSON.stringify(response.data));
          setTrips(response.data);
        }
      } catch (error) {
        console.error("Error:", error);
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
          trips.map((trip) => {
            return <TripCard {...trip} key={trip.id} />;
          })}
      </Box>
    </ChakraProvider>
  );
};
