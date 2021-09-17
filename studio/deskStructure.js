import S from '@sanity/desk-tool/structure-builder';

export default () =>
  S.list()
    .title('KEI Reports')
    .items([
      S.listItem()
        .title('Settings')
        .child(
          S.list()
            // Sets a title for our new list
            .title('Settings')
            // Add items to the array
            // Each will pull one of our new singletons
            .items([
              ...S.documentTypeListItems().filter(
                (item) => !['post','user','account'].includes(item.getId())
              ),
            ])
        ),
      // We also need to remove the new singletons from the main list
      ...S.documentTypeListItems().filter(listItem => ['post'].includes(listItem.getId()))
    ])

