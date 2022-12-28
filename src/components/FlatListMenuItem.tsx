import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { MenuItem } from '../interfaces/appInterfaces'
import Icon from "react-native-vector-icons/dist/Ionicons";
import { useNavigation } from '@react-navigation/native';



interface Props {
    menuItem:MenuItem
}
const FlatListMenuItem = ({menuItem}:Props) => {

// hook para navegación entre pantallas 
const navigation = useNavigation()

    return (
        <TouchableOpacity
        activeOpacity={0.3}
        onPress={()=>navigation.navigate(menuItem.components as any)}
        >
            <View style={styles.container}>
                <View style={{flexDirection:"row"}}>
                    <Icon
                    name={menuItem.icon}
                    color= "#5856D6"
                    size= {23}
                    />
                    <Text style={styles.itemText}>{menuItem.name}</Text>
                </View>

                {/* solucion para que la flecha quede al final  */}
                {/* <View style={{flex:1}}/> */} 

                <View style={styles.containerIconArrow}>
                    <Icon          
                    name="chevron-forward"
                    color= "#5856D6"
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