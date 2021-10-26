export default {
    name: 'account',
    title: 'Account',
    type: 'document',
    __experimental_actions: ['update', 'publish'],
    fields: [
      {
        name: 'providerType',
        type: 'string'
      },
      {
        name: 'providerId',
        type: 'string'
      },
      {
        name: 'providerAccountId',
        type: 'string'
      },
      {
        name: 'refreshToken',
        type: 'string'
      },
      {
        name: 'accessToken',
        type: 'string'
      },
      {
        name: 'accessTokenExpires',
        type: 'string'
      },
      {
        name: 'user',
        title: 'User',
        type: 'reference',
        to: { type: 'user' }
      }
    ]
  };