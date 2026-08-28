/** @type {import('next').NextConfig} */
const replitDomain = process.env.REPLIT_DEV_DOMAIN || ''

const nextConfig = {
  allowedDevOrigins: [
    '127.0.0.1',
    'localhost',
    ...(replitDomain ? [replitDomain] : []),
  ],
}

module.exports = nextConfig
