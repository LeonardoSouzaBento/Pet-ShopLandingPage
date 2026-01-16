import React, { ReactNode } from "react";

interface Props {
  styles?: string;
  children: ReactNode;
}

export function SectionWrapper({ styles = "", children }: Props) {
  return (
    <div className={`mx-auto md:max-w-[720px] lg:max-w-none xl:max-w-[1040px] ${styles}`}>
      {children}
    </div>
  );
}
