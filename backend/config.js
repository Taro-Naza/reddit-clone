import dotenv from 'dotenv';

dotenv.config();

const required = [
    'SERVER_PORT',
    'DB_USER',
    'DB_PASS',
    'DB_NAME',
    'DB_HOST',
    'DB_PORT'
];
required.forEach((key) => {
    if (process.env[key] === undefined) {
        console.error(`Missing configuration value for key ${key}`);
        process.exit(1);
    }
});
