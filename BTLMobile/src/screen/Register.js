import { View,
         Text,
         TextInput,
         TouchableOpacity,
         KeyboardAvoidingView,
         Platform  ,
         Button, 
         StyleSheet
} from 'react-native'
import React, { useState } from 'react'


const Register = ({navigation})  => {
  const [usename, setTask1] = useState('');
  const [year, setTask2] = useState('');
  const [address, setTask3] = useState('');
  const [phoneNumber, setTask4] = useState('');
  const [pass, setTask5] = useState('');
  const [passagain, setTask6] = useState('');
  const Popup = () =>{
    if(usename.length === 0 && year.length === 0 && address.length === 0 && phoneNumber.length === 0 && pass.length === 0 && passagain.length === 0  ){
      alert('Vui lòng nhập đủ thông tin')
      return false;
    }
    alert('Đăng ký thành công')
  }
  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    keyboardVerticalOffset={10}
    style={styles.container}
    >
      <View style={styles.register}>
      <Text style={styles.title}>Sign up</Text>
      
        <View style={styles.input}>
          <View style={styles.request}>
            <Text style={styles.text}>Tên đăng ký</Text>
            <Text style={styles.icon}>*</Text>
          </View>
          <TextInput style={styles.textbox} placeholder='Enter Name'/>
        </View>

        <View style={styles.input}>
          <View style={styles.request}>
            <Text style={styles.text}>Năm sinh</Text>
            <Text style={styles.icon}>*</Text>
          </View>
          <TextInput style={styles.textbox} placeholder='Enter Year'/>
        </View>

        <View style={styles.input}>
          <View style={styles.request}>
            <Text style={styles.text}>Địa chỉ</Text>
            <Text style={styles.icon}>*</Text>
          </View>
          <TextInput style={styles.textbox} placeholder='Enter Address'/>
        </View>

        <View style={styles.input}>
          <View style={styles.request}>
            <Text style={styles.text}>Số điện thoại</Text>
            <Text style={styles.icon}>*</Text>
          </View>
          <TextInput style={styles.textbox} placeholder='Enter PhoneNumber'/>
        </View>

        <View style={styles.input}>
          <View style={styles.request}>
            <Text style={styles.text}>Mật khẩu</Text>
            <Text style={styles.icon}>*</Text>
          </View>
          <TextInput style={styles.textbox} placeholder='Enter Pass'/>
        </View>

        <View style={styles.input}>
          <View style={styles.request}>
            <Text style={styles.text}>Nhập lại mật khẩu</Text>
            <Text style={styles.icon}>*</Text>
          </View>
          <TextInput style={styles.textbox} placeholder='Enter Pass again'/>
        </View>
      

        <View style={styles.button}>
          <TouchableOpacity
            onPress={Popup}
          >
            <View style={styles.clickbutton}>
              <Text style={styles.textbutton}>Đăng ký</Text>
            </View>  
          </TouchableOpacity>
        </View> 
        <Button 
          title='go back'
          onPress={()=>navigation.goBack()}
        />
      </View>
    </KeyboardAvoidingView>
  )
}
const styles = StyleSheet.create({
  title:{
      textAlign: 'center',
      fontSize: 36,
  },
  textbox:{
      width: 292,
      height: 41,
      backgroundColor:'#D9D9D9',
      paddingHorizontal: 15,
      borderRadius: 10,
  },

  input:{
      marginTop: 20,
  },

  text:{
      fontSize: 16,
      marginBottom: 5,
  },
  request:{
      flexDirection:'row',
  },

  icon:{
      color:'#FF0000',
  },

  button:{
      alignItems:'center',
      justifyContent:'center',
      
      
  },

  clickbutton:{
      width: 100, 
      height: 45, 
      marginTop:30,
      backgroundColor:'#C6FAF3',
      alignItems:'center',
      justifyContent:'center',
      textAlign: 'center',
      borderRadius: 10,
  },

  textbutton:{
      fontSize: 16,
  }



})
export default Register;