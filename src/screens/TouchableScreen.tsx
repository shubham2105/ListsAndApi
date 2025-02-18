import React, { useState } from 'react';
import {Pressable, SafeAreaView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

const TouchableScreen:React.FC = () =>{
    const [count,setCount] = useState<number>(0);
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.headerText}>TouchableScreen</Text>
            <TouchableOpacity style={styles.buttonContainer}>
                <Text>Touchable Opacity Demo</Text>
            </TouchableOpacity>
            <TouchableHighlight style={styles.buttonContainer}>
                <Text>Touchable Highlight Demo</Text>
            </TouchableHighlight>
            <TouchableWithoutFeedback onPress={()=>{setCount(count + 1);}}>
                <Text style={styles.buttonContainer}>Touch Here</Text>
            </TouchableWithoutFeedback>
            <Text style={styles.buttonText}>Count is: {count}</Text>
            <Pressable style={({pressed})=>[
                styles.buttonContainer,
                {
                    backgroundColor: pressed ? 'red' : 'yellow',
                },
            ]}>
            {
                ({pressed})=>(
                    <Text>
                        {pressed ? 'Pressed Now' : 'Pressable'}
                    </Text>
                )
            }
            </Pressable>
        </SafeAreaView>
    );
};

export default TouchableScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    headerText:{
        fontSize:24,
        fontWeight:'bold',
        textAlign:'center',
        marginBottom:20,
    },
    buttonContainer:{
        alignSelf: 'center',
        padding:'2%',
        backgroundColor:'skyblue',
        marginBottom:20,
        textAlign:'center',
        borderRadius:5,
    },
    buttonText:{
        textAlign:'center',
        marginBottom:10,
    },
});

