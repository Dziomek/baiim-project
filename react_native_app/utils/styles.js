import { StyleSheet } from 'react-native';
import { screenWidth, screenHeight } from './Dimensions';

export const loginRegisterStyles = StyleSheet.create({
    loginHeader: {
        color: 'black',
        fontSize: 30,
        marginBottom: screenHeight * 0.05,
    },
    container: {
        flex: 1,
        backgroundColor: '#F7ED92',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInput: {
        height: screenHeight * 0.05,
        width: screenWidth * 0.6,
        borderWidth: 2,
        padding: 10,
        borderColor: 'white',
        borderRadius: 10,
        marginBottom: screenHeight * 0.03,
    },
    textDoNot: {
        margin: screenHeight * 0.03,
    },
    textError: {
      margin: screenHeight * 0.03,
      color: 'red'
  }
});