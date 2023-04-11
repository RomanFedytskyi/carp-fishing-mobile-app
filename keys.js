import config from './config';

export const googleMapsApi = config.extra.GOOGLE_MAPS_API;

export const firebaseConfig = {
  apiKey: config.extra.FIREBASE_API_KEY,
  authDomain: config.extra.FIREBASE_AUTH_DOMAIN,
  projectId: config.extra.FIREBASE_PROJECT_ID,
  storageBucket: config.extra.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: config.extra.FIREBASE_MESSAGING_SENDER_ID,
  appId: config.extra.FIREBASE_APP_ID,
  measurementId: config.extra.FIREBASE_MEASUREMENT_ID,
};
