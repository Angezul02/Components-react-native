import React, { useEffect, useRef } from 'react'
import { Text, View, StyleSheet, Animated, Button, Easing } from 'react-native';
import useAnimation from '../hooks/useAnimation';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext/ThemeContext';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Animation1Screen = () => {
  const {theme:{colors}} = useContext(ThemeContext)
  const {fadeIn, fadeOut, position, opacity, startPosition}=useAnimation()

  return (
    <View style={styles.container}>
      <Animated.View style={{
        ...styles.boxPurple,
        marginBottom:20,
        opacity:opacity,
        transform:[
          {
            translateY: position
          }
        ]
        }}/>
        <Button
        title='Aparece'
        onPress={()=>{
          fadeIn(),
          startPosition(-100)
        }}
        color={colors.primary}
        />

        <Button
        title='Desaparece'
        onPress={fadeOut}
        color={colors.primary}
        />
          
    </View>
  )
}

export default Animation1Screen

const styles = StyleSheet.create({
  container:{
    justifyContent:"center",
    flex:1, 
    alignItems:'center'
  },

  boxPurple: {
    backgroundColor: "#5856D6",
    width:150,
    height:150,
  },

    
});