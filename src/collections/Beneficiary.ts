import type { CollectionConfig } from 'payload'

import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'

export const Beneficiary: CollectionConfig = {
  slug: 'beneficiary',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      required: true,
    },
    {
      name: 'parent',
      type: 'relationship', // or the appropriate type for your use case
      relationTo: 'policies', // Update this to the correct collection slug
      required: false, // Set to true if this field is mandatory
    },
    {
      name: 'unnessesary info',
      label: 'unessesary info',
      type: 'text',
    },
  ],
}


