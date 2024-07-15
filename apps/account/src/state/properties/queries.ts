import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { accountApiClient } from '../../apis/account.api';
import { Property } from './types';

const propertyKeys = {
  all: ['properties'] as const,
  lists: () => [...propertyKeys.all, 'list'] as const,
  list: (propertyId: string) =>
    [...propertyKeys.lists(), { propertyId }] as const,
};

export const usePropertiesQuery = (): UseQueryResult<Property[]> => {
  return useQuery({
    queryKey: propertyKeys.lists(),
    queryFn: () => accountApiClient.getProperties(),
  });
};
