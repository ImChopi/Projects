import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'my.new.app',
  appName: 'my-new-app',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
