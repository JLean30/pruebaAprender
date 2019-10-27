import React, { Component } from 'react'
import { Text, View,StyleSheet } from 'react-native'

export class Profile extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Profile</Text>
            </View>
        )
    }
}

export default Profile;
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});


