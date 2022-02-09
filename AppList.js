import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView , SafeAreaView } from 'react-native';
import AppItem from './AppItem';
import Database from './Database';

export default function AppList({ route, navigation }) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        Database.getItems().then(items => setItems(items));
    }, [route]);

    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <Text style={styles.title}>Lista de Tarefas</Text>
            <ScrollView
                style={styles.scrollView}
                contentContainerStyle={styles.itemsContainer}>
                {items.map(item => {
                    return <AppItem key={item.id} id={item.id} item={item.descricao + "\n\n" + item.quantidade} navigation={navigation} />
                })}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D936',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 50,
        marginBottom: 20
    },
    scrollView: {
        backgroundColor: '#fff',
        width: '90%',
        flex: 1,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    itemsContainer: {
        flex: 1,
        marginTop: 10,
        padding: 20,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        alignItems: 'stretch',
        backgroundColor: '#fff'
    },
});