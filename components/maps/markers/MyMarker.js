import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';

import {Marker} from 'react-native-maps';

export default class MyMarker extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return false;
    }

    render() {
        const {id, location} = this.props;

        const identifier = `marker-${id}`;

        return (
            <Marker
                identifier={identifier}
                tracksViewChanges={false}
                tracksInfoWindowChanges={false}
                coordinate={location}>
                <View style={styles.myMarkerStyle}>
                    <Text style={styles.myMarkerTextStyle}>1</Text>
                </View>
            </Marker>
        );
    }
}

const styles = StyleSheet.create({
    myMarkerStyle: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'red',
        borderWidth: 1,
    },
    myMarkerTextStyle: {
        fontSize: 15,
        fontWeight: 'bold',
    },
});
