import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Button } from 'react-native';
import { MaterialIcons }from '@expo/vector-icons';

import Livros from '../../Livros/index';

export default function Home() {
    return (
        <View style={styles.container}>
        <View style={styles.header}>
        <View style={styles.textContainer}>
            <Text style={styles.text}>Livros</Text>
            <Text style={[styles.text,{ color: '#1f1c1c'} ]}>.</Text>
            <Text style={[styles.text,{ color: '#f57f0a'} ]}>E-books</Text>
            <TouchableOpacity style={{position: 'absolute', right: 0, alignSelf:'center'}}>
                <MaterialIcons
                name="filter-list"
                size={24}
                color="#000"
                />
            </TouchableOpacity>
        </View>
    </View>
    
<View style={styles.line}/>

     <ScrollView>
            <Text style={styles.title}>Read More</Text>
            <Text style={styles.text}>LANÇAMENTOS LIVROS:</Text>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
        <Livros/>
        </View>  
    </ScrollView>
</View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        width: '100%',
        backgroundColor: '#fadeb9',
    },
    header:{
        marginBottom: 8,
    },
    image:{
       width: '100%',
       height: '100%',
    },
    textContainer:{
        flexDirection:'row',
        marginVertical: '5%',
        marginHorizontal: '5%',
    },
    text:{
        fontFamily: 'Arial',
        fontSize: 26,
        marginHorizontal: '1%',
        paddingBottom: '5%',
        paddingTop: '5%',
        textAlign: 'center',
        borderColor: '#f5af40',
        borderBottomWidth: 2,
    },
    line:{
        borderBottomColor: '#f5af40',
        borderBottomWidth: 2,
    },
    title:{
        fontSize: 50,
        padding: '5%',
        color: 'white',
        backgroundColor: '#f5af40',
        fontFamily: 'Times New Roman',
        borderBottomWidth: 20,
    }
});
