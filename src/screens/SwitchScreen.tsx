import React, { useState } from 'react'
import { Platform, StyleSheet, Switch, Text, View } from 'react-native';
import CustomSwitchs from '../components/CustomSwitchs';
import HeaderTitle from '../components/HeaderTitle';

const SwitchScreen = () => {

const [state, setState] = useState({
  isActive: false, 
  isHungry: false, 
  isHappy: true
})

const {isActive, isHappy, isHungry}= state
  
const onChange = (value:boolean, field: string)=>{
  setState({
    ...state, 
    [ field]: value
  })
}

  return (
    <View style={styles.container}>
        <HeaderTitle title='Swtches'/>
        <View style={styles.switchRow}> 
            <Text style={styles.switchText}>isActive</Text>
            <CustomSwitchs isOn={isActive} onChange={(value)=>onChange(value, "isActive")}/>
        </View>
        <View style={styles.switchRow}> 
            <Text style={styles.switchText}>isHungry</Text>
            <CustomSwitchs isOn={isHungry} onChange={(value)=>onChange(value, "isHungry")}/>
        </View>
        <View style={styles.switchRow}> 
            <Text style={styles.switchText}>isHappy</Text>
            <CustomSwitchs isOn={isHappy} onChange={(value)=>onChange(value, "isHappy")}/>
        </View>

        <Text style={styles.switchText}>{JSON.stringify(state,null,5)}</Text>
    </View>
  )
}

export default SwitchScreen

const styles = StyleSheet.create({
    container: {
        marginHorizontal:20
      },
    switchText:{
      fontSize: 25
    },
    switchRow :{
      flexDirection:"row",
      justifyContent:"space-between",
      alignItems:"center",
      marginVertical:10
      
    
    }
   
});