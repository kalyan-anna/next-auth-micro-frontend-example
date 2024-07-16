import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { estApiClient } from '../../apis/est.api';
import { Property } from './types';

const propertyKeys = {
  all: ['properties'] as const,
  lists: () => [...propertyKeys.all, 'list'] as const,
  item: (propertyId: string) =>
    [...propertyKeys.lists(), { propertyId }] as const,
};

export const usePropertyQuery = (
  propertyId: string | undefined
): UseQueryResult<Property> => {
  return useQuery({
    queryKey: propertyKeys.item(propertyId ?? ''),
    queryFn: () =>
      estApiClient.getProperty({
        params: { propertyId: propertyId ?? '' },
      }),
    enabled: !!propertyId,
  });
};
