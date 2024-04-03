import React from "react";
import { SafeAreaView, StyleSheet, Pressable, Text } from "react-native";

export default props =>{
    return(
        <SafeAreaView 
        style={{backgroundColor:'#ede3fb'}}
        >

                <Pressable onPress={() => props.navigation.navigate('')}>
                    <Text>Paris</Text>
                    <Text>France</Text>
                </Pressable>
            
                <Pressable onPress={() => props.navigation.navigate('')}>
                    <Text>Tokyo</Text>
                    <Text>Japan</Text>
                </Pressable>

                <Pressable onPress={() => props.navigation.navigate('')}>
                    <Text>Amsterdam</Text>
                    <Text>Netherlands</Text>
                </Pressable>

                <Pressable onPress={() => props.navigation.navigate('')}>
                    <Text>Portland</Text>
                    <Text>USA</Text>
                </Pressable>

                <Pressable onPress={() => props.navigation.navigate('')}>
                    <Text>Mumbai</Text>
                    <Text>India</Text>
                </Pressable>

                <Pressable onPress={() => props.navigation.navigate('')}>
                    <Text>London</Text>
                    <Text>England</Text>
                </Pressable>

                <Pressable onPress={() => props.navigation.navigate('')}>
                    <Text>Barcelona</Text>
                    <Text>Spain</Text>
                </Pressable>

                <Pressable onPress={() => props.navigation.navigate('')}>
                    <Text>Rio de janeiro</Text>
                    <Text>Brazil</Text>
                </Pressable>
        </SafeAreaView>
    )
}

const style = StyleSheet.create(
    {
        txtTop:{
            fontSize: 50,
            color: '#000000',
            fontWeight: 'bold',
        },
        txtTop:{
            fontSize: 20,
            color: '#b0b0b0',
            
        }
    }
)