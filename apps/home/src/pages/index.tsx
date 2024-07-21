import { Card, SessionDetails } from '@stratapro/ui';
import { Hero } from '../components/Hero';
import { NextSteps } from '../components/NextSteps';
import { useSession } from 'next-auth/react';

export function Index() {
  const session = useSession();

  return (
    <>
      <div id="welcome">
        <h1>
          <span> Hello there, </span>
          Welcome 👋
        </h1>
      </div>

      <SessionDetails session={session as any} />

      <Hero />

      <div className="my-8 flex justify-center">
        <div className="flex flex-col justify-center items-center gap-5">
          <Card title="Integrated Security Systems">
            <p>Manage access to common areas and monitor entry/exit points</p>
          </Card>
          <Card title="Facility Booking">
            <p>
              Allow residents to book common facilities like gyms, pools, or
              event rooms.
            </p>
          </Card>
          <Card title="Utility Management">
            <p>Track and manage utility usage (e.g., water, electricity)</p>
          </Card>
        </div>
      </div>

      <NextSteps />
    </>
  );
}

export default Index;
