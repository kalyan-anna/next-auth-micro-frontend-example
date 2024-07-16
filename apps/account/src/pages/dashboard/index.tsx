import { CardLink, ListSkeleton } from '@stratapro/ui';
import { useAppState } from '../../state/app';
import { usePropertyQuery } from '../../state/properties';

export function Dashboard() {
  const selectedProperty = useAppState.use.selectedProperty();
  const { isLoading } = usePropertyQuery(selectedProperty?.id);

  return (
    <>
      <div className="my-4">
        <h1 className="text-4xl font-bold dark:text-white">Dashboard</h1>
      </div>
      <div className="my-4 text-2xl text-blue-500">
        Selected Property: {selectedProperty?.propertyName}
      </div>
      {isLoading && <ListSkeleton />}
      {!isLoading && (
        <div className="my-12 flex flex-col gap-8">
          <CardLink title="Establishment" href="/establishment">
            <p>view property details</p>
          </CardLink>
          <CardLink title="Access Overview" href="/account/access-overview">
            <p>Add people</p>
          </CardLink>
        </div>
      )}
    </>
  );
}

export default Dashboard;
