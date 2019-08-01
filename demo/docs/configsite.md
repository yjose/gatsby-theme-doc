---
id: config-site
title: Site configuration
---

# Site Config

the config file should look like:

```json
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
    "name": "📖  gatsby-theme-doc",
    "nav": {
      "links": [
        { "label": "Docs", "url": "/docs" },
        {
          "label": "Github",
          "url": "https://github.com/yjose/gatsby-theme-doc"
        }
      ]
    }
  }
}
```
