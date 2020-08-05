export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f2abea43c2175136fdd122f',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-mtro7a9y',
                  apiId: '0e217f41-d1d7-49c4-9414-ee371a42e0ea'
                },
                {
                  buildHookId: '5f2abea4b1f2d40c9db175cc',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-3nk1je49',
                  apiId: 'b25f1f5f-4c95-4f58-989a-8608bb61e5e7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/janharsa/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-3nk1je49.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
