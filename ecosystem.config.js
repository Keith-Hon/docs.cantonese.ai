module.exports = {
    apps: [
        {
            name: 'docs-cantonese-ai',
            cwd: '/home/keithhon/Desktop/docs.cantonese.ai',
            script: 'npm run start',
            instances: 1,
            autorestart: true,
            watch: false,
            max_memory_restart: '1G',
            env: {
                NODE_ENV: 'production',
                PORT: 3080
            }
        }
    ]
};