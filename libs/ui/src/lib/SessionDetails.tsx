import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

interface SessionDetailsProps {
  session: any;
}

export const SessionDetails: React.FC<SessionDetailsProps> = ({ session }) => {
  const result = JSON.stringify(
    {
      isAuthenticated: session.status === 'authenticated',
      name: session.data?.user?.name,
      email: session.data?.user?.email,
      accessToken: session.data?.accessToken,
    },
    null,
    2
  );

  return (
    <section className="my-8 bg-zinc-300 rounded p-4">
      <h4 className="mb-2 text-2xl font-bold">Session Details:</h4>
      <SyntaxHighlighter language="json" wrapLines={true} wrapLongLines={true}>
        {result}
      </SyntaxHighlighter>
    </section>
  );
};
