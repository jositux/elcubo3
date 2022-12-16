const path = require('path')

// next.js configuration
const nextConfig = {
  env: {
    API_URL: 'https://cms.rtvcplay.co',
   // API_URL: 'https://play-cms.rtvc.dev/',
    MEDIA_CONTENT_URL: 'https://rtvcplay-v2.s3.amazonaws.com',
    VIDEO_CONTENT_URL: 'https://streaming.rtvc.gov.co/RTVCPlay-vod/smil:[field_asset_id].smil/playlist.m3u8',
    NEXT_PUBLIC_GOOGLE_ANALYTICS: 'GTM-WK8LQVH',
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    deviceSizes: [320, 375, 420, 768, 1024, 1200, 1600],
    domains: ['rtvcplay-v2.s3.amazonaws.com'],
  },
  crossOrigin: 'anonymous',
  webpack: (config) => {
    config.resolve.modules.push(__dirname);

    config.resolve.alias = {
      ...config.resolve.alias,
    };
    return config;
  },
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "styles/globals/index.scss";`,
  },
};

module.exports = nextConfig;