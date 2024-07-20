import { Button, ListSkeleton } from '@stratapro/ui';
import { useRouter } from 'next/router';
import { ChangeEvent, useState } from 'react';
import { ExistingUserList } from '../../components/ExistingUserList';
import { useAppState } from '../../state/app';
import {
  useAddNewUserMutation,
  usePropertyQuery,
} from '../../state/properties';

export function AccessOverview() {
  const router = useRouter();
  const selectedProperty = useAppState.use.selectedProperty();
  const { isLoading, data } = usePropertyQuery(selectedProperty?.id);
  const mutation = useAddNewUserMutation(selectedProperty?.id ?? 0);
  const [inputValue, setInputValue] = useState('');

  const handleCancel = () => {
    router.push('/dashboard');
  };

  const handleInvite = () => {
    if (inputValue) {
      mutation.mutate(inputValue, {
        onSuccess() {
          router.push('/dashboard');
        },
      });
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <div className="my-4">
        <h1 className="text-4xl font-bold dark:text-white">
          Access Overview 👋
        </h1>
      </div>
      <div className="my-4 text-2xl text-blue-500">
        Selected Property: {data?.propertyName}
      </div>
      {data?.userEmails && data?.userEmails?.length > 0 && (
        <ExistingUserList users={data?.userEmails} />
      )}
      {isLoading && <ListSkeleton />}
      {!isLoading && (
        <div className="my-12 flex flex-col gap-8">
          <div>Add someone new to this property</div>

          <form
            className="max-w-sm"
            noValidate
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@gmail.com"
                required
                value={inputValue}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col md:flex-row gap-2">
              <Button onClick={handleInvite}>Invite</Button>
              <Button variant="secondary" onClick={handleCancel}>
                Cancel
              </Button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default AccessOverview;
