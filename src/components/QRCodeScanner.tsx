import React, { useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Camera, CameraType } from 'react-native-camera-kit';
import ScannerFrame from './ScannerFrame';
import { useIsFocused } from '@react-navigation/native';

type Props = {
  onRead: (value: string) => void;
};

const QRCodeScanner: React.FC<Props> = ({ onRead }) => {
  const isFocused = useIsFocused();
  const scanned = useRef(false);

  const handleRead = (event: any) => {
    if (scanned.current) return;

    const value = event?.nativeEvent?.codeStringValue;
    if (value) {
      scanned.current = true;
      onRead(value);
    }
  };

  
  if (!isFocused) {
    scanned.current = false;
    return null;
  }


  return (
    <View style={styles.container}>
        <Camera
          style={styles.camera}
          cameraType={CameraType.Back}
          scanBarcode={true}
          onReadCode={handleRead}
        />
        <View style={styles.frame}>
          <ScannerFrame/>
        </View>
      <View style={styles.top}>
        <Text style={styles.text}>Aponte a camêra para o código QR</Text>
      </View>
    </View>
  );
};

export default QRCodeScanner;

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems:  'center'
  },
  containerCamera: {
    borderWidth: 5,
    borderColor: 'grey'
  },
  camera:{
    marginTop: 45,
    width:240,
    height: 240
  },
  frame:{ 
    ...StyleSheet.absoluteFill,
    justifyContent: 'center',
    alignItems: 'center'
  },
  top: {
  },
  text: {
    color: '#fff',
    padding: 10,
    borderRadius: 8,
  },
});
