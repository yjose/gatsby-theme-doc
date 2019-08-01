import React from "react"
import { Link } from "gatsby"

export const BurgerIcon = ({ open, ...props }) => (
  <div className={open ? "burger-menu open" : "burger-menu"} {...props}>
    <div className="bar1" key="b1" />
    <div className="bar2" key="b2" />
    <div className="bar3" key="b3" />
  </div>
)

export const Menu = ({ routes, close }) => {
  return (
    <div className="menu">
      <ul className="menu__list">
        {routes.map(r => (
          <li className="menu__list-item" key={r.id}>
            <SLink label={r.title} path={r.path} close={close} />
            {Array.isArray(r.children) && (
              <ul className="menu__list">
                {r.children.map(l => (
                  <li className="menu__list-item" key={l.id}>
                    <SLink label={l.title} path={l.path} close={close} />
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
export const SLink = ({ label, path, close }) => {
  if (path === undefined)
    return (
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
      <a href="#" className="menu__link">
        {label}
      </a>
    )
  return (
    <Link
      activeClassName="menu__link--active"
      className="menu__link"
      onClick={close}
      to={path}
    >
      {label}
    </Link>
  )
}

const slugify = (str, basePath) => {
  const slug = str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-\$)+/g, "")
  return `${basePath}/${slug}`.replace(/\/\/+/g, "/")
}

export const normalizeRoutes = (data, frontmatters, basePath) =>
  data
    .map(r => {
      if (r.children) {
        const children = r.children
          .map(r => ({
            ...r,
            ...(frontmatters.filter(f => f.id === r.id)[0] || {}),
          }))
          .map(r => ({
            ...r,
            path: r.title && slugify(r.title, basePath),
          }))
        return { ...r, children }
      }
      return {
        ...r,
        ...(frontmatters.filter(f => f.id === r.id)[0] || {}),
      }
    })
    .map(r => ({
      ...r,
      path: r.title && slugify(r.title, basePath),
    }))
