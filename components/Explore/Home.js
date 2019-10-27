import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

class Home extends Component {
    render() {
        return (
            
                <View
                    style={{ width: this.props.width / 2, height: this.props.height / 2 }}>
                    <View style={{ flex: 1 }}>
                        <Image source={this.props.imageUri}
                            style={{
                                flex: 1, width: null, height: null,
                                resizeMode: "cover"
                            }} />
                    </View>
                    <View style={{
                        flex: 1, alignItems: "flex-start",
                        justifyContent: 'space-evenly', paddingLeft: 10
                    }}>
                        <Text style={{
                            fontSize: 14,
                            color: '#b63838'
                        }}>Private Room</Text>
                        <Text style={{
                            fontSize: 12,
                            fontWeight: 'bold'
                        }}>The cozy Palace</Text>
                        <Text style={{ fontSize: 12 }}>$82</Text>

                    </View>

                </View>

            
        );
    }
}
export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});