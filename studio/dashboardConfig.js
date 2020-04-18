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
                  buildHookId: '5e9b56997824fab38b7523f0',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-g638o14r',
                  apiId: '031245ab-7dad-4467-a5a0-ae26e0313799'
                },
                {
                  buildHookId: '5e9b569934c719717bbb9ce2',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-otpi893e',
                  apiId: '0357de82-2c67-4498-9975-d8428628caab'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/maurxeugenio/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-otpi893e.netlify.app', category: 'apps'}
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
