import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import Controller from './Controller';

import { connect } from 'react-redux';

StatusBar.setBackgroundColor('red');

class App extends Component {
    render() {
        // const size = this.props.myIsHighLight ? 100 : 50;
        const color = this.props.myIsHighLight ? 'black' : 'white';
        return (
            <View style={styleApp.container}>
                <View style={styleApp.header}>
                    <Text style={styleApp.appName}>APP COMPONENT</Text>
                    <Text style={{ fontSize: 80, color }}>{ this.props.myValue }</Text>
                </View>
                <Controller />
            </View>
        );
    }
}

function mapStateToProps(state) {
    return { 
        myValue: state.value,
        myIsHighLight: state.isHighligh
    }
}

export default connect(mapStateToProps)(App);

const styleApp = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
        paddingTop: 30
    },
    header: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    appName: {
        color: 'white',
        fontSize: 30,
        textAlign: 'center'
    },
    value: {
        color: 'yellow',
        fontSize: 60
    }
});

