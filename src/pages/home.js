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
                <Image source={{ uri: item.urlFoto }} style={{ height: 120, width: 90, marginLeft: 5 }} />
                <View style={styles.info}>
                    <Text style={styles.txtInf}> {item.nome} </Text>
                    <Text style={styles.txtInf}> Partido: {item.siglaPartido} </Text>
                    <Text style={styles.txtInf}> Estado: {item.siglaUf} </Text>
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
        backgroundColor: '#ccc',
    },

    containerItem: {
        flex: 1,
    },

    card: {
        flex: 1,
        flexDirection: 'row',
        height: 130,
        width: null,
        marginTop: 10,
        marginHorizontal: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
        alignItems: 'center'
    },

    info: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around'
    },

    txtInf: {
        fontWeight: 'bold',
        fontSize: 20
    }


});
