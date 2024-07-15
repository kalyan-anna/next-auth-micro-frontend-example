import { NavBar, PageContainer } from '@stratapro/ui';
import { PropsWithChildren } from 'react';

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <NavBar activePath="/" />
      <div className="w-full bg-zinc-50">
        <PageContainer>{children}</PageContainer>
      </div>
    </div>
  );
};
