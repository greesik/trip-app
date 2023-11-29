import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import { Trip } from "../../backend/backendTypes";

export const TripSummary = ({ days, co2kilograms, countries }: Trip) => {
  return (
    <Card>
      <Stack divider={<StackDivider />}>
        <CardHeader>
          <Heading>{days} days</Heading>
          <Heading size="xs" color={"#75848B"}>
            Emissions: {co2kilograms} kgCO₂e
          </Heading>
        </CardHeader>
        <CardBody>
          <Box></Box>
          <Box>
            <Heading size="xs" color={"#75848B"}>
              Countries included:
            </Heading>
            <SimpleGrid columns={2}>
              {countries.length &&
                countries.map((country) => {
                  return (
                    <Text key={country} color={"#75848B"}>
                      {country}
                    </Text>
                  );
                })}
            </SimpleGrid>
          </Box>
        </CardBody>
      </Stack>
    </Card>
  );
};
