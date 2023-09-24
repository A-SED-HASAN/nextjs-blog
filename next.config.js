const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: 'admin',
        mongodb_password: 'wY1P8nST19TfSK0T',
        mongodb_cluster: 'cluster-0',
        mongodb_database: 'blog-dev',
      },
    }
  }
  return {
    env: {
      mongodb_username: 'admin',
      mongodb_password: 'wY1P8nST19TfSK0T',
      mongodb_cluster: 'cluster-0',
      mongodb_database: 'blog',
    },
  }
}
