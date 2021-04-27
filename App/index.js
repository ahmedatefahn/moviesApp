
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import reducers from './reducers';
import Splash from './Screens/Splash';
import Home from './Screens/Home';
import Navigation from './utils/Navigation'
const store = createStore(reducers, applyMiddleware(thunk));

const Main = createStackNavigator();
const MainStack = () => {
  return (
    <Main.Navigator headerMode={false}>
      <Main.Screen name={'Splash'} component={Splash} />
      <Main.Screen name={'Home'} component={Home} />
    </Main.Navigator>
  )
}




function App() {
  return (
    <Provider store={store}>

      <NavigationContainer ref={Navigation.navigationRef}>
       <MainStack />
      </NavigationContainer>
   
    </Provider>
  )
}
export default App;
