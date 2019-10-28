import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput,
    Platform,
    StatusBar,
    ScrollView,
    Image,
    Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Category from '../components/Explore/Category';
import Home from '../components/Explore/Home';

const { height, width } = Dimensions.get('window');
class Explore extends Component {

    componentDidMount() {
        this.startHeaderHeight = 80
        if (Platform.OS == 'android') {
            this.startHeaderHeight = 100 + StatusBar.currentHeight
        }
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <View style={{
                        height: this.startHeaderHeight, backgroundColor: 'white',
                        borderBottomWidth: 1, borderBottomColor: '#dddddd'
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            padding: 10,
                            backgroundColor: 'white',
                            marginHorizontal: 20,
                            marginTop: Platform.OS == 'android' ? 30 : null,
                            shadowOffset: { width: 0, height: 0 },
                            shadowColor: 'black',
                            shadowOpacity: 0.2,
                            elevation: 1,
                            marginBottom: Platform.OS == 'android' ? 30 : null

                        }}>
                            <Icon name="ios-search" size={20}
                                style={{ marginRight: 10 }} />
                            <TextInput
                                placeholder="try new Delhi"
                                placeholderTextColor="grey"
                                style={{
                                    flex: 1, fontWeight: '700'
                                    , backgroundColor: 'white'
                                }} />
                        </View>
                    </View>
                    <ScrollView
                        scrollEventThrottle={16}
                    >
                        <View style={{
                            flex: 1, backgroundColor: 'white',
                            paddingTop: 20
                        }}>
                            <Text style={{
                                fontSize: 24, fontWeight: '700',
                                paddingHorizontal: 20
                            }}>
                                What can we help you find, Varun?
                            </Text>
                            <View style={{ height: 130, marginTop: 20 }}>
                                <ScrollView horizontal={true}
                                    showsHorizontalScrollIndicator={false}>
                                    <Category name='patos' imageUri={require('../assets/home.jpg')} />
                                    <Category name='Experience' imageUri={require('../assets/experiences.jpg')} />
                                    <Category name='Restaurants' imageUri={require('../assets/restaurant.jpg')} />

                                </ScrollView>
                            </View>
                            <View style={{ marginTop: 10, paddingHorizontal: 20 }}>
                                <Text style={{ fontSize: 24, fontWeight: '700' }}>
                                    Introducing Airbnb Plus</Text>
                                <Text style={{ marginTop: 10, fontWeight: '100', fontSize: 16 }}>
                                    A new selection of homes verified for quality & comfort
                                    </Text>

                                <View style={{ width: width - 40, height: 200, marginTop: 20 }}>
                                    <Image
                                        style={{
                                            flex: 1, height: null, width: null,
                                            resizeMode: "cover", borderRadius: 5, borderWidth: 1,
                                            borderColor: '#dddddd'
                                        }}
                                        source={require('../assets/home.jpg')}
                                    />
                                </View>

                            </View>
                            <View style={{marginTop:40}}>
                                <Text
                                style={{fontSize:24, fontWeight:'700',
                                paddingHorizontal:20}}>
                                    Homes Around The World</Text> 
                                    <View style={{ paddingHorizontal: 20, marginTop: 20, flexDirection:"row", flexWrap: "wrap",
                                justifyContent: "space-between" }}>
                                        <Home width={width} imageUri={require('../assets/home.jpg')} />
                                        <Home width={width} imageUri={require('../assets/home.jpg')} />
                                        <Home width={width} imageUri={require('../assets/home.jpg')} />
                                    </View>
                                    

                            </View>
                        </View>
                    </ScrollView>
                </View>

            </SafeAreaView>
        )
    }
}

export default Explore;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

