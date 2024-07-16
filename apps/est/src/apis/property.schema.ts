import { makeEndpoint } from '@zodios/core';

import * as z from 'zod';

export const propertySchema = z.object({
  id: z.string(),
  propertyName: z.string(),
  propertyType: z.string(),
  noOfUnits: z.number(),
  userEmails: z.array(z.string()).optional(),
});

export const getPropertyApi = makeEndpoint({
  method: 'get',
  path: '/properties/:propertyId',
  response: propertySchema,
  alias: 'getProperty',
  parameters: [
    {
      name: 'propertyId',
      type: 'Path',
      schema: z.string(),
    },
  ],
});
