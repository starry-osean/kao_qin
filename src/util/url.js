// config.ts
export function getBaseUrl() {
  const environment = import.meta.env.MODE || 'development';
  const config = {
    development: import.meta.env.VITE_API_BASE_URL || 'https://api.development.com',
    testing: import.meta.env.VITE_API_BASE_URL || 'https://api.testing.com',
    production: import.meta.env.VITE_API_BASE_URL || 'https://api.production.com'
  };
  return config[environment];
}