import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function Livros(){
    
    
    return(
<TouchableOpacity style={styles.container}>
            <Image
            source ={require('../../src/assets/book1.jpg')}
            style={styles.livrosImg}  
            />
    <Text style={styles.livrosT}>
     A Menina que Roubava Livros
    </Text>
    
    <View>
        <Text style={styles.livrosText} button='Compre aqui'> R$ 30,50</Text>

        <Image
            source ={require('../../src/assets/book2.jpg')}
            style={styles.livrosImg}  
            />
    <Text style={styles.livrosT}>
        Literalmente Amigas
    </Text>
    <View>
        <Text style={styles.livrosText}> R$ 25,30 </Text>
    </View>

    <Image
            source ={require('../../src/assets/book3.jpg')}
            style={styles.livrosImg}  
            />
    <Text style={styles.livrosT}>
        Novelas Nada Exemplares
    </Text>
    <View>
        <Text style={styles.livrosText}> R$ 43, 39 </Text>
    </View>

    <Image
            source ={require('../../src/assets/book4.jpg')}
            style={styles.livrosImg}  
            />
    <Text style={styles.livrosT}>
        A Teoria de Tudo
    </Text>
    <View>
        <Text style={styles.livrosText}> R$ 15,34 </Text>
    </View>

    <Image
            source ={require('../../src/assets/book5.jpg')}
            style={styles.livrosImg}  
            />
    <Text style={styles.livrosT}>
        O Nome do Vento
    </Text>
    <View>
        <Text style={styles.livrosText}> R$ 35,00 </Text>
    </View>

    <Image
            source ={require('../../src/assets/book6.jpg')}
            style={styles.livrosImg}  
            />
    <Text style={styles.livrosT}>
       A Última Carta de Amor
    </Text>
    <View>
        <Text style={styles.livrosText}> R$ 19,66 </Text>
    </View>
    </View>
</TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container:{
        paddingVertical: '2%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    livrosImg:{
    width: 200,
    height: 300,
    paddingBottom: '2%',
    paddingTop: '2%'
    },
    livrosText:{
        fontFamily: 'Serif',
        fontSize:16,
        paddingVertical: '2%',
        paddingTop: '4%',
    },
    livrosT:{
        fontSize: 18,
        fontFamily: "sans-serif-thin",
        fontWeight: "bold",
        paddingTop: '4%',
        alignItems: 'center',
    }
});