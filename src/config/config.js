const devBaseURL = 'http://localhost:8000'
const proBaseURL = 'https://production.org'
export const BASE_URL =
  process.env.NODE_ENV === 'development' ? devBaseURL : proBaseURL

