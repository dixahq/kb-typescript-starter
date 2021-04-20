# remove previously compiled files
rm -rf kb-javascript-starter

# generate new files
npx tsc

# pretty up all the things
npm run prettier