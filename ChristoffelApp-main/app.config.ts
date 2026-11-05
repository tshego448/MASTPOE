import type { ExpoConfig } from "expo/config";

const config: ExpoConfig = {
  name: "Christoffel's Restaurant",
  slug: "christoffels-restaurant",
  version: "1.0.0",
  orientation: "portrait",
  scheme: "christoffelsrestaurant",
  userInterfaceStyle: "light",
  ios: {
    supportsTablet: true,
    bundleIdentifier: "com.christoffels.restaurant",
    infoPlist: { ITSAppUsesNonExemptEncryption: false },
  },
  android: {
    predictiveBackGestureEnabled: false,
    package: "com.christoffels.restaurant",
  },
  web: {
    bundler: "metro",
    output: "static",
  },
  plugins: [
    "expo-router",
    [
      "expo-build-properties",
      {
        android: {
          buildArchs: ["armeabi-v7a", "arm64-v8a"],
          minSdkVersion: 24,
        },
      },
    ],
  ],
  experiments: { typedRoutes: true, reactCompiler: true },
};

export default config;
