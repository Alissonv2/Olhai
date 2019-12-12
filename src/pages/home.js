import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList, Image, TouchableHighlight } from 'react-native';

import Api from '../services/api';

export default class Home extends Component {

    static navigationOptions = {
        header: null
    };

    state = {
        dados: [],
    }

    componentDidMount() {
        this.loadPolitics();
    }

    loadPolitics = async () => {
        const response = await Api.get('/');

        const { dados } = response.data;

        this.setState({ dados });
    };

    renderItem = ({ item }) => (
        <View style={styles.containerItem}>
            <View style={styles.card}>
                <Image source={{ uri: item.urlFoto }} style={{ height: 199, width: 160 }} />
                <View style={styles.info}>
                    <Text style={styles.txtInf}> {item.nome} </Text>
                    <Text style={styles.txtInf}> Partido: {item.siglaPartido} </Text>
                    <Text style={styles.txtInf}> Estado: {item.siglaUf} </Text>
                    <Text style={styles.txtInf}> {item.email} </Text>

                </View>
            </View>
        </View>
    )

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.dados}
                    keyExtractor={item => item.id.toString()}
                    renderItem={this.renderItem}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dbd2c8',
    },

    containerItem: {
        flex: 1,
    },

    card: {
        flex: 1,
        flexDirection: 'row',
        height: 200,
        width: null,
        margin: 10,
        backgroundColor: '#fff',
        borderRadius: 5
    },

    info: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    txtInf: {
        fontWeight: 'bold',
    }


});
