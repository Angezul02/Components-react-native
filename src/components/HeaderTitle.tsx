import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/AppTheme'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext/ThemeContext';

interface Props {
    title: string
}

const HeaderTitle = ({title}:Props) => {
  const {theme:{colors}} = useContext(ThemeContext)    
const {top} = useSafeAreaInsets();  

  return (
    <View style={{ marginTop: top + 20, marginBottom: 20}}>
        <Text style={{...styles.title, color:colors.text}}>{title}</Text>
    </View>
  )
}

export default HeaderTitle