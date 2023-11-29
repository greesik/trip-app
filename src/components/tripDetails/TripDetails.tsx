import { useEffect, useState } from "react";
import { Trip } from "../../backend/backendTypes";
import axios from "axios";

import { TripAdvantage } from "./TripAdvantage";
import { TripSummary } from "./TripSummary";
import {
  Box,
  ChakraProvider,
  Container,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

export const TripDetails = () => {
  const [trip, setTrip] = useState<Trip | null>(null);

  useEffect(() => {
    const fetchTrip = async () => {
      try {
        let response;
        const cachedResponse = localStorage.getItem("trip");

        if (cachedResponse) {
          response = JSON.parse(cachedResponse);
          console.log(response);
        } else {
          response = (
            await axios.get<Trip>("http://localhost:3002/single_trip")
          ).data;
          console.log(response);
          localStorage.setItem("trip", JSON.stringify(response));
        }
        setTrip(response);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchTrip();
  }, []);
  return (
    trip && (
      <ChakraProvider>
        <Box minH={"100vh"} w={"100vw"} bgColor={"#F6F6F7"}>
          <Container maxW={"90%"}>
            <Box width={"100%"} padding={"2rem 0"}>
              <Heading>{trip.title}</Heading>
              <Heading size="xs" color={"#75848B"}>
                {trip.subtitle}
              </Heading>
            </Box>
            <Box display={"flex"} gap={"4rem"}>
              <Box width={"70%"}>
                <Image
                  borderRadius="1rem"
                  src={trip.photoUrl}
                  alt={`${trip.title}`}
                  width={"100%"}
                />
                <Box>
                  <Heading size="m" margin={"2rem 0"}>
                    Overview
                  </Heading>
                  <Box
                    display={"flex"}
                    flexWrap={"wrap"}
                    gap={"0.5rem"}
                    justifyContent={"space-between"}
                  >
                    {trip.advantages.map((advantage) => {
                      return (
                        <TripAdvantage
                          {...advantage}
                          key={advantage.title[0]}
                        />
                      );
                    })}
                  </Box>
                  <Text margin={"5rem 0"}>{trip.description}</Text>
                </Box>
              </Box>
              <Box width={"30%"}>
                <TripSummary {...trip} />
              </Box>
            </Box>
          </Container>
        </Box>
      </ChakraProvider>
    )
  );
};
