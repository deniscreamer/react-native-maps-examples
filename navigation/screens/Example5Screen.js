import React, {Component} from 'react';
import {StyleSheet} from 'react-native';

import {Polyline} from 'react-native-maps';

import ClusteredMapView from 'react-native-maps-super-cluster';

const INITIAL_REGION = {
    latitude: 55.730348,
    longitude: 37.550411,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0922,
};

const track = [
    {
        latitude: 55.740567,
        longitude: 37.535095,
    },
    {
        latitude: 55.737191,
        longitude: 37.538607,
    },
    {
        latitude: 55.733348,
        longitude: 37.543411,
    },
    {
        latitude: 55.725491,
        longitude: 37.549565,
    },
    {
        latitude: 55.719765,
        longitude: 37.563177,
    },
    {
        latitude: 55.716154,
        longitude: 37.573824,
    },
];

class Example5Screen extends Component {
    render() {
        return (
            <ClusteredMapView
                animateClusters={false}
                initialRegion={INITIAL_REGION}
                data={[]}
                style={styles.map}>
                <Polyline
                    coordinates={track} // массив данных
                    strokeColor={'#0000FF'} // Цвет трека
                    strokeWidth={4} // Толщина линии
                />
            </ClusteredMapView>
        );
    }
}

const styles = StyleSheet.create({
    map: {
        flex: 1,
    },
});

export default Example5Screen;
