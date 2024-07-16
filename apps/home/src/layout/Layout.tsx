import { NavBar, PageContainer } from '@stratapro/ui';
import { PropsWithChildren } from 'react';

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  const handleSignin = () => {
    window.location.href = 'http://localhost:8080/account';
  };

  return (
    <div>
      <NavBar activePath="/" onSigninClick={handleSignin} />
      <div className="w-full bg-zinc-50">
        <PageContainer>{children}</PageContainer>
      </div>
    </div>
  );
};
