import React from 'react';
import { View, ScrollView, Text } from 'react-native';

const MyApp = () => {
    return (
        <ScrollView
            style={{ flex: 1 }}
        >
            <View style={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 20, marginVertical: 10 }}>Item 1</Text>
                <Text style={{ fontSize: 20, marginVertical: 10 }}>Item 2</Text>
                <Text style={{ fontSize: 20, marginVertical: 10 }}>Item 3</Text>
                <Text style={{ fontSize: 20, marginVertical: 10 }}>Item 4</Text>
                <Text style={{ fontSize: 20, marginVertical: 10 }}>Item 5</Text>
                {/* Add more items as needed */}
            </View>
        </ScrollView>
    );
}

export default MyApp;