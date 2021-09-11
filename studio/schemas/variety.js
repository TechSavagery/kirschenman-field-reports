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
      name: 'produce',
      title: 'Produce',
      type: 'reference',
      to: [{ type: 'produce' }],
    },
  ],
};
