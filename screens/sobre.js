import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image} from 'react-native';


export default function Sobre() {
    return (
        <View style={styles.container}>
            <ScrollView> 
            <Text style={styles.text}> Filmes Favoritos: </Text>
            <Image source={require('./assets/8.jpg')} style={styles.imageDs} />
            <Image source={require('./assets/9.jpg')} style={styles.imageDs} />
            <Image source={require('./assets/10.jpg')} style={styles.imageDs} />
            <Image source={require('./assets/11.jpg')} style={styles.imageDs} />
            <Image source={require('./assets/12.jpg')} style={styles.imageDs} />
            </ScrollView>  

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#6338d5',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageDs : {
        width: 300,
        height: 200,
        borderRadius: 15,
        marginBottom: 5,
        marginTop: 5,
        marginLeft: 20,
        marginRight: 20,
    },
    text: {
        color: '#fbf9fa',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
        textAlign: 'center',
    },
});
