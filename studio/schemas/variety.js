export default {
  name: 'variety',
  title: 'Variety',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'produce',
      title: 'Produce',
      type: 'reference',
      to: [{ type: 'produce' }],
    },
  ],
};
