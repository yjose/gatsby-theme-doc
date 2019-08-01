const fs = require("fs")
// Make sure the data directory exists
const { createExample } = require("./createExamples")

exports.onPreBootstrap = ({ reporter }, options) => {
  const contentPath = options.contentPath || "docs"
  const config = options.configFile || "config.json"
  if (!fs.existsSync(contentPath)) {
    reporter.info(`creating the ${contentPath} directory`)
    createExample(contentPath, config)
  }
}

const slugify = str => {
  const slug = str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-\$)+/g, "")
  return `${slug}`.replace(/\/\/+/g, "/")
}

exports.createPages = async ({ actions, graphql, reporter }, options) => {
  const basePath = options.basePath || "/docs"

  actions.createPage({
    path: basePath,
    component: require.resolve("./src/templates/index.js"),
  })
  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            frontmatter {
              id
              title
            }
            body
          }
        }
      }
      allDemoJson {
        edges {
          node {
            id
            docs {
              id
            }
          }
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panic("error loading events", result.errors)
    return
  }
  const pages = result.data.allMdx.edges
  const sidebarItemsId = result.data.allDemoJson.edges[0].node.docs[0].id
  // get the first sidebar element and /docs
  const f = pages.filter(
    ({ node: { frontmatter } }) => (frontmatter.id = sidebarItemsId)
  )[0].node
  const fSlug = `${basePath}/${slugify(f.frontmatter.title)}`

  actions.createRedirect({
    fromPath: basePath,
    toPath: fSlug,
    isPermanent: true,
  })

  pages.forEach(({ node }) => {
    const slug = `${basePath}/${slugify(node.frontmatter.title)}`
    actions.createPage({
      path: slug,
      component: require.resolve("./src/templates/page.js"),
      context: {
        id: node.id,
      },
    })
  })
}

// exports.createPages = ({ actions, reporter }) => {
//   reporter.warn("make sure to load data from somewhere!")

//   // TODO replace this with data from somewhere
//   actions.createPage({
//     path: "/",
//     component: require.resolve("./src/templates/page.js"),
//     context: {
//       heading: "Your Theme Here",
//       content: `
//         <p>
//           Use this handy theme example as the basis for your own amazing theme!
//         </p>
//         <p>
//           For more information, see
//           <a href="https://themejam.gatsbyjs.org">themejam.gatsbyjs.org</a>.
//         </p>
//       `,
//     },
//   })
// }

// exports.createPages = ({graphql, actions}) => {
//   const {createPage} = actions;
//   return new Promise((resolve, reject) => {
//     resolve(
//       graphql(
//         `
//           {
//             allMdx(sort: {order: ASC, fields: [frontmatter___position]}) {
//               edges {
//                 node {
//                   id
//                   frontmatter {
//                     id
//                     path
//                     title
//                     position
//                     redirects
//                   }
//                   code {
//                     scope
//                   }
//                 }
//               }
//             }
//           }
//         `,
//       ).then(result => {
//         if (result.errors) {
//           reject(result.errors);
//         }
//         const {edges} = result.data.allMdx;
//         const dd = sidebar.docs.reduce((a, b) => {
//           if (b.children)
//             return [...a, ...b.children.reduce((e, f) => [...e, f.id], [])];
//           return [...a, b.id];
//         }, []);

//         const pages = dd.map(
//           n => edges.filter(({node}) => node.frontmatter.id === n)[0],
//         );

//         pages.forEach(async ({node}, i) => {
//           const prev = i === 0 ? null : pages[i - 1].node;
//           const next = i === pages.length - 1 ? null : pages[i + 1].node;

//           createPage({
//             path: getUrlFromPath(node.frontmatter.path),
//             component: path.resolve('./src/template/Template.js'),

//             context: {
//               id: node.id,
//               name: node.frontmatter.path,
//               prev: prev && {
//                 path: getUrlFromPath(prev.frontmatter.path),
//                 name: prev.frontmatter.path,
//               },
//               next: next && {
//                 path: getUrlFromPath(next.frontmatter.path),
//                 name: next.frontmatter.path,
//               },
//             },
//           });

//           if (node.frontmatter.redirects) {
//             node.frontmatter.redirects.forEach(fromPath => {
//               createPage({
//                 path: getUrlFromPath(fromPath),
//                 component: path.resolve('./src/template/Template.js'),
//                 context: {
//                   id: node.id,
//                   name: node.frontmatter.path,
//                   prev: prev && {
//                     path: getUrlFromPath(prev.frontmatter.path),
//                     name: prev.frontmatter.path,
//                   },
//                   next: next && {
//                     path: getUrlFromPath(next.frontmatter.path),
//                     name: next.frontmatter.path,
//                   },
//                 },
//               });
//             });
//           }
//         });
//       }),
//     );
//   });
// };
