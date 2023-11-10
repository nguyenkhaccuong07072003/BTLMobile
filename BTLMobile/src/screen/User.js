import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
const avatar = require('../img/avatar/avatar.jpg');
export default function User({ navigation }) {
    return (
        <View style={{flex: 1,color: '#000',}}>
            <TouchableOpacity style={styles.touchback}>
                <Ionicons name="arrow-back-sharp" size={30} color="black" onPress={() => navigation.navigate('Home')} />
            </TouchableOpacity>
            <View style={{alignItems: 'center',top: 25, left: 0,}}>
                <Image source={avatar} style={{width:100 ,height:100, borderRadius: 100,}} />
                <Text style={{textAlign:'center',fontSize:20,}}>Nguyễn Thảo</Text>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    touchback: {
        paddingHorizontal: 10,
        marginTop: 50,
      },
});