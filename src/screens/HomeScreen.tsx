import { Button, SafeAreaView, StyleSheet, Text } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamsList } from './RootNavigator';

const topics = [
    {
        id:1,
        title: 'Flat List demo',
        screen: 'FlatList',
    },
];

type HomeScreenNavigationProps = StackNavigationProp<RootStackParamsList, 'Home'>
const HomeScreen = () => {
    const navigation = useNavigation<HomeScreenNavigationProps>();
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>HomeScreen</Text>
      <Button title='FlatList Demo' onPress={()=> navigation.navigate('FlatListScreen')}/>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container:{
      flex:1,
      alignItems: 'center',
    },
    headerText:{
      fontSize:24,
      fontWeight:'bold',
    },
  });
