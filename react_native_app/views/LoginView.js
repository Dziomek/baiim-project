import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, Button } from 'react-native';
import { useState } from 'react';
import { loginRegisterStyles } from '../utils/styles';

const LoginView = ({ navigation }) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState(null)

    function handleSubmit() {

        console.log(username, password)
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        }

        fetch('http://127.0.0.1:5000/login', options)
            .then(
                res => {
                    return res.json()
                }
            )
            .then(
                data => {
                    console.log(data)
                    if (data.error_message) setErrorMessage(data.error_message)
                    else navigation.navigate('Home', { username: username })
                }
            )
            .catch(error => {
                console.log(error)
            })

    }

    return (
        <View style={loginRegisterStyles.container}>
            <Text style={loginRegisterStyles.loginHeader}>Sign in to an unsecured application</Text>
            <Text style={loginRegisterStyles.textError}>{errorMessage}</Text>
            <TextInput style={loginRegisterStyles.textInput} placeholder='username' value={username} onChangeText={text => setUsername(text)} />
            <TextInput secureTextEntry={true} style={loginRegisterStyles.textInput} placeholder='password' value={password} onChangeText={text => setPassword(text)} />
            <Button title="LOG IN" onPress={handleSubmit} />
            <Text style={loginRegisterStyles.textDoNot}>Do not have an account?</Text>
            <Button title="CREATE AN ACCOUNT" onPress={() => {
                navigation.navigate('Register')
                }} />
            {/* <StatusBar style="auto" /> */}
        </View>
    )
}

export default LoginView

