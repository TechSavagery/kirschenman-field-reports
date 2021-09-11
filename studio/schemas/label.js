export default {
  name: 'label',
  title: 'Label',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'logoImage',
      title: 'Logo',
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
