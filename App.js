import { StatusBar } from 'expo-status-bar';
// import { GeistSans } from 'geist/font/sans';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{
        fontSize: 30
      }}>Self Glance</Text>
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // fontFamily: GeistSans
  },
});
