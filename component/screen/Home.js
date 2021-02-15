
import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    StatusBar,
    FlatList,
    TouchableOpacity,
    TextInput
} from 'react-native';
import Searchbar from '../shared/SearchBar'
export default function Home() {
    const [value, setValue] = useState()
    function updateSearch(value) {
        //do your search logic or anything
        console.log(value)
    }
    return (

        <View style={styles.container}>
            <View style={{ height: '20%', backgroundColor: "#3F569C", borderRadius: 10, }}>
                <Image
                    style={{ marginTop: '15%', marginLeft: '5%' }}
                    source={require('../../assets/images/ic_back.png')} />
                <Searchbar
                    value={value}
                    updateSearch={updateSearch}
                    style={{ marginTop: '8%' }}
                />
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'red', height: '100%', width: '100%' 
    },
});
