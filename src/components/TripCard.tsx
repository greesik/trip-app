import { Card, CardBody } from "@chakra-ui/react";
import { Trip } from "../backend/backend";

export const TripCard = ({
  photoUrl,
  title,
  countries,
  days,
  co2kilograms,
  rating,
}: Trip) => {
  const url = `url(${photoUrl})`;
  return (
    <Card
      align={"center"}
      bgColor={"white"}
      bgImage={url}
      bgPosition={"center"}
      bgSize={"cover"}
      bgRepeat={"no-repeat"}
      width={"30rem"}
      height={"30rem"}
      border={"1.5rem solid white"}
    >
      <CardBody>
        {title}, {countries.length} Countries, {days} days, Emissions offset:{" "}
        {co2kilograms}kgCO2e, Trip rating: {rating}
      </CardBody>
    </Card>
  );
};
