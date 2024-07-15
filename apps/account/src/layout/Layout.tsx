import { NavBar } from '@stratapro/ui';
import { PropsWithChildren } from 'react';

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <NavBar activePath="/" />
      {children}
    </>
  );
};
