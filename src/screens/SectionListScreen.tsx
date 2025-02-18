import { SafeAreaView, SectionList, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const sectionListData = [
    {
        title: 'Men',
        data: ['Tshirts', 'Formal shirts', 'Jeans', 'Trousers'],
    },
    {
        title: 'Women',
        data: ['Tshirts', 'Formal shirts', 'Jeans', 'Trousers'],
    },
    {
        title: 'Kids',
        data: ['Tshirts', 'Jerseys', 'Track Pants', 'Shorts'],
    },
];

const SectionListScreen = () => {
    const handleRenderItem = ({item}: {item: string}) =>(
        <View style={styles.sectionContainer}>
            <Text>{item}</Text>
        </View>
    );
   const renderSectionHeader = ({
        section: {title},
        }:{
            section: {title: string};
        }) =>(
            <View style={styles.sectionHeaderContainer}>
                <Text style={styles.sectionHeaderText}>{title}</Text>
            </View>
        );

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.headerText}>SectionListScreen</Text>
            <SectionList
                renderSectionHeader={renderSectionHeader}
                sections={sectionListData}
                renderItem={handleRenderItem}
                keyExtractor={(item, index)=> item + index}
            />
        </SafeAreaView>
    );
};

export default SectionListScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    sectionHeaderContainer:{
        flex: 1,
        backgroundColor:'skyblue',
        padding:'2%',
        marginBottom:10,
    },
    sectionHeaderText:{
        fontSize:16,
        fontWeight:'semibold',
    },
    sectionContainer:{
        marginBottom:2,
        paddingLeft:10,
    },
});
