export default {
  name: 'flavor',
  title: 'Flavor',
  type: 'document',
  __experimental_actions: ['update'],
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
  ],
};
