# Gatsby Theme Doc

This repo is a yarn workspace.

Live Demo: https://gatsby-theme-doc.netlify.com or with the live reactjs-popup website https://react-popup.elazizi.com/

### Features:

✅Create documentation using mdx.

🕵🏼‍react-live integration.

### How to Use In Your Gatsby App

Install theme

```
yarn add gatsby-theme-doc

```

And add it to your config:

```js
// In your gatsby-config.js
module.exports = {
  plugins: [
    // You can should only have one instance of this plugin
    {
      resolve: `gatsby-theme-doc`,
      options: {
        contentPath: "./docs", // mdx files
        basePath: "/docs",
        config:'config.json' // config file
      }
    }
  ]
};


```

A page Docs should look like the following :

```md
---
id: welcome
title: Welcome
---

Your content here
```

and the config file should look like:

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

### Local Development

yarn workspace demo develop
The demo will start at http://localhost:8000

NOTE: If you’re new to Yarn workspaces, check out this post for details.

### Credit

This project is highly inspired by https://docusaurus.io/
