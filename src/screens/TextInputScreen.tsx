import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
} from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import {styles} from '../theme/AppTheme';
import useForm from '../hooks/useForm';
import CustomSwitchs from '../components/CustomSwitchs';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext/ThemeContext';

const TextInputScreen = () => {
  const {theme:{colors}} = useContext(ThemeContext)
    const {form, onChange, inSuscribe}= useForm({
        name: '',
        email: '',
        phone: '',
        inSuscribe: false
      });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.globalMargin}>
            <HeaderTitle title="Text Input - Formulario" />

            <TextInput
              style={{...stylesInput.inputStyle, borderColor: colors.primary,}}
              placeholder="Ingrese su nombre"
              placeholderTextColor={colors.text}
              autoCorrect={false}
              autoCapitalize="words"
              onChangeText={value => onChange(value, 'name')}
              keyboardAppearance="dark"
              
            />

            <TextInput
              style={{...stylesInput.inputStyle, borderColor: colors.primary,}}
              placeholder="Ingrese su e-mail"
              placeholderTextColor={colors.text}
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={value => onChange(value, 'email')}
              keyboardType="email-address"
              keyboardAppearance="dark"
            />

            <TextInput
              style={{...stylesInput.inputStyle, borderColor: colors.primary,}}
              placeholder="Ingrese su número telefónico"
              placeholderTextColor={colors.text}
              onChangeText={value => onChange(value, 'phone')}
              keyboardType="phone-pad"
            />
            <View style={stylesInput.switchRow}> 
            <Text style={{...stylesInput.switchText, color:colors.text}}>Suscribirme</Text>
            <CustomSwitchs isOn={inSuscribe} onChange={(value)=>onChange(value, "inSuscribe")}/>
        </View>
          <View style={{height: 50}} />
          <HeaderTitle title={JSON.stringify(form, null, 3)} />
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default TextInputScreen;

const stylesInput = StyleSheet.create({
  inputStyle: {
    borderWidth: 1,
    // borderColor: '#0227AC',
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginVertical: 10,
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


