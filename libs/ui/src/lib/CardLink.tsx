import { AnchorHTMLAttributes } from 'react';

interface CardLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  title: string;
}

export const CardLink: React.FC<CardLinkProps> = ({
  title,
  children,
  ...props
}) => {
  return (
    <a
      className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100"
      {...props}
    >
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <div className="font-normal text-gray-700 dark:text-gray-400">
        {children}
      </div>
    </a>
  );
};
