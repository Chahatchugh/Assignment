import React from 'react'
import { View, Image, StyleSheet } from 'react-native'

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Image
                resizeMode={'center'}
                source={require('../images/home.png')}
           />
        </View>
    )
}

export default HomeScreen
const styles = StyleSheet.create({
    container: {
        margin: 20,
        justifyContent: 'center', 
        alignItems: 'center', 
        flex: 1 
    },
})