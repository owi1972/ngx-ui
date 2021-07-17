/**
 *
 * @param {'doc'|'ui'} pkg
 */
module.exports = pkg => ({
  plugins: {
    '@release-it/conventional-changelog': {
      preset: {
        name: 'conventionalcommits',
        types: [
          {
            type: 'feat',
            section: 'Features'
          },
          {
            type: 'fix',
            section: 'Bug Fixes'
          },
          {
            type: 'perf',
            section: 'Performances'
          },
          {
            type: 'refactor',
            section: 'Refactor'
          },
          {
            type: 'docs',
            section: 'Documentations'
          }
        ]
      },
      infile: `packages/ngx-${pkg}/CHANGELOG.md`
    },
    '@release-it/bumper': {
      in: `packages/ngx-${pkg}/package.json`,
      out: [
        `packages/ngx-${pkg}/package.json`
      ]
    }
  },
  npm: {
    publish: false
  },
  git: {
    push: false,
    commitMessage: '(release-' + pkg + '): ${version}',
    tagName: '${version}' + '-' + pkg
  },
  github: {
    releaseNotes: true
  },
  hooks: {
    'after:bump': [
      'git checkout -- package-lock.json',
      'git checkout -- package.json',
      'git checkout -b release-' + pkg + '/${version}'
    ],
    'after:release': [
      'git push origin HEAD --tags',
      'git checkout -',
      'git merge --no-edit -m=\'chore: release-' + pkg + '/${version}\' release-' + pkg + '/${version}',
      'git push'
    ]
  }
});
