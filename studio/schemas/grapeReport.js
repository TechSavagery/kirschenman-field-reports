export default {
  name: 'grapeReport',
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
        source: 'title' + 'variety',
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
      name: 'inspectionDate',
      title: 'Inspection Date',
      type: 'datetime',
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
      name: 'size',
      title: 'Size',
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
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
  ],

  preview: {
    select: {
      title: 'title',
      reporter: 'reporter.name',
      media: 'mainImage',
      inspectionDate: 'inspectionDate',
    },
    prepare(selection) {
      const { reporter } = selection;
      return Object.assign({}, selection, {
        subtitle: reporter && `by ${reporter}`,
      });
    },
  },
};
