import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  
  console.log('App rendered', username, email)

  const handleSubmit = () => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username, email})
    };
    
    fetch('http://127.0.0.1:5000/api', options).then(
      response => {
        return response.json()
      }
    ).then(
      data => {
        console.log(data, typeof data)
      }
    )
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <TextInput placeholder='name' value={username} onChangeText={setUsername}/>
      <TextInput placeholder='email' value={email} onChangeText={setEmail}/>
      <Button title="Submit" onPress={handleSubmit} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
