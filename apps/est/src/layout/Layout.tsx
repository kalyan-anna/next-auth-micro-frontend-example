import { NavBar, PageContainer } from '@stratapro/ui';
import { PropsWithChildren } from 'react';

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  const handleSignout = () => {
    console.log('handleSignout clicked...');
  };

  return (
    <div>
      <NavBar
        activePath="/establishment"
        showNav={true}
        authenticated={true}
        onSignoutClick={handleSignout}
      />
      <div className="w-full bg-zinc-50">
        <PageContainer>{children}</PageContainer>
      </div>
    </div>
  );
};
