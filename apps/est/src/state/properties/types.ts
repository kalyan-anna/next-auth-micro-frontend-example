import * as z from 'zod';
import { propertySchema } from '../../apis/property.schema';

export type Property = z.infer<typeof propertySchema>;
