'use strict';

const ecosystem = process.env.ECOSYSTEM || 'prod';
const mode = {
  dev: 'development',
  prod: 'production',
};

module.exports = {
  apps: [
    {
      name: `dod-${ecosystem}-server`,
      script: './server/index.js',
      env: {
        NODE_ENV: mode[ecosystem],
      },
    },
  ],
};

/**
 * example
 */
// module.exports = {
//   apps : [{
//     script: 'index.js',
//     watch: '.'
//   }, {
//     script: './service-worker/',
//     watch: ['./service-worker']
//   }],

//   deploy : {
//     production : {
//       user : 'SSH_USERNAME',
//       host : 'SSH_HOSTMACHINE',
//       ref  : 'origin/master',
//       repo : 'GIT_REPOSITORY',
//       path : 'DESTINATION_PATH',
//       'pre-deploy-local': '',
//       'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
//       'pre-setup': ''
//     }
//   }
// };