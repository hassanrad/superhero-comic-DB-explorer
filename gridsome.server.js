// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  api.loadSource(async actions => {
    const SuperheroData = require('./src/data/superheroData.json');

    const collection = actions.addCollection({
      typeName: 'Superhero'
    })

    for (const superhero of SuperheroData) {
      collection.addNode(superhero);
    }
  })

  module.exports = function (api) {
    api.createPages(async ({ graphql, createPage }) => {
      const { data } = await graphql(`{
        allSuperhero {
          edges {
            node {
              id
            }
          }
        }
      }`)
  
      data.allProduct.edges.forEach(({ node }) => {
        createPage({
          path: `/superhero/${node.id}`,
          component: './src/templates/SuperheroPage.vue',
          context: {
            id: node.id
          }
        })
      })
    })
  }
}
