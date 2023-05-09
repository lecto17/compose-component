import React from "react";
import Accordion, {
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
} from "./ui/Accordion";

export default function App() {
  return (
    <div className="App">
      <Accordion>
        <div>
          <AccordionItem id="1">
            <AccordionHeader>Header 1</AccordionHeader>
            <AccordionPanel>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </AccordionPanel>
          </AccordionItem>
        </div>
        <AccordionItem id="2">
          <AccordionHeader>Header 2</AccordionHeader>
          <AccordionPanel>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem id="3">
          <AccordionHeader>Header 3</AccordionHeader>
          <AccordionPanel>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
