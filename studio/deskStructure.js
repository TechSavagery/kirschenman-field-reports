import S from '@sanity/desk-tool/structure-builder';
import client from 'part:@sanity/base/client';

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
                (item) => !['post', 'user', 'account'].includes(item.getId())
              ),
            ])
        ),
      S.listItem()
        .title('Grape Reports')
        .child(() => {
          const type = 'post';
          return client
            .fetch(
              '* [_type == $type] | order(publishedAt desc) {_id, _type, publishedAt, week, _createdAt}',
              {
                type,
              }
            )
            .then((docs) => {
              // Create a map of weeks
              var weeks = {};
              docs.forEach((d) => {
                const week =
                  d.week.toUpperCase().replace('EEK-', '') +
                  '-' +
                  new Date(d._createdAt).getFullYear();
                if (!weeks[week]) {
                  weeks[week] = [];
                }
                weeks[week].push(d._id);
              });
              return S.list()
                .title('Grape Reports By Week')
                .id('week')
                .items(
                  Object.keys(weeks).map((week) => {
                    return S.listItem()
                      .id(week)
                      .title(week)
                      .child(
                        S.documentList()
                          .id(type)
                          .title(`Reports from ${week}`)
                          .filter(`_id in $ids`)
                          .params({ ids: weeks[week] })
                      );
                  })
                );
            });
        }),
      ...S.documentTypeListItems().filter((listItem) =>
        ['user'].includes(listItem.getId())
      ),
    ]);
