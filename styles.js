import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		height: '100%',
		backgroundColor: '#25292e',
		alignItems: 'center',
		justifyContent: 'flex-start',
		paddingVertical: '12%',
		gap: 40,
		// fontFamily: GeistSans
	},
	title: {
		color: '#cecece',
		fontSize: 30
	},
	imageContainer: {
		borderRadius: 30,
	},
	buttonContainer: {
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center',
		gap: 20
	},
	button: {
		padding: 12,
		borderRadius: 12,
		fontSize: 20,
		width: '80%',
		alignItems: 'center',
	},
	buttonText: {
		color: '#25292e',
		fontSize: 16,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		gap: 10
	}
  });
  