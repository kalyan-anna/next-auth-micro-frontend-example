import { makeEndpoint } from '@zodios/core';

import * as z from 'zod';

export const propertySchema = z.object({
  id: z.string(),
  propertyName: z.string(),
  propertyType: z.string(),
  noOfUnits: z.number(),
});

export const getPropertiesApi = makeEndpoint({
  method: 'get',
  path: '/properties',
  response: z.array(propertySchema),
  alias: 'getProperties',
});
