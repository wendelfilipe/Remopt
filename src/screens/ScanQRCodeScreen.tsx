import { SafeAreaView } from "react-native-safe-area-context";
import QRCodeScanner from "../components/QRCodeScanner";
import { useQRCodeScan } from "../hooks/useQRCodeScan";

const ScanQRCodeScreen: React.FC = ({navigation}: any) => {
  
  return(
    <SafeAreaView style={{ flex: 1 }}>
      <QRCodeScanner onRead={(value) => useQRCodeScan(navigation, value)}/>
    </SafeAreaView>

  )
}

export default ScanQRCodeScreen