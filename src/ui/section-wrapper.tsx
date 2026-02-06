import { cn } from '@/lib/utils';
import React, { ReactNode } from 'react';

interface Props {
  className?: string;
  children: ReactNode;
}

export function SectionWrapper({ className = '', children }: Props) {
  return (
    <div
      className={cn(
        `mx-auto md:max-w-180
         lg:max-w-none xl:max-w-5xl`,
        className,
      )}>
      {children}
    </div>
  );
}
