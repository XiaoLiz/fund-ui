// Invoked on the commit-msg git hook by yorkie.

import { bgRed, red, green } from 'chalk'
import { readFileSync } from 'fs'
const msgPath = process.env.GIT_PARAMS
const msg = readFileSync(msgPath, 'utf-8').trim()

const commitRE = /^(revert: )?(dev|feat|fix|docs|dx|style|refactor|perf|test|workflow|build|ci|chore|types|wip|release)(\(.+\))?(.{1,10})?: .{1,50}/
const mergeRe = /^(Merge pull request|Merge branch)/

if (!commitRE.test(msg)) {
  if (!mergeRe.test(msg)) {
    console.log(msg)
    console.error(
      `  ${bgRed.white(' ERROR ')} ${red(
        `invalid commit message format.`
      )}\n\n` +
        red(
          `  Proper commit message format is required for automated changelog generation. Examples:\n\n`
        ) +
        `    ${green(`feat(compiler): add 'comments' option`)}\n` +
        `    ${green(
          `fix(v-model): handle events on blur (close #28)`
        )}\n\n` +
        red(
          `  See https://github.com/vuejs/vue-next/blob/master/.github/commit-convention.md for more details.\n`
        )
    )
    process.exit(1)
  }
}
