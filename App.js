import { StatusBar } from 'expo-status-bar';
// import { GeistSans } from 'geist/font/sans';
import { Image, Text, View } from 'react-native';
import PlaceholderImage from './assets/images/background-image.png';
import { styles } from './styles';
import Button from './assets/components/Button';

export default function App() {
  return (
    <View style={styles.container}>
		<Text style={styles.title}>Self Glance</Text>
		<View
			style={styles.imageContainer}
		>
			<Image source={PlaceholderImage}/>
		</View>
		<View style={styles.buttonContainer}>
			<Button
				style={styles.button}
				textStyle={styles.buttonText}
				theme="primary"
				label="Choose a photo" 
				icon={null}
			/>
			<Button
				style={styles.button}
				textStyle={styles.buttonText}
				theme="ghost"
				label="Use selected photo" 
			/>
		</View>
      <StatusBar style="dark" />
    </View>
  );
}
