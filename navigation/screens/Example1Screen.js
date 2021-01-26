import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Marker} from 'react-native-maps';

import ClusteredMapView from 'react-native-maps-super-cluster';

const INITIAL_REGION = {
    latitude: 55.7414887,
    longitude: 37.5790672,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0922,
};

class Example1Screen extends Component {
    constructor(props) {
        super(props);

        this.renderMarker = this.renderMarker.bind(this);
        this.renderCluster = this.renderCluster.bind(this);

        this.state = {
            data: [
                {
                    id: 1,
                    location: {latitude: 55.7413887, longitude: 37.5790572},
                },
                {
                    id: 2,
                    location: {latitude: 55.7404887, longitude: 37.5793672},
                },
                {
                    id: 3,
                    location: {latitude: 55.7412887, longitude: 37.5790372},
                },
                {
                    id: 4,
                    location: {latitude: 55.7417887, longitude: 37.5791872},
                },
            ],
        };
    }

    renderCluster(cluster, onPress) {
        const pointCount = cluster.pointCount;
        const coordinate = cluster.coordinate;

        return (
            <Marker coordinate={coordinate} onPress={onPress}>
                <View style={styles.myClusterStyle}>
                    <Text style={styles.myClusterTextStyle}>{pointCount}</Text>
                </View>
            </Marker>
        );
    }

    renderMarker(data) {
        const {location} = data;

        return (
            <Marker coordinate={location}>
                <View style={styles.myMarkerStyle}>
                    <Text style={styles.myMarkerTextStyle}>1</Text>
                </View>
            </Marker>
        );
    }

    render() {
        return (
            <ClusteredMapView
                animateClusters={false}
                initialRegion={INITIAL_REGION}
                data={this.state.data}
                renderCluster={this.renderCluster}
                renderMarker={this.renderMarker}
                style={styles.map}
            />
        );
    }
}

const styles = StyleSheet.create({
    map: {
        flex: 1,
    },
    myClusterStyle: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'black',
        borderWidth: 1,
    },
    myClusterTextStyle: {
        fontSize: 15,
        fontWeight: 'bold',
    },
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

export default Example1Screen;
