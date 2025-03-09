const fs = require('fs');
const path = require('path');

const envFile = path.resolve(__dirname, '.env');
if (fs.existsSync(envFile)) {
    const envConfig = fs.readFileSync(envFile, 'utf8');
    envConfig.split('\n').forEach(line => {
        if (line.trim() && !line.startsWith('#')) {
            const [key, value] = line.split('=');
            process.env[key.trim()] = value.trim();
        }
    });
}

module.exports = {
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
    },
    moduleFileExtensions: ['js', 'ts', 'tsx', 'json', 'node'],
    setupFilesAfterEnv: [],
    globals: {
        "process.env": {
            VITE_PEXELS_API_KEY: process.env.VITE_PEXELS_API_KEY || '',
        },
    },
};
