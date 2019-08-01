---
id: getting-started
title: Getting Started
---

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
        basePath: "/docs"
        config:'config.json' // config file
      }
    }
  ]
};
```
