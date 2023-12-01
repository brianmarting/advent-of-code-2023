module.exports = {
    testEnvironment: 'node',
    roots: ['__tests__'],
    testMatch: ['**/*.test.ts'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest'
    }
};