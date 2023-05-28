import React from 'react';
import { StyleSheet, View, StatusBar, Image, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as animatable from 'react-native-animatable';

export default function Home() {

    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#6338d5" barStyle="light-content" />
            <animatable.Image source={require('./assets/1.jpg')} style={styles.image} animation='flipInY'/>
            <Text style={styles.text}>Lucas Barros de Souza</Text>
            <Text style={styles.sub}>Olá, me chamo Lucas. Programo web há cerca de um ano e mobile há pouco mais de 2 meses. Abaixo mostrarei meu primeiro projeto.</Text>
            <Image source={require('./assets/2.jpg')} style={styles.imageDs} />
            <Text style={styles.sub}>Esse é o meu primeiro site, um aplicativo de avaliação de filmes feito feito com Html5 e Css3 durante um evento.</Text>
        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#6338d5',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 150,
        marginBottom: 5,
        marginTop: 5,
        realizeMode: 'contain',
    },
    text: {
        color: '#fbf9fa',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    sub: {
        color: '#fbf9fa',
        fontSize: 15,
        textAlign: 'center',
        margin: 10,
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: '#0d0c0c',
        borderRadius: 20,
    },
    imageDs : {
        width: 299,
        height: 200,
        borderRadius: 15,
        marginBottom: 15,
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
    }
});