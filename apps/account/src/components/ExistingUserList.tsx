import React from 'react';

export const ExistingUserList: React.FC<{ users: string[] }> = ({ users }) => {
  return (
    <div>
      <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
        Existing users
      </h2>
      <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
        {users.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
