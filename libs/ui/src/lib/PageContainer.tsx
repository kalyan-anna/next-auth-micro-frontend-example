import React, { PropsWithChildren } from 'react';

export const PageContainer: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="container mx-auto px-3 py-3 w-full lg:max-w-[768px] h-lvh">
      {children}
    </div>
  );
};
