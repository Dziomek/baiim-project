import React, { useState, useEffect } from 'react'
import { Text, View, TextInput, Button } from 'react-native';
import { loginRegisterStyles } from '../utils/styles'

const HomeView = ({navigation, route}) => {
    
    const username = route.params.username
    const [posts, setPosts] = useState([])
    const [content, setContent] = useState('')

    useEffect(() => {
        getPosts()
    }, []);

    function getPosts() {
        fetch(`http://127.0.0.1:5000/posts/${username}`)
            .then(
                res => { 
                    return res.json()
                }
            ).then(
                data => {
                    if (data) setPosts(data.posts)
                }
            )
    }

    async function submitPost() {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                content: content
            })
        }
        console.log(username, content)
        await fetch('http://127.0.0.1:5000/submit-post', options)
            .then(
                res => {
                    return res.json()
                }
            ).then(
                data => {
                    console.log(data)
                }
            )
    }
    
    return (
        <View style={loginRegisterStyles.container}>
            <Text style={loginRegisterStyles.loginHeader}>Logged in as {username}</Text>
            <Text style={loginRegisterStyles.loginHeader}>{posts.map((post, index) => {
                return <p key={index}>{post.content}</p>
            })}</Text>
            <TextInput style={loginRegisterStyles.textInput} placeholder='post content...' value={content} onChangeText={text => setContent(text)}/>
            <Button title="Add post" onPress={async () => {
                await submitPost()
                getPosts()
                }}/>
            {/* <Button title="Log out" onPress={() => navigation.navigate('Login')}/> */}
        </View>
    )
}

export default HomeView