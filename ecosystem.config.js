module.exports = {
    apps: [
      {
        name: 'motor-insurance-nextjs-app',
        script: 'node_modules/next/dist/bin/next',
        args: 'start',
        env: {
          NODE_ENV: 'production',
          PORT: 3000
        },
        watch: true,
      },
    ],
};
