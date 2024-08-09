#!/bin/bash
# https://github.com/gatsbyjs/gatsby-ru/blob/master/docs/docs/how-gatsby-works-with-github-pages.md#deploying-to-a-path-on-github-pages

# First argument is the commit message. Pass in quotes

gatsby clean

# npm run deploy

# Check if a commit message is provided
if [ -n "$1" ]; then
    DEPLOYMSG="$1" npm run deploy
else
    npm run deploy
fi


# In repo Settings>Pages: deploy from gh-pages branch 
