import React from 'react'
import { View, Text, Button, Linking, StyleSheet } from 'react-native'

const ProfileScreen = ({navigation, route}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}> Hello, I am Chahat chugh . I am Working at Kellton Tech as a Software Engineer.I am Highly Expertise in React Native with 2 Years of experience and had worked on very know 4 Projects . At the same time, I Continue my learning for that you can visit my github by simply clicking on "VISIT  GITHUB". </Text>
            <Button
                title="Visit github"
                onPress={() => Linking.openURL('https://github.com/Chahatchugh?tab=repositories')} 
            />
        </View>
    )
}

export default ProfileScreen
const styles = StyleSheet.create({
    container: {
        margin: 20,
        justifyContent: 'center', 
        alignItems: 'center', 
        flex: 1 
    },
    text: {
        marginBottom: 20
    },
})