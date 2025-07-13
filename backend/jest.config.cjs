module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.jest.json'
    }
  },
  testMatch: ['**/tests/**/*.test.ts'], // cible uniquement les tests backend
  // ou
  roots: ['<rootDir>/tests'], // cible uniquement le dossier tests du backend
};