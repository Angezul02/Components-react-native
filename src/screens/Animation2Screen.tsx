import React, {useRef} from 'react'
import { View, StyleSheet, Animated, PanResponder } from 'react-native';


const Animation2Screen = () => {

  

  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([
      null,
      {
        dx: pan.x, // x,y are Animated.Value
        dy: pan.y,
      },
    ], {useNativeDriver: false}),
    onPanResponderRelease: () => {
      Animated.spring(
        pan, // Auto-multiplexed
        { toValue: { x: 0, y: 0 }, useNativeDriver: false } // Back to zero
      ).start();
    },
  });

  return (
    <View style={styles.container}>
      <View >
      <Animated.View
        {...panResponder.panHandlers}
        style={[pan.getLayout(), styles.boxPurple]}
      />
      </View>
        
    </View>
  )
}

export default Animation2Screen

const styles = StyleSheet.create({
  container:{
    justifyContent:"center",
    alignItems:"center",
    flex:1
  },

  boxPurple: {
    backgroundColor: "#75CEDB",
    width:150,
    height:150,
  }
    
});