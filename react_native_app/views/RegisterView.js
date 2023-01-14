import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, Button } from 'react-native';
import { useState } from 'react';
import { loginRegisterStyles } from '../utils/styles';

const RegisterView = ({ navigation }) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
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
                password: password,
                confirmPassword: confirmPassword
            })
        }

        fetch('http://127.0.0.1:5000/register', options)
            .then(
                res => {
                    return res.json()
                }
            )
            .then(
                data => {
                    console.log(data)
                    if (data.error_message) setErrorMessage(data.error_message)
                    else navigation.navigate('Login')
                }
            )
            .catch(error => {
                console.log(error)
            })

    }

    return (
        <View style={loginRegisterStyles.container}>
            <Text style={loginRegisterStyles.loginHeader}>Sign up to an unsecured application</Text>
            <Text style={loginRegisterStyles.textError}>{errorMessage}</Text>
            <TextInput style={loginRegisterStyles.textInput} placeholder='username' value={username} onChangeText={text => setUsername(text)} />
            <TextInput secureTextEntry={true} style={loginRegisterStyles.textInput} placeholder='password' value={password} onChangeText={text => setPassword(text)} />
            <TextInput secureTextEntry={true} style={loginRegisterStyles.textInput} placeholder='confirm password'
                value={confirmPassword} onChangeText={text => setConfirmPassword(text)} />
            <Button title="SIGN UP" onPress={handleSubmit} />
            <Text style={loginRegisterStyles.textDoNot}>Already registered?</Text>
            <Button title="LOG IN" onPress={() => navigation.navigate('Login')} />
            {/* <StatusBar style="auto" /> */}
        </View>
    )
}

export default RegisterView