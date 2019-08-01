import React from "react"
import { Link } from "gatsby"
import Layout from "gatsby-theme-docs/src/components/Layout"

export default () => (
  <Layout>
    <div className="index-hero">
      <div className="index-hero-inner">
        <h1 className="index-hero-project-tagline">
          Create Your Library Docs using Gatsby theme
        </h1>
        <div className="index-ctas">
          <Link
            className="index-ctas-get-started-button"
            to="/docs/introduction"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>

    <div className="section">
      <div className="container text--center margin-bottom--xl">
        <div className="row">
          <div className="col">
            <span
              alt="Ready for Translations"
              className="featureImage"
              style={{
                fontSize: "100px",
              }}
            >
              🏋️
            </span>

            <h3>Feature 1 </h3>
            <p className="padding-horiz--md">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque
              quidem vel vero atque dicta, deserunt numquam officia libero animi
              quos cupiditate repudiandae. Nesciunt, ex reprehenderit.
              Consectetur reprehenderit et asperiores neque?
            </p>
          </div>
          <div className="col">
            <span
              alt="Ready for Translations"
              className="featureImage"
              style={{
                fontSize: "100px",
              }}
            >
              💪
            </span>

            <h3>Feature 2</h3>
            <p className="padding-horiz--md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              consequatur corporis itaque voluptatibus dolores labore ratione
              minima maiores quae omnis at quisquam maxime reprehenderit
              aspernatur saepe, natus vitae explicabo accusamus?
            </p>
          </div>
          <div className="col">
            <span
              alt="Ready for Translations"
              className="featureImage"
              style={{
                fontSize: "100px",
              }}
            >
              ⚡️
            </span>

            <h3>Feature 3</h3>
            <p className="padding-horiz--md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              natus itaque libero exercitationem non, a facilis veniam impedit
              dolores minus temporibus voluptas esse tempora aliquid labore
              quidem. Sunt, ullam labore.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)
