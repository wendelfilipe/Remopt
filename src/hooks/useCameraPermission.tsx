import { useEffect, useState } from 'react';
import { PermissionsAndroid, Platform } from 'react-native';

export function useCameraPermission() {
  const [granted, setGranted] = useState(false);

  useEffect(() => {
    async function request() {
      if (Platform.OS === 'android') {
        const result = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA
        );
        setGranted(result === PermissionsAndroid.RESULTS.GRANTED);
      } else {
        setGranted(true);
      }
    }

    request();
  }, []);

  return granted;
}
