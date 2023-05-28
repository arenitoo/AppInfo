import React from 'react';
import { StyleSheet, Text, View, ScrollView, StatusBar } from 'react-native';


export default function More() {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.scroll} >
                <Text style={styles.textSub}>Vida Acadêmica:</Text>
                <Text style={styles.text}>Fiz o ensino fundamental no Colégio Nossa Senhora Aparecida. Quando estava no primeiro ano
                    decidi fazer a prova do IFAL para o curso de Eletrotécnica. No início eu estava muito interessado nas olimpíadas, mas com a pandemia, foi tudo por água a baixo :/</Text>
                <Text style={styles.text}>Quando tive, na matéria de informática, programação para arduino, me interessei pela área e procurei estudar mais por fora.</Text>
                <Text style={styles.text}>Comprei um curso de lógica de programação na Udemy e passei a acessar outras plataformas, me deparando de primeira com HTML, CSS e javascript.</Text>
                <Text style={styles.text}>Alguns meses depois me inscrevi no curso sensacional de React Native oferecido pelo Lapp.</Text>
                <Text style={styles.text}>Atualmente estou terminando Eletrotécnica integrado, o curso de React e interessado em ingressar em sistemas de informação.</Text>
                <Text style={styles.text}>Tenho boas expectativas para o futuro. Sei que nada se contrói sem esforço então pretendo me empenhar bastante.</Text>
                <Text style={styles.textInvisible}>Caneta azul, azul caneta caneta azul tá marcada com minha letra caneta azul</Text>
            </ScrollView>
            <StatusBar >
                
            </StatusBar>
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
        backgroundColor: '#0d0c0c',
        fontSize: 15,
        padding: 10,
        borderRadius: 50,
        margin: 10,
        color: '#fbf9fa',
        textAlign: 'center',
    },
    textSub: {
        fontSize: 25,
        fontWeight: 'bold',
        fontStyle: 'italic',
        color: '#fbf9fa',
        marginBottom: 10,
        marginTop: 10,
        textAlign: 'center',
    },
    scroll: {
        width: '100%',
        marginBottom: 5,
    },
    textInvisible: {
        color: '#6338d5',
        padding: 10,
        borderRadius: 50,
        margin: 10,
        textAlign: 'center',
        fontSize: 15,
    },
});