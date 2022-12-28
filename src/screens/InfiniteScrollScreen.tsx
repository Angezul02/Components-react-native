import React, {useState} from 'react'
import { View, StyleSheet, ActivityIndicator, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import FadeInImage from '../components/FadeInImage';
import HeaderTitle from '../components/HeaderTitle';



const InfiniteScrollScreen = () => {

    const [numbers, setNumbers] = useState([0,1,2,3,4,5])

    const renderItem = (item:number)=>{
        return(
            <FadeInImage 
            uri={`https://picsum.photos/id/${item}/500/400`}
            style={{
                width:"100%",
                height:400,
                borderRadius:200,
                marginVertical:10
            }}/>
       
            // <Image
            //     source={{uri:`https://picsum.photos/id/${item}/500/400`}}
            //     style={{
            //         width:"100%",
            //         height:400
            //     }}
            // />
        )
    }

    const loadMore =()=>{
        const newArray:number[] =[];
        for (let i = 0; i < 5; i++){
            newArray[i]=numbers.length + i
        }

        setTimeout(() => {
            
            setNumbers([...numbers, ...newArray])
        }, 1000);


    }
    
  return (
    <View style={{flex:1,}}>
        
        <FlatList
            data={numbers}
            keyExtractor={(item) => item.toString()}
            renderItem= {({item})=>renderItem(item)}
            ListHeaderComponent={()=>(
            <View style={{marginHorizontal:20,  }}>
                <HeaderTitle title='Infinite Scroll'/>

            </View>)
        }
            onEndReached={loadMore}
            onEndReachedThreshold={0.1}
            ListFooterComponent={()=>(
                <View 
                style={{
                    height:150,
                    justifyContent:"center",
                    alignItems:"center",
                    width:"100%",

                }}>
                    <ActivityIndicator size={25} color={"orange"}/>
                </View>
            )}
        />
    </View>
  )
}

export default InfiniteScrollScreen

const styles = StyleSheet.create({
    textItem:{
        backgroundColor:"blue",
        height:150
    }
});