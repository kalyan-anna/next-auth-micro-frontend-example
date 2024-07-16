import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { estApiClient } from '../../apis/est.api';
import { Property } from './types';

const propertyKeys = {
  all: ['properties'] as const,
  lists: () => [...propertyKeys.all, 'list'] as const,
  item: (propertyId?: number) =>
    [...propertyKeys.lists(), { propertyId }] as const,
};

export const usePropertyQuery = (
  propertyId: number | undefined
): UseQueryResult<Property> => {
  return useQuery({
    queryKey: propertyKeys.item(propertyId),
    queryFn: () =>
      estApiClient.getProperty({
        params: { propertyId: propertyId ?? 0 },
      }),
    enabled: !!propertyId,
  });
};
