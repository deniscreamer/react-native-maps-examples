import React from 'react';
import {StyleSheet, Text} from 'react-native';

import {TouchableOpacity} from 'react-native-gesture-handler';

const Button = ({label, ...props}) => {
    return (
        <TouchableOpacity style={styles.container} {...props}>
            <Text style={styles.buttonText}>{label}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 250,
        height: 45,
        backgroundColor: 'blue',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 8,
    },
    buttonText: {
        color: 'white',
        fontSize: 15,
    },
});

export default Button;
