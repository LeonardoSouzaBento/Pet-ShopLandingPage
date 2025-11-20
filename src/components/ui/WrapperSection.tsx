import React, { ReactNode } from "react";

interface WrapperSectionProps {
  styles?: string;
  children: ReactNode;
}

function WrapperSection({ styles = "", children }: WrapperSectionProps) {
  return (
    <div className={`mx-auto md:max-w-[700px] lg:max-w-none xl:max-w-[1040px] ${styles}`}>
      {children}
    </div>
  );
}

export default WrapperSection;
