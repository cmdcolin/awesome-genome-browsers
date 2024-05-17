#!/bin/bash
cd awesome-genome-visualization/public;
identify -format "%f %wx%h\n" *.jpg *.jpeg *.png > ../../dims.txt
cd ../../
node get_dimensions.js
node get_citations.js
node get_stars.js
npx prettier --write TOOLS.json
