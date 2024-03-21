import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { styles } from '../../styles'

const Button = ({label, theme, icon}) => {
	let addButtonStyles, addTextStyles = {};

	switch (theme) {
		case 'primary':
			addButtonStyles = { backgroundColor: '#cecece' };
			break;
		case 'secondary':
			break;
		case 'ghost':
			addButtonStyles = { backgroundColor: 'transparent' };
			addTextStyles = {
				color: '#cecece',
				textDecorationLine: 'underline',
			};
			break;
		default:
			break;
	}
  return (
	<View style={styles.buttonContainer}>
		<Pressable style={[styles.button, addButtonStyles]} 
			onPress={()=> alert("Bro wtf")}
		>
			<Text style={[styles.buttonText, addTextStyles]}>{icon}{label}</Text>
		</Pressable>
	</View>
  )
}

export default Button