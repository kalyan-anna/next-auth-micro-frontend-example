import { CardLink } from '@stratapro/ui';
import { usePropertiesQuery } from '../../state/properties';

export function Dashboard() {
  const { data, isLoading } = usePropertiesQuery();
  console.log('data:', data);
  console.log('isLoading:', isLoading);
  return (
    <>
      <div className="my-4">
        <h1 className="text-4xl font-bold dark:text-white">Dashboard</h1>
      </div>
      <div className="my-12 flex flex-col gap-8">
        <CardLink title="Access Overview" href="/account/access-overview">
          <p>Add people</p>
        </CardLink>
        <CardLink title="Establishment" href="/establishment">
          <p>view property details</p>
        </CardLink>
      </div>
    </>
  );
}

export default Dashboard;
