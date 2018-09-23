import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

class Controller extends Component {
    render() {
        return (
            <View style={styleController.controller}>
                <Text style={styleController.controllName}>CONTROLLER COMPONENT</Text>
                <View style={styleController.buttonContainer}>
                    <TouchableOpacity 
                        style={styleController.button}
                        onPress={() => {
                            this.props.dispatch({ type: 'UP' });
                        }}
                    >
                        <Text style={styleController.buttonText}>➕</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styleController.button}
                        onPress={() => {
                            this.props.dispatch({ type: 'DOWN' });
                        }}
                    >
                        <Text style={styleController.buttonText}>➖</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default connect()(Controller);

const styleController = StyleSheet.create({
    controller: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'yellow',
        alignSelf: 'stretch',
        margin: 20,
        borderRadius: 20
    },
    controllName: {
        fontSize: 20,
        marginBottom: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    button: {
        backgroundColor: 'black',
        // paddingHorizontal: 50,
        // paddingVertical: 25,
        width: 120,
        height: 120,
        margin: 10,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 20
    }
});