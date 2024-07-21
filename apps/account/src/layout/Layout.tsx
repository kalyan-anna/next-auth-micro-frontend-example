import { authService } from '@stratapro/auth-lib';
import { NavBar, PageContainer } from '@stratapro/ui';
import { usePathname } from 'next/navigation';
import { PropsWithChildren } from 'react';

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  const pathname = usePathname();

  const handleSignout = () => {
    authService.signOut();
  };

  return (
    <div>
      <NavBar
        activePath="/account/dashboard"
        showNav={pathname !== '/'}
        authenticated={true}
        onSignoutClick={handleSignout}
      />
      <div className="w-full bg-zinc-50">
        <PageContainer>{children}</PageContainer>
      </div>
    </div>
  );
};
