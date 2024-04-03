import React from "react";
import { SafeAreaView } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from './components/Home';
import Cities from './components/Cities';
// import Tokyo from './components/Tokyo';

const Stack = createNativeStackNavigator();

export default props =>{
    return(
        <SafeAreaView style={{flex:1}}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name='Home' component={Home} options={{title:"", backgroundColor:'#ede3fb'}}></Stack.Screen>
                    <Stack.Screen name='Cities' component={Cities} options={{title:"Cities", backgroundColor:'#ede3fb'}}></Stack.Screen>
                    {/* <Stack.Screen name='Tokyo' component={Tokyo} options={{title:"Tokyo", backgroundColor:'#ede3fb'}}></Stack.Screen> */}
                </Stack.Navigator>
            </NavigationContainer>

        </SafeAreaView>
    )
}






// <SafeAreaView style={{flex:1}}>
//             <NavigationContainer>
//                 <Stack.Navigator initialRouteName="Home">
//                     <Stack.Screen name="Home" component={HomeScreen} options={{title: 'Inicio'}}></Stack.Screen>
//                     <Stack.Screen name="Details" component={DetailsScreen} options={{title: 'Detalhes'}}></Stack.Screen>
//                     <Stack.Screen name="Products" component={Products} options={{title:'Produtos'}}></Stack.Screen>
//                     <Stack.Screen name="About" component={About} options={{title:'Sobre'}}></Stack.Screen>
//                 </Stack.Navigator>
//             </NavigationContainer>
//         </SafeAreaView>