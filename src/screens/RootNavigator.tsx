import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import HomeScreen from './HomeScreen';
import FlatListScreen from './FlatList';

export type RootStackParamsList = {
    Home: undefined,
    FlatListScreen: undefined,
}

const Stack = createStackNavigator();

const RootNavigator:React.FC<RootStackParamsList> = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
            <Stack.Screen name="FlatListScreen" children={FlatListScreen} options={{headerShown:false}}/>
        </Stack.Navigator>
    );
};

export default RootNavigator;
