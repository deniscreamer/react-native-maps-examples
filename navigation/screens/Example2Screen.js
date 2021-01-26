import React, {Component} from 'react';
import {StyleSheet} from 'react-native';

import ClusteredMapView from 'react-native-maps-super-cluster';

import ClusterMarker from '../../components/maps/markers/ClusterMarker';
import MyMarker from '../../components/maps/markers/MyMarker';

const INITIAL_REGION = {
    latitude: 55.7414887,
    longitude: 37.5790672,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0922,
};

class Example2Screen extends Component {
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
        const key = `cluster-marker-${cluster.clusterId}`;

        return <ClusterMarker key={key} cluster={cluster} onPress={onPress} />;
    }

    renderMarker(data) {
        const {id, location} = data;

        const key = `marker-${id}`;

        return <MyMarker key={key} id={id} location={location} />;
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
});

export default Example2Screen;
