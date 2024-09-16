module.exports = {
  apps: [{
    script: 'rhconstr',
  },],

  deploy: {
    production: {
      key: 'key.pems',
      user: 'rhconstructionus',
      host: '69.57.161.196',
      ref: 'origin/main',
      repo: 'git@github.com:csebiplab/rhV2.git',
      path: '/home/reviewoil.com',
      'pre-deploy-local': '',
      'post-deploy': 'source ~/.nvm/nvm.sh && npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
      'ssh_options': 'ForwardAgent=yes'
    }
  }
};
