import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import HomeScreen from './HomeScreen';
import FlatListScreen from './FlatList';
import SectionListScreen from './SectionListScreen';

export type RootStackParamsList = {
    Home: undefined,
    FlatListScreen: undefined,
    SectionListScreen: undefined,
}

const Stack = createStackNavigator<RootStackParamsList>();

const RootNavigator:React.FC = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
            <Stack.Screen name="FlatListScreen" component={FlatListScreen} options={{headerShown:false}}/>
            <Stack.Screen name="SectionListScreen" component={SectionListScreen} options={{headerShown:false}} />
        </Stack.Navigator>
    );
};

export default RootNavigator;
