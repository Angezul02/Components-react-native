import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { MenuItem } from '../interfaces/appInterfaces'

import { useNavigation, useTheme } from '@react-navigation/native';
import  Icon  from 'react-native-vector-icons/Ionicons';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext/ThemeContext';



interface Props {
    menuItem:MenuItem
}
const FlatListMenuItem = ({menuItem}:Props) => {

// hook para navegación entre pantallas 
const navigation = useNavigation()
const {theme:{colors}} = useContext(ThemeContext)

    return (
        <TouchableOpacity
        activeOpacity={0.3}
        onPress={()=>navigation.navigate(menuItem.components)}
        >
            <View style={styles.container}>
                <View style={{flexDirection:"row"}}>
                    <Icon
                    name={menuItem.icon}
                    color= {colors.primary}
                    size= {23}
                    />
                    <Text style={{...styles.itemText,
                        color:colors.text
                        }}
                        >{menuItem.name}</Text>
                </View>

                {/* solucion para que la flecha quede al final  */}
                {/* <View style={{flex:1}}/> */} 

                <View style={styles.containerIconArrow}>
                    <Icon          
                    name="chevron-forward"
                    color= {colors.primary}
                    size= {23}                
                    />
                </View> 
            
            </View>
        </TouchableOpacity>
      )
}

export default FlatListMenuItem

const styles = StyleSheet.create({
    container: {
        flexDirection:"row", 
        justifyContent:"space-between"
    }, 
    itemText:{
        fontSize: 19,
        marginLeft:10,

    },
    containerIconArrow:{
       alignItems:"flex-end"
    }
});