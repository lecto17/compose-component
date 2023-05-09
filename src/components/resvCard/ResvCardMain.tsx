import React, { Children, ReactNode, isValidElement } from 'react';
import { createPortal } from "react-dom";
import { ResvCardSub } from './ResvCardSub';

interface ResvCardMainProps {
  children?: ReactNode;
  isFolded?: boolean;
}

const ResvCardTimeContents = (<ResvCardSub.ResvCardTime />).type;
const ResvCardPatContents = (<ResvCardPat />).type;
const ResvCardSchContents = (<ResvCardSch />).type;


export const ResvCard = Object.assign(ResvCardMain, {
  Index: "",
  Time: "",
  RegNo: "",
  Name: "",
  Jn: "",
  DrName: "",
  InsIcon: "",
  VisitIcon: "",

});

const ResvCardIndex = (<ResvCardSub />).type;
function getResvCardIndex(children: ReactNode) {
  const childrenArray = Children.toArray(children);
  return childrenArray.filter(child => isValidElement(child) && child.type === ResvCardTime).slice(0, 1);
};

function getResvTimeContents(children: ReactNode) {
  const childrenArray = Children.toArray(children);
  return childrenArray.filter(child => isValidElement(child) && child.type === ResvCardTime).slice(0, 2);
};

function getResvPatContents(children: ReactNode) {
  const childrenArray = Children.toArray(children);
  return childrenArray.filter(child => isValidElement(child) && child.type === ResvCardPat).slice(0, 2);
};

function getResvSchContents(children: ReactNode) {
  const childrenArray = Children.toArray(children);
  return childrenArray.filter(child => isValidElement(child) && child.type === ResvCardSch).slice(0, 2);
};

export default function ResvCardMain({ children, isFolded }: ResvCardMainProps) {
  const resvTimeContens = getResvTimeContents(children);
  const resvPatContents = getResvPatContents(children);
  const resvSchContents = getResvSchContents(children);

  return createPortal(
    <div>
      <div>{resvTimeContens}</div>
      <div>{resvPatContents}</div>
      <div>{resvSchContents}</div>
    </div>, document.body
  )
}
