#!/bin/bash
# https://github.com/gatsbyjs/gatsby-ru/blob/master/docs/docs/how-gatsby-works-with-github-pages.md#deploying-to-a-path-on-github-pages

gatsby clean
npm run deploy

# In repo Settings>Pages: deploy from gh-pages branch 
