import type { ConfigContext, ExpoConfig } from 'expo/config';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: 'GGDex',
  description: 'Pokédex App',
  slug: 'gg-dex',
  version: '0.1.0-alpha',
  orientation: 'portrait',
  userInterfaceStyle: 'light',
  icon: './src/assets/icon.png',
  splash: {
    image: './src/assets/splash.png',
    resizeMode: 'cover',
    backgroundColor: '#1d3b74',
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: true,
    bundleIdentifier: 'br.com.ggdex.gdmuller',
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './src/assets/adaptive-icon.png',
      backgroundColor: '#1d3b74',
    },
    package: 'br.com.ggdex.gdmuller',
  },
  plugins: [
    [
      '@bacons/link-assets',
      [
        './src/assets/fonts/Poppins-Regular.ttf',
        './src/assets/fonts/Poppins-Medium.ttf',
        './src/assets/fonts/Poppins-SemiBold.ttf',
      ],
    ],
  ],
});
