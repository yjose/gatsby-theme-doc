import React from "react"
import { Link, graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer"
import Layout from "../components/Layout"
import mdxComponents from "../components/mdx"
import Sidebar from "../components/Sidebar"

export default ({ data: { mdx }, ...props }) => {
  console.log(props)

  return (
    <Layout>
      <div className="main">
        <Sidebar />
        <div className="markdown markdown-body">
          <MDXProvider components={mdxComponents}>
            <MDXRenderer>{mdx.body}</MDXRenderer>
          </MDXProvider>
          <div className="margin-top--xl margin-bottom--lg">
            {/* <nav className="pagination-nav">
              <div className="pagination-nav__item">
                {prev && (
                  <Link className="pagination-nav__link" to={`/${prev.path}/`}>
                    <h5 className="pagination-nav__link--sublabel">Previous</h5>
                    <h4 className="pagination-nav__link--label">
                      « {prev.name}{" "}
                    </h4>
                  </Link>
                )}
              </div>
              <div className="pagination-nav__item pagination-nav__item--next">
                {next && (
                  <Link className="pagination-nav__link" to={`/${next.path}/`}>
                    <h5 className="pagination-nav__link--sublabel">Next</h5>
                    <h4 className="pagination-nav__link--label">{next.name} »</h4>
                  </Link>
                )}
              </div>
            </nav> */}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
      }
      body
    }
  }
`
