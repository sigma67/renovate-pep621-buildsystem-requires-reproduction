module.exports = {
  branchPrefix: 'test-renovate/',
  username: 'renovate-release',
  gitAuthor: 'Renovate Bot <bot@renovateapp.com>',
  onboarding: false,
  platform: 'github',
  includeForks: true,
  repositories: ['sigma67/renovate-pep621-buildsystem-requires-reproduction'],
  lockFileMaintenance: {
    "enabled": true,
    "schedule": ["at any time"],
    "groupName": "all dependencies"
  },
  packageRules: [
    {
      "groupName": "all dependencies",
      "groupSlug": "all",
      "matchUpdateTypes": [
          "*"
      ],
      "matchPackagePatterns": [
        "*"
      ]
    },
    {
      "matchManagers": ["pep621"],
      "rangeStrategy": "bump",
    },
  ],
};
