import { Button } from '@stratapro/ui';
import { useRouter } from 'next/router';

export function AccessOverview() {
  const router = useRouter();

  const handleCancel = () => {
    router.push('/dashboard');
  };

  const handleInvite = () => {
    router.push('/dashboard');
  };

  return (
    <>
      <div className="my-4">
        <h1 className="text-4xl font-bold dark:text-white">
          Access Overview 👋
        </h1>
      </div>
      <div className="my-12 flex flex-col gap-8">
        <div>Add someone new to this property</div>

        <form className="max-w-sm">
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
            />
          </div>
          <div className="flex flex-col md:flex-row gap-2">
            <Button type="submit" onClick={handleInvite}>
              Invite
            </Button>
            <Button variant="secondary" onClick={handleCancel}>
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AccessOverview;
