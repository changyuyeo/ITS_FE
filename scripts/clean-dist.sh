#!/bin/sh

find . -name "dist" -print -type d -depth -exec rm -rf {} \;
find . -name "storybook-static" -print -type d -depth -exec rm -rf {} \;
echo -e "\033[32m" ----- clean dist end ----- "\033[m"