import React, {Component, useCallback, useEffect, useRef, useMemo} from 'react';
import {View, Image, StyleSheet, Platform, Easing} from 'react-native';

import {Polyline, Marker, AnimatedRegion} from 'react-native-maps';

import ClusteredMapView from 'react-native-maps-super-cluster';

const MY_CAR_IMAGE = require('../../assets/my_car.png');

const DURATION_ANIMATION_MARKER = 2500;
const INITIAL_DELTA = {
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0922,
};

const INITIAL_REGION = {
    latitude: 55.730348,
    longitude: 37.550411,
    ...INITIAL_DELTA,
};

const track = [
    {
        latitude: 55.740567,
        longitude: 37.535095,
        ...INITIAL_DELTA,
    },
    {
        latitude: 55.737191,
        longitude: 37.538607,
        ...INITIAL_DELTA,
    },
    {
        latitude: 55.733348,
        longitude: 37.543411,
        ...INITIAL_DELTA,
    },
    {
        latitude: 55.725491,
        longitude: 37.549565,
        ...INITIAL_DELTA,
    },
    {
        latitude: 55.719765,
        longitude: 37.563177,
        ...INITIAL_DELTA,
    },
    {
        latitude: 55.716154,
        longitude: 37.573824,
        ...INITIAL_DELTA,
    },
];

class Example6Screen extends Component {
    render() {
        return (
            <ClusteredMapView
                animateClusters={false}
                initialRegion={INITIAL_REGION}
                data={[]}
                style={styles.map}>
                <Polyline
                    coordinates={track}
                    strokeColor={'#0000FF'}
                    strokeWidth={4}
                />
                <MarkerAnimated track={track} />
            </ClusteredMapView>
        );
    }
}

const MarkerAnimated = ({track}) => {
    const markerRef = useRef();
    const coordianteIndex = useRef(0);

    const coordinate = useRef(
        new AnimatedRegion(track[coordianteIndex.current]),
    );

    const onAnimate = useCallback(
        (newCoordinate) => {
            if (!Platform.OS === 'android') {
                markerRef.current?.animateMarkerToCoordinate?.(
                    newCoordinate,
                    DURATION_ANIMATION_MARKER,
                );
            } else {
                if (coordinate.current) {
                    coordinate.current.stopAnimation();
                    coordinate.current
                        .timing({
                            ...newCoordinate,
                            easing: Easing.linear,
                            duration: DURATION_ANIMATION_MARKER,
                            isInteraction: false,
                            useNativeDriver: false,
                        })
                        .start();
                }
            }
        },
        [markerRef, coordinate.current],
    );

    const onChangeCoordinate = useCallback(() => {
        const nextIndex = (coordianteIndex.current + 1) % track.length;

        coordianteIndex.current = nextIndex;
        onAnimate(track[nextIndex]);
    }, [track, coordianteIndex.current]);

    useEffect(() => {
        const timeoutRef = setInterval(
            onChangeCoordinate,
            DURATION_ANIMATION_MARKER,
        );
        return () => {
            clearInterval(timeoutRef);
        };
    }, []);

    return useMemo(
        () => (
            <Marker.Animated
                ref={markerRef}
                key={'animated-marker'}
                identifier={'animated-marker'}
                tracksViewChanges={false}
                coordinate={coordinate.current}>
                <View style={styles.container}>
                    <Image
                        source={MY_CAR_IMAGE}
                        resizeMethod={'auto'}
                        resizeMode={'contain'}
                        style={styles.iconImage}
                    />
                </View>
            </Marker.Animated>
        ),
        [markerRef, coordinate],
    );
};

const styles = StyleSheet.create({
    map: {
        flex: 1,
    },
});

export default Example6Screen;
