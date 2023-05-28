import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';


export default function Contato() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}> Contatos: </Text>
            <Image source={require('./assets/5.jpg')} style={styles.imageDs} />
            <Image source={require('./assets/6.jpg')} style={styles.imageDs} />
            <Image source={require('./assets/7.jpg')} style={styles.imageDs} />
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
    },
    imageDs : {
        width: 275,
        height: 175,
        borderRadius: 15,
        marginBottom: 5,
        marginTop: 5,
        marginLeft: 20,
        marginRight: 20,
    }
});