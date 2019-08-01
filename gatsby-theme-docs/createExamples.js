const fs = require("fs")

const fileContent = `---
id: welcome
title: Welcome
---

## Wolcome
`
const jsonFile = `
{
  "basePath": "docs",
  "docs": [
    {
      "id": "welcome"
    },
    {
      "id": "getting-started"
    }
  ],
  "config": {
    "name": " gatsby-theme-docs",
    "nav": {
      "links": [
        { "label": "docs", "url": "/docs" },
        {
          "label": "github",
          "url": "https://github.com/yjose/gatsby-theme-docs"
        }
      ]
    }
  }
}
`
const createExample = (contentPath, sidebar) => {
  fs.mkdirSync(contentPath)
  fs.writeFileSync(`${contentPath}/example.md`, fileContent)
  fs.writeFileSync(`${sidebar}`, jsonFile)
}

module.exports = { createExample }
