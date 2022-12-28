import React, { useRef } from 'react'
import { Animated, Easing } from 'react-native'

const useAnimation = () => {


// generar la animación (iniciar con un useRef  (no vuelve a renderizar el componente a 
//   diferencia de useEffect))
const opacity = useRef(new Animated.Value(0)).current //value un solo valor valueXY dos valores

// nueva propiedad animada para que la animacion sea de rebotar 

const position = useRef(new Animated.Value(0)).current

const fadeIn=(duration:number=300)=>{
  Animated.timing(
    
    opacity,
      {
        toValue:1 ,
        duration,
        useNativeDriver:true
      }
  ).start();

//   Animated.timing(
//     rebote,
//     {
//       toValue:0,
//       duration:1000,
//       useNativeDriver:true,
//       easing:Easing.bounce
//     }
//   ).start()

  
}

const fadeOut=()=>{
  Animated.timing(
    
    opacity,
      {
        toValue:0,
        duration:500,
        useNativeDriver:true
      }
  ).start()

  
}

const startPosition = (initPosition: number= -100, duration:number=1000)=> {
 position.setValue(initPosition); 

 Animated.timing(
        position,
        {
          toValue:0,
          useNativeDriver:true,
          duration,
          easing:Easing.bounce
        }
      ).start()

}

  return {
        fadeIn,
        fadeOut,
        opacity,
        position,
        startPosition
  }
}

export default useAnimation