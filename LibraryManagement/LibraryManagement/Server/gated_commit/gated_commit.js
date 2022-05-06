const octokit = new Octokit({
  auth: 'CTorres66'
})

await octokit.request('application/vnd.github.v3+json', {
  owner: 'OWNER_NAME',
  repo: 'https://github.com/uprm-inso-4117-2021-2022-s2/semester-project-team-14',
  sha: 'c27d339ee6075c1',
  state: 'success',
  target_url: 'https://github.com/uprm-inso-4117-2021-2022-s2/semester-project-team-14/tree/main/LibraryManagement',
  description: 'The build succeeded!',
  context: 'continuous-integratiobn'
})