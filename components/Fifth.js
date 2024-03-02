import React, { useState } from 'react';
import { View, TextInput, Text } from 'react-native';

const MyApp = () => {
    const [text, setText] = useState('');

    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <TextInput
                placeholder="Enter text"
                onChangeText={setText}
                value={text}
                style={{ borderWidth: 1, padding: 10, width: 200 }}
            />
            <Text>You entered: {text}</Text>
        </View>
    );
}

export default MyApp;
