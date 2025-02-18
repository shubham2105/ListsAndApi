import {FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamsList } from './RootNavigator';

const topics = [
    {
        id:1,
        title: 'Flat List demo',
        screen: 'FlatListScreen',
    },
];

type HomeScreenNavigationProps = StackNavigationProp<RootStackParamsList, 'Home'>
type Props = {navigation: HomeScreenNavigationProps}
const HomeScreen:React.FC<Props> = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>HomeScreen</Text>
      <FlatList
        data={topics}
        renderItem={({item})=>(
            <TouchableOpacity style={styles.buttonContainer} onPress={()=> navigation.navigate(item.screen as keyof RootStackParamsList)}>
                <Text style={styles.buttonText}>Flatlist Demo</Text>
            </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container:{
      flex:1,
    },
    headerText:{
      textAlign: 'center',
      fontSize:24,
      fontWeight:'bold',
      marginBottom:20,
    },
    buttonContainer:{
        alignSelf: 'center',
        backgroundColor:'gray',
        padding:'4%',
        borderRadius:5,
        width:'80%',
    },
    buttonText:{
        fontSize:18,
        fontWeight:'bold',
        color:'white',
    },
  });
