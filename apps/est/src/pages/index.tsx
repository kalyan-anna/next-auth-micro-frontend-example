import { useRouter } from 'next/router';
import { usePropertyQuery } from '../state/properties';
import { ListSkeleton } from '@stratapro/ui';
import { PropertyDetails } from '../components/PropertyDetails';

export function Index() {
  const router = useRouter();
  const { query } = router;
  const selectedPropertyId = Number(query.selectedPropertyId);
  const { isLoading, data } = usePropertyQuery(selectedPropertyId);

  return (
    <>
      <div className="my-4">
        <h1 className="text-4xl font-bold dark:text-white">
          <span className="block text-2xl my-2 font-semibold">
            Hello there,
          </span>
          Welcome to establishment&apos;s app 👋
        </h1>
      </div>
      <div className="my-12">
        <h2 className="text-3xl font-bold dark:text-white my-3">
          Your property details below
        </h2>
        {isLoading && <ListSkeleton />}
        {data && <PropertyDetails data={data} />}
      </div>
    </>
  );
}

export default Index;
