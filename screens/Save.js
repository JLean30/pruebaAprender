import React, { Component } from 'react'
import {View, Text,StyleSheet} from 'react-native';
export class Saved extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Saved</Text>
            </View>
        )
    }
}

export default Saved;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

