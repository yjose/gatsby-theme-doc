import React from "react"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"

import "./index.css"

export default () => (
  <StaticQuery
    query={graphql`
      {
        allDemoJson {
          edges {
            node {
              id
              config {
                name
                nav {
                  links {
                    label
                    url
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={({ allDemoJson }) => {
      const { name, nav } = allDemoJson.edges[0].node.config
      console.log(allDemoJson.edges[0].node)

      return (
        <nav className="navbar navbar--light navbar--fixed-top">
          <div className="navbar__inner">
            <div className="navbar__items">
              <Link aria-current="page" className="navbar__brand" to="/">
                {/* <img role="img" className="navbar__logo" src={img} /> */}
                <strong>{name}</strong>
              </Link>
              {nav.links.map(l => renderLink(l))}
            </div>
          </div>
        </nav>
      )
    }}
  />
)

const renderLink = link => {
  const pattern = /^((http|https|ftp):\/\/)/
  if (!pattern.test(link.url))
    return (
      <Link
        className="navbar__item navbar__link"
        label={link.label}
        position="left"
        to={link.url}
        key={link.label}
      >
        {link.label}
      </Link>
    )
  else
    return (
      <a
        key={link.label}
        className="navbar__item navbar__link"
        label={link.label}
        position="left"
        target="_blank"
        href={link.url}
      >
        {link.label}
      </a>
    )
}
