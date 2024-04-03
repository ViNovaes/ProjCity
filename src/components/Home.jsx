import React from "react";
import { Pressable, SafeAreaView, StyleSheet, Text, TextInput } from "react-native";

export default props =>{
    return(
        <SafeAreaView 
        style={{backgroundColor:'#ede3fb'}}
        >

            <Text style={style.txtStyle}>Cities</Text>

            <TextInput 
            style={style.txtInput}
            color={`#ffff`}
            placeholder="Cidade"
            placeholderTextColor={`#ffff`}
            maxLength={50}
            
            />

            <TextInput 
            style={style.txtInput}
            color={`#ffff`}
            placeholder="País"
            placeholderTextColor={`#ffff`}
            maxLength={50}
            
            />


                <Pressable onPress={() => props.navigation.navigate('Cities')} style={style.pressable}>
                    <Text style={style}>Add City</Text>
                </Pressable>
            
        </SafeAreaView>
    )
}

const style = StyleSheet.create(
    {
        txtStyle:{
            fontSize: 50,
            color: '#fedfae',
            fontWeight: 'bold',
            textAlign: 'center',
            alignItems: 'center'
        },
        txtInput:{
            marginTop: 15,
            fontSize: 15,
            fontWeight: 'bold',
            textAlign: `center`,
            marginBottom: 15,
            marginLeft: 70,
            borderRadius: 5,
            borderColor: `#ffff`,
            backgroundColor:`#fedfae`,
            width: 255,
        },
        pressable:{
            borderRadius: 10,
            borderColor: `#ffff`,
            backgroundColor:`#fedfae`,
            width: 255,
            height: 50,
            marginTop: 15,
            marginLeft: 70,
        }
    }
)