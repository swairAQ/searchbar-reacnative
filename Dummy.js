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
import { Colors } from 'react-native/Libraries/NewAppScreen'
import AsyncStorage from '@react-native-community/async-storage'
function App() {

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [dataSource, setDatasource] = useState(false)
    const [filtered, setFiltered] = useState(0)
    const [value, setValue] = useState(0)
    const [price, setPrice] = useState(0)
    useEffect(() => {
        AsyncStorage.getItem("Data").then(info => {
            if (info == null)
                setError("No Data");
            else {
                const c = info ? JSON.parse(info) : [];
                setLoading(false)
                setDatasource(c)
                setFiltered(c)
            }
        });
    }, []);
    function updateSearch(query) {

    }
    function renderItem({ item }) {
        console.log('item ' + item)
        return (
            <View>

            </View>
        )
    }
    return (
        <View style={styles.container}>
            <View style={{ backgroundColor: 'red' }}>
                <TextInput
                    onChangeText={updateSearch}
                    style={styles.searchbar}
                    placeholder="Search"
                />
                <View style={styles.vwAdd}>
                    <TextInput
                        onChangeText={setValue}
                        style={styles.tiAdd}
                        placeholder="Add item"
                    />
                    <TextInput
                        onChangeText={setPrice}
                        style={styles.tiAdd}
                        placeholderTextColor='green'
                        placeholder="Add price"
                    />
                    <TouchableOpacity
                        onPress={() => {
                            const obj = dataSource.length ? dataSource : []
                            obj.push({ "item": value, "price": price })
                            AsyncStorage.setItem("Data", JSON.stringify(obj))
                        }}
                        style={{ backgroundColor: 'yellow', flex: 1, borderRadius: 20, marginHorizontal: '1%' }}
                        style={{ backgroundColor: 'green', flex: 1 }}
                    >
                        <Text style={{}}>Add</Text>
                    </TouchableOpacity>

                </View>
            </View>
            {
                error ?
                    <Text> {error} </Text>
                    :
                    <FlatList
                        data={filtered}
                        renderItem={renderItem}
                        keyExtractor={(item) => item}
                        contentContainerStyle={{ flex: 1 }}
                    />
            }
        </View>
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
