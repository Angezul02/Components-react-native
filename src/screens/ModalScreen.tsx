import React, { useState } from 'react'
import { Button, Modal, Text, View, Pressable } from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import { styles } from '../theme/AppTheme';

const ModalScreen = () => {

  const [visible, setVisible] = useState(false)

  return (
    <View style={styles.globalMargin}>
        <HeaderTitle title='Modal Screen'/>
        
        <Modal
        animationType="fade"
        visible={visible}
        transparent={true}
        // onRequestClose={() => {
         
        //   setVisible(!visible);
        // }}
        >

<View style={
          {
              flex: 1 ,
              backgroundColor:"rgba(0,0,0,0.3)",
              justifyContent:"center",
              alignItems:"center"
          }
          }>
            {/* contenido del modal */}
            <View style={{
              backgroundColor:"white",
              borderRadius:10,  
              width:200, 
              height: 200, 
              justifyContent:"center",
              alignItems:"center",
              shadowOffset:{
                width: 0,
                height:10
              
              },
              shadowOpacity: 0.25, 
              elevation: 10

              }}>
              <Text style={{
                fontSize: 20, 
                fontWeight: "bold", 
              }}>MODAL</Text>
              <Text style={{
                fontSize:15, fontWeight:"300", marginBottom:20
              }}>
                Cuerpo del Modal
              </Text>
              <Button 
                title='OK'
                onPress={()=>{setVisible(false)}}
              />
            </View>
        </View>

        </Modal>
        <Pressable
        onPress={()=>{setVisible(true)}}>
          <Text>Abrir Modal</Text>     
        
        </Pressable>
        
       

        
        {/* fondo del modal  */}
        

        
    </View>
  )
}

export default ModalScreen