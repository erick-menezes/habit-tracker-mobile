import { ActivityIndicator, View } from 'react-native';

import { styles } from './styles';

export function Loading() {
  return (
    <View style={styles.container}>
        <ActivityIndicator 
            color="#7C3AED"
            size={40}
        />
    </View>
  );
}