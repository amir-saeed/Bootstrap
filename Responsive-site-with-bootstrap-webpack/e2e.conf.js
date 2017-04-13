exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',

  capabilities: {
    'browserName': 'chrome'
  },

  specs: ['e2e/test.spec.js'],

  jasmineNodeOpts: {
    showColors: true
  }
};