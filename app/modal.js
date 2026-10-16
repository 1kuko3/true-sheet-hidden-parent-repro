import { Button, View } from 'react-native';

import { TrueSheet } from '@lodev09/react-native-true-sheet';
import { useRouter } from 'expo-router';

export default function Modal() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, padding: 24 }}>
      <Button
        title="Present Child, Go Back"
        onPress={async () => {
          await TrueSheet.present('child');
          router.back();
        }}
      />
    </View>
  );
}
