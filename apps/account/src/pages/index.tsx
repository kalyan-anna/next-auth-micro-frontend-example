import { CardClickable, ListSkeleton } from '@stratapro/ui';
import { Property, usePropertiesQuery } from '../state/properties';
import { useAppState } from '../state/app';
import { useRouter } from 'next/router';
import { useAuthentication } from '@stratapro/auth-lib';

export function Index() {
  const { data, isLoading } = usePropertiesQuery();
  const { setSelectedProperty } = useAppState.use.actions();
  const router = useRouter();
  const { session } = useAuthentication();

  const handleSelectProperty = (item: Property) => {
    setSelectedProperty(item);
    router.push('/dashboard');
  };

  return (
    <>
      <div className="my-4">
        <h1 className="text-4xl font-bold dark:text-white">
          <span className="block text-2xl my-3 font-semibold text-purple-600">
            Hello {session.data?.user?.name},
          </span>
          Welcome to account&apos;s app 👋
        </h1>
      </div>
      <div className="my-12">
        <h2 className="text-3xl font-bold dark:text-white my-3">
          Linked Properties
        </h2>
        {isLoading && <ListSkeleton />}
        <div className="flex flex-col my-2 gap-5">
          {data?.map((item) => (
            <CardClickable
              title={item.propertyName}
              key={item.id}
              onClick={() => handleSelectProperty(item)}
            >
              Type: {item.propertyType}
            </CardClickable>
          ))}
        </div>
      </div>
    </>
  );
}

export default Index;
