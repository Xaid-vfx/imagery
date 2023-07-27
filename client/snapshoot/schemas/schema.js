// schemas/pet.js
export default {
    name: 'Images',
    type: 'document',
    title: 'Images',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name'
      },
      {
        name: 'description',
        type: 'text',
        title: 'Description'
      },
      {
        name: 'image',
        type: 'image',
        title: 'Image'
      },
      {
        name: 'price',
        type: 'number',
        title: 'Price'
      },
    ]
  }