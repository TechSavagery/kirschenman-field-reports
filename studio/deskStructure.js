import S from '@sanity/desk-tool/structure-builder';

export default () =>
  S.list()
    .title('Reports')
    .items([
      S.listItem()
        .title('Grape Reports')
        .schemaType('grapeReport')
        .documentTypeList(),
      S.divider(),
    ]);
S.list()
  .title('Settings')
  .items([
    ...S.documentTypeListItems().filter(
      (item) => !['grapeReport', 'post'].includes(item.getId())
    ),
  ]);
