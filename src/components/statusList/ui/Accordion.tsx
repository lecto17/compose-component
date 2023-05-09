import React, {
  Children,
  cloneElement,
  Context,
  createContext,
  ReactNode,
  useContext,
  useMemo,
  useState,
} from "react";
import styled from "@emotion/styled";

const AccordionContext: Context<{
  openItem: string;
  setOpenItem: any;
}> = createContext({
  openItem: "",
  setOpenItem: null,
});

const useAccordionContext = () => useContext(AccordionContext);

const AccordionHeaderContainer = styled.div`
  padding: 8px 16px;
  background: #f5f5f5;
  border-top: 1px solid #d3d3d3;
  cursor: pointer;
`;

const AccordionPanelContainer = styled.div<{ height: string; padding: string }>`
  padding: ${({ padding }: { padding: string }) => padding};
  height: ${({ height }: { height: string }) => height};
  overflow: hidden;
  border-bottom: 1px solid #d3d3d3;
`;

const AccordionContainer = styled.div`
  border: 1px solid #d3d3d3;
  border-radius: 8px;
  padding: 8px;
`;

export const AccordionItem = ({
  children,
  id,
}: {
  children: ReactNode; // jsx 내에서 사용할 수 있는 모든 타입
  id: string;
}) => {
  return (
    <div>
      {Children.map(children, (child: any) => cloneElement(child, { id }))}
    </div>
  );
};

export const AccordionHeader = ({
  id,
  children,
}: {
  id?: string;
  children: ReactNode;
}) => {
  const { setOpenItem } = useAccordionContext();
  return (
    <AccordionHeaderContainer onClick={() => setOpenItem(id)}>
      {children}
    </AccordionHeaderContainer>
  );
};

export const AccordionPanel = ({
  children,
  id,
}: {
  children: ReactNode;
  id?: string;
}) => {
  const { openItem } = useAccordionContext();
  return (
    <AccordionPanelContainer
      padding={openItem === id ? "16px" : "0px"}
      height={openItem === id ? "fit-content" : "2px"}
    >
      {children}
    </AccordionPanelContainer>
  );
};

function Accordion({ children }: { children: ReactNode }) {
  const [openItem, setOpenItem] = useState("");

  const value = useMemo(() => ({ openItem, setOpenItem }), [openItem]);

  return (
    <AccordionContainer>
      <AccordionContext.Provider value={value}>
        {children}
      </AccordionContext.Provider>
    </AccordionContainer>
  );
}

export default Accordion;
