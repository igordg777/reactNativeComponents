import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';

const MyApp = () => {
    const handlePress = () => {
        Alert.alert('Button pressed!');
    };

    return (
        // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity onPress={handlePress}>
            <View style={{ backgroundColor: 'blue', padding: 10 }}>
                <Text style={{ color: 'white' }}>Press Me</Text>
            </View>
        </TouchableOpacity>
        // </View>
    );
}

export default MyApp;