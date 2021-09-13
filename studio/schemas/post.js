export default {
  name: 'post',
  title: 'Grape Report',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'reporter',
      title: 'reporter',
      type: 'reference',
      to: { type: 'reporter' },
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
    {
      name: 'label',
      title: 'Label',
      type: 'reference',
      to: [{ type: 'label' }],
    },
    {
      name: 'variety',
      title: 'Variety',
      type: 'reference',
      to: [{ type: 'variety' }],
    },
    {
      name: 'brix',
      title: 'Brix',
      type: 'number',
    },
    {
      name: 'sizeMin',
      title: 'Minimum Size (mm)',
      type: 'string',
    },
    {
      name: 'sizeMax',
      title: 'Maximum Size (mm)',
      type: 'string',
    },
    {
      name: 'appearance',
      title: 'Appearance',
      type: 'reference',
      to: [{ type: 'appearance' }],
    },
    {
      name: 'flavor',
      title: 'Flavor',
      type: 'reference',
      to: [{ type: 'flavor' }],
    },
    {
      name: 'firmness',
      title: 'Firmness',
      type: 'reference',
      to: [{ type: 'firmness' }],
    },
    {
      name: 'stems',
      title: 'Stems',
      type: 'reference',
      to: [{ type: 'stems' }],
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'image' }],
    },
    {
      name: 'week',
      type: 'string',
      title: 'Week',
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          {
            title: 'Week 1',
            value: 'week-1',
          },
          {
            title: 'Week 2',
            value: 'week-2',
          },
          {
            title: 'Week 3',
            value: 'week-3',
          },
          {
            title: 'Week 4',
            value: 'week-4',
          },
          {
            title: 'Week 5',
            value: 'week-5',
          },
          {
            title: 'Week 6',
            value: 'week-6',
          },
          {
            title: 'Week 7',
            value: 'week-7',
          },
          {
            title: 'Week 8',
            value: 'week-8',
          },
          {
            title: 'Week 9',
            value: 'week-9',
          },
          {
            title: 'Week 10',
            value: 'week-10',
          },
          {
            title: 'Week 11',
            value: 'week-11',
          },
          {
            title: 'Week 12',
            value: 'week-12',
          },
          {
            title: 'Week 13',
            value: 'week-13',
          },
          {
            title: 'Week 14',
            value: 'week-14',
          },
          {
            title: 'Week 15',
            value: 'week-15',
          },
          {
            title: 'Week 16',
            value: 'week-16',
          },
          {
            title: 'Week 17',
            value: 'week-17',
          },
          {
            title: 'Week 18',
            value: 'week-18',
          },
          {
            title: 'Week 19',
            value: 'week-19',
          },
          {
            title: 'Week 20',
            value: 'week-20',
          },
          {
            title: 'Week 21',
            value: 'week-21',
          },
          {
            title: 'Week 22',
            value: 'week-22',
          },
          {
            title: 'Week 23',
            value: 'week-23',
          },
          {
            title: 'Week 24',
            value: 'week-24',
          },
          {
            title: 'Week 25',
            value: 'week-25',
          },
          {
            title: 'Week 26',
            value: 'week-26',
          },
          {
            title: 'Week 27',
            value: 'week-27',
          },
          {
            title: 'Week 28',
            value: 'week-28',
          },
          {
            title: 'Week 29',
            value: 'week-29',
          },
          {
            title: 'Week 30',
            value: 'week-30',
          },
          {
            title: 'Week 31',
            value: 'week-31',
          },
          {
            title: 'Week 32',
            value: 'week-32',
          },
          {
            title: 'Week 33',
            value: 'week-33',
          },
          {
            title: 'Week 34',
            value: 'week-34',
          },
          {
            title: 'Week 35',
            value: 'week-35',
          },
          {
            title: 'Week 36',
            value: 'week-36',
          },
          {
            title: 'Week 37',
            value: 'week-37',
          },
          {
            title: 'Week 38',
            value: 'week-38',
          },
          {
            title: 'Week 39',
            value: 'week-39',
          },
          {
            title: 'Week 40',
            value: 'week-40',
          },
          {
            title: 'Week 41',
            value: 'week-41',
          },
          {
            title: 'Week 42',
            value: 'week-42',
          },
          {
            title: 'Week 43',
            value: 'week-43',
          },
          {
            title: 'Week 44',
            value: 'week-44',
          },
          {
            title: 'Week 45',
            value: 'week-45',
          },
          {
            title: 'Week 46',
            value: 'week-46',
          },
          {
            title: 'Week 47',
            value: 'week-47',
          },
          {
            title: 'Week 48',
            value: 'week-48',
          },
          {
            title: 'Week 49',
            value: 'week-49',
          },
          {
            title: 'Week 50',
            value: 'week-50',
          },
          {
            title: 'Week 51',
            value: 'week-51',
          },
          {
            title: 'Week 52',
            value: 'week-52',
          },
        ],
      },
    },
  ],

  preview: {
    select: {
      title: 'title',
      reporter: 'reporter.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const { reporter } = selection;
      return Object.assign({}, selection, {
        subtitle: reporter && `by ${reporter}`,
      });
    },
  },
};
