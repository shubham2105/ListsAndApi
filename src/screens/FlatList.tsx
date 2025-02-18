import { FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const listData = Array.from({length:50}, (_,index)=>({
    id: index.toString(),
    title: `Item ${index + 1}`,
}));

const FlatListScreen = () => {
    const handleRenderItem = ({item}: {item: {id: string, title: string}}) => (
        <View style={styles.item}>
            <Text>{item.title}</Text>
        </View>
    );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>FlatListScreen</Text>
      <FlatList
        data={listData}
        renderItem={handleRenderItem}
        keyExtractor={item=>item.id}
        ListHeaderComponent={<Text style={styles.flatListHeader}>Flatlist</Text>}
        ListFooterComponent={<Text style={styles.flatListFooter}>Flatlist Footer</Text>}
      />
    </SafeAreaView>
  );
};

export default FlatListScreen;

const styles = StyleSheet.create({
    container:{
      flex:1,
    },
    headerText:{
      fontSize:24,
      fontWeight:'bold',
      textAlign:'center',
    },
    item:{
        padding:20,
        borderBottomWidth:1,
        borderBottomColor:'#eee',
    },
    flatListHeader:{
        fontSize:20,
        fontWeight:'bold',
        backgroundColor:'skyblue',
        color:'white',
        padding:'4%',
    },
    flatListFooter:{
        fontSize:20,
        fontWeight:'bold',
        backgroundColor:'skyblue',
        color:'white',
        padding:'4%',
    },
  });
