import { PropsWithChildren } from 'react';

interface CardProps extends PropsWithChildren {
  title: string;
}

export const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
        {title}
      </h5>

      <div className="mb-3 font-normal text-gray-700 ">{children}</div>
    </div>
  );
};
