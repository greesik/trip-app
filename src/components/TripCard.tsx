import { Box, Button, Text } from "@chakra-ui/react";
import { Trip } from "../backend/backendTypes";
import StarRatings from "react-star-ratings";
import { Link } from "react-router-dom";

const CardHeader = ({
  title,
  countries,
  days,
}: Pick<Trip, "title" | "countries" | "days">) => {
  return (
    <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
      <Text
        color={"#FFF"}
        fontSize={"30px"}
        fontWeight={"bold"}
        textShadow={"1px 1px 40px #000"}
      >
        {title}
      </Text>
      <Text color={"#FFF"} textShadow={"1px 1px 40px #000"}>
        {countries && countries.length} Countries, {days} days
      </Text>
    </Box>
  );
};

const EmissionBox = ({ co2kilograms }: Pick<Trip, "co2kilograms">) => {
  return (
    <Box
      bgColor={"#141A30"}
      minWidth={"75%"}
      minHeight={"4rem"}
      borderRadius={"0.5rem"}
      display={"flex"}
      justifyContent={"space-around"}
      alignItems={"center"}
    >
      <Text color={"#FFF"}>Emissions offset:</Text>
      <Text color={"#FFF"} fontWeight={"bold"}>
        {" "}
        {co2kilograms} kgCO₂e
      </Text>
    </Box>
  );
};

const RatingBox = ({ rating }: Pick<Trip, "rating">) => {
  return (
    <Box
      bgColor={"#FFF"}
      minWidth={"85%"}
      minHeight={"4rem"}
      borderRadius={"0.5rem 0.5rem 0 0"}
      display={"flex"}
      justifyContent={"space-around"}
      alignItems={"center"}
    >
      <Text fontWeight={"bold"}>Trip rating</Text>
      <Box display={"flex"}>
        <StarRatings
          rating={rating}
          starRatedColor={"#FFCE03"}
          numberOfStars={5}
          starDimension={"1.75rem"}
          starSpacing={"0.1rem"}
        />{" "}
        <Text
          fontWeight={"bold"}
          display={"flex"}
          alignItems={"center"}
          marginLeft={"0.5rem"}
        >
          {rating}
        </Text>
      </Box>
    </Box>
  );
};

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
    <Box
      bgImage={url}
      bgPosition={"center"}
      bgSize={"cover"}
      bgRepeat={"no-repeat"}
      boxShadow={"box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;"}
      width={"30rem"}
      height={"30rem"}
      border={"1.5rem solid white"}
      borderRadius={"1rem"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"space-between"}
      paddingTop={"3rem"}
    >
      <CardHeader title={title} countries={countries} days={days} />
      <Button as={Link} to="/trip" color={"#FFF"} bgColor={"#3267C3"}>
        Learn more
      </Button>
      <EmissionBox co2kilograms={co2kilograms} />
      <RatingBox rating={rating} />
    </Box>
  );
};
