import { useState } from 'react';
import { Button, Text, View } from 'react-native';
import { TrueSheet } from '@lodev09/react-native-true-sheet';
import { useRouter } from 'expo-router';

export default function Index() {
  const router = useRouter();
  const [showMore, setShowMore] = useState(false);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      <Button title="Push Modal" onPress={() => router.push('/modal')} />

      <TrueSheet
        name="parent"
        detents={[0.3, 0.8]}
        initialDetentIndex={0}
        dismissible={false}
        dimmed={false}
      >
        <Text style={{ padding: 24 }}>Parent</Text>
      </TrueSheet>

      <TrueSheet name="child" detents={[0.1, 0.2]} onDidDismiss={() => setShowMore(false)}>
        <View style={{ padding: 24, gap: 12 }}>
          <Button title="Show More" onPress={() => setShowMore(true)} />
          {showMore ? <Text>More content</Text> : null}
        </View>
      </TrueSheet>
    </View>
  );
}
