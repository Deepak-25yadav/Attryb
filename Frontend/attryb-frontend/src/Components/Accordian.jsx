import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text,
} from "@chakra-ui/react";
import { cssStyles } from "./Reusable";
export const Accordian = ({
  oemId,
  img,
  accidents,
  km,
  des,
  price,
  prevBuyers,

  originalPaint,
  registrationPlace,
  majorScratches,
  title,
}) => {
  //this accodian component is used for the ui purpose so that more detaisls can be show with good ui effect
  //like accddian by prop drilling the props from parent to child 
  return (
    <>
      <Accordion allowMultiple={true}>
        <AccordionItem>
          <h2>
            <AccordionButton _hover={{ bg: "blue" }} color="white" bg="purple">
              <Box  as="span" flex="1" textAlign="left">
               See Car Details
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel bg="skyblue" fontSize="15px" fontWeight={400}>
            <Text>Total No. of Accidents {accidents} </Text>
            <Text>Orginal Paint {originalPaint} </Text>
            <Text>Place of Registration {registrationPlace}</Text>
            <Text>Prev Buyers {prevBuyers} </Text>{" "}
            <Text>Total Kilometers {km} </Text>
            <Text>Major Scratches {majorScratches} </Text>
            {des &&
              des.map((el) => (
                <Text
                  key={el.id}
                  pr={2}
                  pl={2}
                  fontSize={cssStyles.small}
                  // textAlign={"center"}
                  borderRadius={4}
                >
                  ⚫{el.description}
                </Text>
              ))}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
};
