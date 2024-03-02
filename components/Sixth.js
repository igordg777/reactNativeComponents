import React from 'react';
import { View, FlatList, Text } from 'react-native';

const data = [
    { id: '1', name: 'Item 1' },
    { id: '2', name: 'Item 2' },
    { id: '3', name: 'Item 3' },
    { id: '4', name: 'Item 4' },
    { id: '5', name: 'Item 5' },
    // Add more data as needed
];

const MyApp = () => {
    const renderItem = ({ item }) => (
        <Text style={{ fontSize: 20, marginVertical: 10 }}>{item.name}</Text>
    );

    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
    );
}

export default MyApp;
