import S from '@sanity/desk-tool/structure-builder';

export default () =>
  S.list()
    .title('Settings')
    .items([
      S.listItem().title('Reporters').schemaType('reporter'),
      S.listItem().title('Produce').schemaType('produce'),
      // Add a visual divider (optional)
      S.divider(),
      // List out the rest of the document types, but filter out the config type
      ...S.documentTypeListItems().filter(
        (item) => !['produce', 'reporter'].includes(item.getId())
      ),
    ]);
