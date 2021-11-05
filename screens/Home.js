import React, { Component } from 'react';
import { Text, View, StyleSheet, Platform, StatusBar, SafeAreaView, TouchableOpacity } from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (

            <View
                style={styles.container}>
                    <SafeAreaView style={styles.droidSafeArea}/>
                <View style={styles.titleBar}>
                <Text style={styles.titleT}>Iss Tracker App</Text>
                </View>
                <TouchableOpacity style={styles.routeCard}>
                <Text style={styles.routeText}>Iss Location</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.routeCard}>
                <Text style={styles.routeText}>Meteors</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    titleT:{
        color: 'red',
        fontSize: 35,
        fontFamily: 'Algerian',
        textAlign: 'center'
    },
    droidSafeArea:{
        marginTop: Platform.OS==="android"?StatusBar.currentHeight:0
    },
    titleBar:{
        flex: 0.15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    routeCard:{
        flex: 0.25,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        marginTop: 50,
        marginLeft: 50,
        marginRight: 50,
        width: '50%',
        borderRadius: 50,
        backgroundColor: 'white'
    },
    routeText:{
        fontSize: 20,
        paddingRight: 120,
        marginTop: 30
    }
})