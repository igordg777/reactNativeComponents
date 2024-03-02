import React, { useState } from 'react';
import { View, Modal, Text, Button } from 'react-native';

const MyApp = () => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={{
            // flex: 1, 
            justifyContent: 'center', alignItems: 'center'
        }}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <View style={{ backgroundColor: 'white', padding: 20 }}>
                        <Text>Modal Content</Text>
                        <Button title="Close Modal" onPress={() => setModalVisible(!modalVisible)} />
                    </View>
                </View>
            </Modal>
            <Button title="Open Modal" onPress={() => setModalVisible(true)} />
        </View>
    );
}

export default MyApp;
