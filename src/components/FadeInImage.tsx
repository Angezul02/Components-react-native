import React from 'react'
import useAnimation from '../hooks/useAnimation';
import { Animated, View, ActivityIndicator, StyleProp, ImageStyle } from 'react-native';
import { useState } from 'react';

interface Props {
    uri: string;
    style?: StyleProp<ImageStyle>;

}

const FadeInImage = ({uri,style}:Props) => {

    const {opacity, fadeIn}=  useAnimation()
    const [isLoading, setIsLoading] = useState(true)

    const  finishLoading = ()=>{
        setIsLoading(false)
        fadeIn()
    }


  return (
    <View style={{justifyContent:"center", alignItems:"center"}}>

        {
            isLoading && <ActivityIndicator style={{position:"absolute"}} color={"blue"} size={50}/>
        }

        <Animated.Image
         source={{uri}}
         onLoadEnd={finishLoading}
         
         style={{
            ...style as any,
             opacity
         }}
     
        />
    </View>
  )
}

export default FadeInImage