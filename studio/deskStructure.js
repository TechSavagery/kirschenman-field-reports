import S from "@sanity/desk-tool/structure-builder";
 
export default () =>
  S.list()
    .title('Field Reports')
    .items([
      S.listItem()
        .title('Settings')
        .child(
          S.list()
            .title('General')
            .items([
              S.document()
                .schemaType('reporter')
                .documentId('reporter'),
              S.document()
                .schemaType('produce')
                .documentId('produce')
            ])
        ),
      // Add a visual divider (optional)
      S.divider(),
      // List out the rest of the document types, but filter out the config type
      ...S.documentTypeListItems()
    ])