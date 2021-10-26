export default {
    name: 'user',
    title: 'User',
    type: 'document',
    __experimental_actions: ['update'],
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string'
      },
      {
        name: 'email',
        title: 'Email',
        type: 'string'
      },
      {
        name: 'image',
        title: 'Image',
        type: 'url'
      },
      {
        name: 'password',
        type: 'string',
        hidden: true
      },
      {
        name: 'metrics',
        title: 'Metrics',
        type: 'array',
        of: [{type: 'metrics'}],
      }
    ]
  };