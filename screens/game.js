import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';


export default function Game() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Uma das coisas que faço no meu tempo livre é jogar. Aqui tem meus jogos favoritos </Text>
            <Image source={require('./assets/3.jpg')} style={styles.imageDs} />
            <Text style={styles.text}>Dead Space 2 </Text>
            <Image source={require('./assets/4.jpg')} style={styles.imageDs} />
            <Text style={styles.text}>Stardew Valley</Text>
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
    text: {
        color: '#fbf9fa',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
        marginTop: 15,
        backgroundColor: '#0d0c0c',
        borderRadius: 10,
    },
    imageDs : {
        width: 300,
        height: 200,
        borderRadius: 15,
        marginBottom: 5,
        marginTop: 5,
        marginLeft: 20,
        marginRight: 20,
    }
});