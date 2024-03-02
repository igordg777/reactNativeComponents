import React from 'react';
import { View, Image } from 'react-native';

const MyApp = () => {
    return (
        // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image
            // source={{ url: 'https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_1280.jpg' }}
            source={{ url: 'https://www.advantour.com/img/kazakhstan/images/nature.jpg' }}

            style={{ width: 200, height: 200, border: "2px solid black" }}
        />
        // </View> 
    );
}

export default MyApp;
