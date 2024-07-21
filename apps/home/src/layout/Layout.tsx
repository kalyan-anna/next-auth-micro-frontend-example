import { authService } from '@stratapro/auth-lib';
import { NavBar, PageContainer } from '@stratapro/ui';
import { PropsWithChildren } from 'react';

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  const handleSignin = () => {
    authService.signIn();
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
