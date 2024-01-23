import fs from 'fs'
const { tools } = JSON.parse(fs.readFileSync('TOOLS.json'))
tools.forEach(r => {
  if (!r.tags) {
    console.log('no tags', r.name)
  }
})
tools.forEach(r => {
  if (!r.language) {
    console.log('no language', r.name, r.github, r.url)
  }
})

tools.forEach(r => {
  if (!r.pub) {
    console.log('no pub', r.name, r.github, r.url)
  }
})

tools.forEach(r => {
  if (!r.img) {
    console.log('no img', r.name, r.github, r.url)
  }
})
