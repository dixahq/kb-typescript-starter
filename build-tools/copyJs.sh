# copies output files to the other repository

# Move the required css file
mv ../kb-javascript-starter/src/css/main.css ../kb-javascript-starter/main.css

# Remove pre-existing files
rm -rf ../kb-javascript-starter/src

# Copy in new files - these will need to be commited
cp -r kb-javascript-starter ../kb-javascript-starter/src

# Move the css back in
mkdir ../kb-javascript-starter/src/css
mv ../kb-javascript-starter/main.css ../kb-javascript-starter/src/css/main.css