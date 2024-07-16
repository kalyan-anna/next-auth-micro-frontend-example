import { makeEndpoint } from '@zodios/core';

import * as z from 'zod';

export const propertySchema = z.object({
  id: z.string(),
  propertyName: z.string(),
  propertyType: z.string(),
  noOfUnits: z.number(),
  userEmails: z.array(z.string()).optional(),
});

export const getPropertiesApi = makeEndpoint({
  method: 'get',
  path: '/properties',
  response: z.array(propertySchema),
  alias: 'getProperties',
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

export const addNewUserApi = makeEndpoint({
  method: 'patch',
  path: '/properties/:propertyId/add-new-user',
  response: propertySchema,
  alias: 'addNewUser',
  parameters: [
    {
      name: 'propertyId',
      type: 'Path',
      schema: z.string(),
    },
    {
      name: 'body',
      type: 'Body',
      schema: z.object({
        email: z.string(),
      }),
    },
  ],
});
