'use strict'

const program = require('commander')

const githubIsStarred = require('github-is-starred')
const { version } = require('../package')

module.exports = async (argv) => {
  program
    .name('github-is-starred')
    .version(version)
    .usage('[options]')
    .option('-r, --repo <string>', 'Full name of GitHub repo to check')
    .option('-u, --username <string>', 'GitHub username of user to check')
    .parse(argv)

  const opts = {
    repo: program.repo,
    username: program.username
  }

  const isStarred = await githubIsStarred(opts)
  console.log(isStarred)
  return isStarred
}

module.exports(process.argv)
  .catch((err) => {
    console.error(err)
    process.exit(1)
  })
