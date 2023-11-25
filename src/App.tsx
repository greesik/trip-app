import { useEffect, useState } from "react";
import axios from "axios";
import { Trip } from "./backend/backend";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { TripCard } from "./components/TripCard";

const App = () => {
  const [trips, setTrips] = useState<Trip[] | null>(null);

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const response = await axios.get<Trip[]>("http://localhost:3000/trips");
        setTrips(response.data);
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
        bgColor={"lightcoral"}
        paddingTop={"3rem"}
      >
        {trips &&
          trips.map((trip) => {
            return <TripCard {...trip} />;
          })}
      </Box>
    </ChakraProvider>
  );
};

export default App;
