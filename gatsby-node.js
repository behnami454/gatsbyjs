const path = require('path')

exports.createPages = async ({ graphql , actions }) => {

    const { data } = await graphql (`
      query Projects {
          allMarkdownRemark {
              nodes {
                  frontmatter {
                      title
                  }
              }
          }
      }
   ` )
   data.allMarkdownRemark.nodes.forEach(node => {
       actions.createPage({
           path: '/projects/' + node.frontmatter.title,
           component: path.resolve('./src/templates/project.details.js'),
           context: { title: node.frontmatter.title }
       })
   })
}