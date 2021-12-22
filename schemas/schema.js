// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({

  // We name our schema
  name: 'mySchema',

  // Then proceed to concatenate our document types (just one, for now)
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    {
      // This is the display name for the type
      title: 'Person',

      // The identifier for this document type used in the api's
      name: 'person',

      // Documents have the type 'document'. Your schema may describe types beyond documents
      // but let's get back to that later.
      type: 'document',

      // Now we proceed to list the fields of our document
      fields: [
        // This document has only one field
        {
          // The display name for this field
          title: 'Name',

          // The identifier for this field used in the api's
          name: 'name',

          // The type of this field
          type: 'string',
        },
        {
          // The display name for this field
          title: 'Email',

          // The identifier for this field used in the api's
          name: 'email',

          // The type of this field
          type: 'email',
        },
        {
          // The display name for this field
          title: 'Phone Number',

          // The identifier for this field used in the api's
          name: 'phone',

          // The type of this field
          type: 'string',
        },
        {
          // The display name for this field
          title: 'URL',

          // The identifier for this field used in the api's
          name: 'url',

          // The type of this field
          type: 'url',
        }
      ]
    },
    {
      title: 'Book',
      name: 'book',
      type: 'document',
      fields: [
        {
          title: 'Title',
          name: 'title',
          type: 'string'
        },

        {
          title: 'Cover',
          name: 'cover',
          type: 'image'
        },

        {
          title: 'Author',
          name: 'author',
          // A reference is a way to point to another document
          type: 'reference',
          // This reference is only allowed to point to a document of the type person,
          // we could list more types, but let's keep this simple:
          to: [{type: 'person'}]
        }
      ]
    }
  ])
})