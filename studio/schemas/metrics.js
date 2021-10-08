export default {
  name: 'metrics',
  title: 'Metrics',
  type: 'object',
  fields: [
    {
      name: 'metricType',
      title: 'metric',
      type: 'string',
    },
    {
      name: 'reportLink',
      title: 'Report Link',
      type: 'string',
    },
    {
      name: 'viewCount',
      title: 'ViewCount',
      type: 'number',
    },
    {
      name: 'firstViewDate',
      title: 'First View Date',
      type: 'date',
    },
    {
      name: 'lastViewDate',
      title: 'Last View Date',
      type: 'date',
    },
  ],
};
