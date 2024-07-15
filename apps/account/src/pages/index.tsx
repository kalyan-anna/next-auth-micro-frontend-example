import { CardClickable, ListSkeleton } from '@stratapro/ui';
import { Property, usePropertiesQuery } from '../state/properties';

export function Index() {
  const { data, isLoading } = usePropertiesQuery();

  const handleSelectProperty = (item: Property) => {
    console.log('selected property:', item);
  };

  return (
    <>
      <div className="my-4">
        <h1 className="text-4xl font-bold dark:text-white">
          <span className="block text-2xl my-2 font-semibold">
            Hello there,
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
