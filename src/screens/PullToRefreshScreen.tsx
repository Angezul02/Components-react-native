import React, { useState } from 'react'
import { RefreshControl, ScrollView, Text, View } from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import { styles } from '../theme/AppTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext/ThemeContext';

const PullToRefreshScreen = () => {
    const {theme:{colors}} = useContext(ThemeContext)
const {top}=useSafeAreaInsets()

const [refreshing, setRefreshing] = useState(false);
const [data, setData] = useState<string>()


const onRefresh =()=>{
    setRefreshing(true);

    setTimeout(() => {
        console.log("Carga finalizada");
        setRefreshing(false)
        setData("Hola Mundo ")
    }, 4500);
}

  return (
    <ScrollView
    style={{
        marginTop:refreshing ? top : 0
    }}
    refreshControl={
        <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            progressViewOffset={200}
            progressBackgroundColor="#5856D6"
            colors={["white","orange", "aquamarine", "yellow"]}
            //ios
            // style={{backgroundColor:"#5856D6"}}
            // tintColor="white"
        />
    }
    >
        
        <View style={styles.globalMargin}>
            <HeaderTitle title='Pull to Refresh'/>
            <Text style={{color:colors.text}}>
                {data}
            </Text>
        </View>

    </ScrollView>
  )
}

export default PullToRefreshScreen