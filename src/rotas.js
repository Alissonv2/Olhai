import Home from './pages/home';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const Navegador = createStackNavigator({
    Home:{
        screen: Home
    },
});

export default createAppContainer(Navegador);