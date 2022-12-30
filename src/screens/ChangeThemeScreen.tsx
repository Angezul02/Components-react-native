import React,{ useContext} from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import HeaderTitle from '../components/HeaderTitle';
import { styles } from '../theme/AppTheme';
import { ThemeContext } from '../context/ThemeContext/ThemeContext';
import Icon from 'react-native-vector-icons/Ionicons';


const ChangeThemeScreen = () => {

    const {setDarkTheme, setLightTheme, theme:{colors}} = useContext(ThemeContext)

  return (
    <View style={styles.globalMargin}>
        <HeaderTitle title='Theme'/>
        <View style={{flexDirection:"row", justifyContent:"space-around"}}>
            <TouchableOpacity 
            onPress={setLightTheme}
            style={{...stylesTheme.buttonTheme, backgroundColor:colors.primary}}
            activeOpacity={0.5}
            >
                <Icon
                name='sunny'
                size={25}
                color="white"
                />
                <Text style={stylesTheme.textButtomTheme}>
                    Light
                </Text>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={setDarkTheme}
            style={{...stylesTheme.buttonTheme, backgroundColor:colors.primary}}
            activeOpacity={0.5}
            >
                 <Icon
                name='moon'
                size={25}
                color="white"
                />
                <Text style={stylesTheme.textButtomTheme}>
                    Dark
                </Text>
            </TouchableOpacity>

        </View>
    </View>
  )
}

export default ChangeThemeScreen

const stylesTheme = StyleSheet.create({
    buttonTheme:{
        
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row",
        width:150,
        height:50,
        borderRadius:20,

        
    },
    textButtomTheme:{
        color:"white",
        textAlign:"center",
        fontSize:20,
        fontWeight:"bold",
        marginHorizontal:5
        
        
    }
});