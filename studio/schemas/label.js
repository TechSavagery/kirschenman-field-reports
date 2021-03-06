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
    {
      name: 'url',
      title: 'Url',
      type: 'string',
    },
  ],
  orderings: [
    {
      title: 'Name Asc',
      name: 'nameAsc',
      by: [{ field: 'name', direction: 'asc' }],
    },
  ],
};
