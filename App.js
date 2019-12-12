import React, {Component} from 'react';
import {

  View,
  Text,
  StyleSheet
} from 'react-native';

import Rotas from './src/rotas';

export default class App extends Component{

  render(){
    return(
      <View style={styles.container}>
        <Rotas/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
