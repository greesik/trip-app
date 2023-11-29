import { Box, Heading, Icon, Text } from "@chakra-ui/react";
import { IoEarthOutline } from "react-icons/io5";
import { RiFlag2Line } from "react-icons/ri";
import { PiSuitcaseSimpleLight } from "react-icons/pi";
import { MdOutlineGroups2 } from "react-icons/md";
import { TiTickOutline } from "react-icons/ti";

import { Advantage } from "../../backend/backendTypes";

const Pictogram = ({ title }: Pick<Advantage, "title">) => {
  const BOX_SIZE = 30;
  switch (title[0]) {
    case "1":
      return <Icon as={RiFlag2Line} boxSize={BOX_SIZE} />;
    case "2":
      return <Icon as={IoEarthOutline} boxSize={BOX_SIZE} />;
    case "3":
      return <Icon as={PiSuitcaseSimpleLight} boxSize={BOX_SIZE} />;
    case "4":
      return <Icon as={MdOutlineGroups2} boxSize={BOX_SIZE} />;
  }
  return <TiTickOutline />;
};

export const TripAdvantage = ({ title, description }: Advantage) => {
  return (
    <Box display={"flex"} width={"49%"}>
      <Box height={"100%"} marginRight={"1rem"}>
        <Pictogram title={title} />
      </Box>
      <Box>
        <Heading size={"s"} marginTop={0}>
          {title}
        </Heading>
        <Text color={"#75848B"}>{description}</Text>
      </Box>
    </Box>
  );
};
