import {
  useMutation,
  UseMutationResult,
  useQuery,
  useQueryClient,
  UseQueryResult,
} from '@tanstack/react-query';
import { accountApiClient } from '../../apis/account.api';
import { Property } from './types';

const propertyKeys = {
  all: ['properties'] as const,
  lists: () => [...propertyKeys.all, 'list'] as const,
  item: (propertyId: string) =>
    [...propertyKeys.lists(), { propertyId }] as const,
};

export const usePropertiesQuery = (): UseQueryResult<Property[]> => {
  return useQuery({
    queryKey: propertyKeys.lists(),
    queryFn: () => accountApiClient.getProperties(),
  });
};

export const usePropertyQuery = (
  propertyId: string | undefined
): UseQueryResult<Property> => {
  return useQuery({
    queryKey: propertyKeys.item(propertyId ?? ''),
    queryFn: () =>
      accountApiClient.getProperty({
        params: { propertyId: propertyId ?? '' },
      }),
    enabled: !!propertyId,
  });
};

export const useAddNewUserMutation = (
  propertyId: string
): UseMutationResult<unknown, Error, string> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (email: string) =>
      accountApiClient.addNewUser(
        { email },
        {
          params: { propertyId: propertyId ?? '' },
        }
      ),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: propertyKeys.item(propertyId),
      });
    },
  });
};
