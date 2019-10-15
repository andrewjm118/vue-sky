const pack = require('../package.json')

const bannerTxt = `/*! Vue-sky v${pack.version} | MIT License | github.com/andrewjm118/vue-sky */\n`

process.stdout.write(bannerTxt)
process.stdin.pipe(process.stdout)