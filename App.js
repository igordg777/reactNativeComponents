// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
// import First from './components/First';
// import Second from './components/Second';
// import Third from './components/Third';
// import Fourth from './components/Fourth';
// import Fifth from './components/Fifth';
// import ScrollView from './components/ScrollView';
// import Sixth from './components/Sixth'
// import Modal from './components/Modal'

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//       <ActivityIndicator size="large" color="blue" />
//       <First />
//       <Second />
//       <Third />
//       <Fourth />
//       <Fifth />
//       {/* <ScrollView /> */}
//       {/* <Sixth /> */}
//       <Modal />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


import React from 'react';
import Navigation from './Navigation';

const App = () => {
  return <Navigation />;
};

export default App;