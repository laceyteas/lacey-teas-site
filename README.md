Lacey Teas Site
=====

Based originally on the Tyra Gatsby starter but massively revamped to use components more effectively and CSS Modules

## To develop
`yarn develop`

## To build
`yarn build`

## Adding your Content

This theme uses markdown for writing blog posts, and follows a simple template for adding new posts. To add a new blog post, create a file in `content/posts/` with the following:

```markdown
---

type: "post"
title: "My Awesome Post Title"
author: "My Name"
category: "My Category"
date: "2019-01-05"
slug: "/my-awesome-post"
postImage: "./img/myimage.jpg"
metaDescription: "This is my first awesome and cool post!!!"

---

You can write your post here using markdown! Link to images in the `img` folder using this syntax:

![Alt Text](./img/my-image.jpeg)
```

Images for posts are stored in `content/posts/img/`. Images in the frontmatter will be used as thumbnails for the articles, as well as in search results.

## License

This theme is copywrite Lacey Teas

## Thanks and Mentions

* The [GatsbyJS](https://www.gatsbyjs.org/) Team for creating an amazing platform.
* [Netlify](https://www.netlify.com/) for making static site hosting even easier.
* [Unsplash](https://unsplash.com/) and the Free Photography Community.
