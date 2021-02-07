import React, {useEffect} from 'react'
import { View, Text, TextInput, Button, StyleSheet, BackHandler } from 'react-native'
import { useDispatch, useSelector } from "react-redux";
import { userName } from "../redux/actions/user";

const SettingScreen = () => {
    const name = useSelector(state => state.user.name);
    const dispatch = useDispatch();
    const [text, onChangeText] = React.useState('');
    const onSubmit = () => {
        dispatch(userName(text))
    }
    const onBackPress=()=>{
        dispatch(userName(''))
        onChangeText('')
    }
    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', onBackPress);
        return () => {
            dispatch(userName(''))
            BackHandler.removeEventListener('hardwareBackPress', onBackPress);
        }
    }, [text])
    return (
        <>
        <View style={styles.mainContainer}>
            {name ? <Text style={styles.text}>Hello {name} !!!</Text>:
            <Text style={styles.text}>Please Enter Name</Text>}
            <TextInput
                style={styles.container}
                onChangeText={(text) => onChangeText(text)}
                maxLength= {30}
                value={text}
                placeholder={'Enter Name'}
            />
            <Button
                title="SUBMIT"
                onPress={() => onSubmit()}
            />
        </View>
        </>
    )
}

export default SettingScreen
const styles = StyleSheet.create({
    mainContainer: {
        justifyContent: 'center', 
        flex: 1, 
        margin: 20
    },
    container: {
        height: 40, 
        borderColor: 'gray', 
        borderWidth: 3 , 
        borderColor:  '#00A2ED', 
        width: '100%', 
        marginBottom: 20 
    },
    text: {
        marginBottom: 20
    },
})
