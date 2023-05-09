import React,{ ReactNode } from "react";

interface ResvCardTimeProps {
  children?: ReactNode;
}

interface ResvCardPatProps {
  children?: ReactNode;
}

interface ResvCardSchProps {
  children?: ReactNode;
}

function ResvCardSub (): void {

  function ResvCardTime({ children }: ResvCardTimeProps) {
    return (
      <div className="time">
        { children }
      </div>
    )
  }

  function ResvCardPat({ children }: ResvCardPatProps) {
    return (
      <div className="pat">
        { children }
      </div>
    )
  }

  function ResvCardSch({ children }: ResvCardSchProps) {
    return (
      <div className="schedule">
        { children }
      </div>
    )
  }

  interface ResvCardIndexProps {
    children?: ReactNode;
    onClick?: (e: MouseEvent) => void;
  }

  function ResvCardIndex({children}: ResvCardIndexProps){
    return <div>{children}</div>
  }

}

export { ResvCardSub };
