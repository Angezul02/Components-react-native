import React from 'react'
import prompt from 'react-native-prompt-android';
import { View, Text, Button, Alert } from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import { styles } from '../theme/AppTheme';

const AlertScreen = () => {

    const showAlert =()=> {
         Alert.alert(
            "Título Alerta",
            "Mensaje de Alerta",
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "OK", onPress: () => console.log("OK Pressed") }
            ],
            {
                cancelable: true,
                onDismiss: ()=> console.log("onDismiss")
                
            }
        );
    }

    const showPromp =()=>{
        prompt(
            'Enter password',
            'Enter your password to claim your $1.5B in lottery winnings',
            [
             {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
             {text: 'OK', onPress: password => console.log('OK Pressed, password: ' + password)},
            ],
            {
                type: 'secure-text',
                cancelable: false,
                defaultValue: 'test',
                placeholder: 'placeholder'
            }
        );
    }

  return (
    <View style={styles.globalMargin}>
        <HeaderTitle title='Alerts'/>
        <View style={{marginBottom:10,}}>
            <Button
            color={"#0227AC"}
            title='Mostrar Alerta'
            onPress={showAlert}
            />
        </View>
        <Button
        title='Mostrar Promp'
        onPress={showPromp}        
        />
    </View>
  )
}

export default AlertScreen