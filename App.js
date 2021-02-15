/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
  TouchableOpacity,
  TextInput
} from 'react-native';
import Home from './component/screen/Home'
import { Colors } from 'react-native/Libraries/NewAppScreen'
function App() {


  return (<Home />
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red', height: '100%', width: '100%' 
  },
  tiAdd: {
    backgroundColor: 'yellow',
    // flex: 1,
    marginHorizontal: '1%'
  },
  searchbar: {
    marginTop: 20,
    height: 50,
    borderRadius: 20,
    backgroundColor: 'gray',
    width: '100%',
    paddingHorizontal: '1%'
  },
  vwAdd: {
    marginVertical: '10%',
    flexDirection: 'row',
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'space-between',

  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
