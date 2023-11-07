import { View, Text, TouchableOpacity, StyleSheet, } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
export default function Notification({ navigation }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.touchback}>
                <Ionicons name="arrow-back-sharp" size={30} color="black"
                    onPress={() => navigation.navigate('Home')} />
            </TouchableOpacity>
            <Text style={styles.title}>Thông Báo</Text>
            <Text style={styles.noti}>1. Ngày 21/10 đến 15/11 có ưu đãi đặc biệt mua 2 tặng 1</Text>
            <Text style={styles.noti}>2. Đến ngày 20/11 giảm 10% cho các Bill trị giá từ 10$</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        color: '#000',
        marginTop: 40,
    },
    touchback: {
        paddingHorizontal: 10
    },
    title: {
        textAlign: 'center',
        fontSize: 36,
    },
    noti: {
        fontSize: 20,
        width: 313,
        height: 47,
        marginTop: 30,
        marginLeft: 35,
    },

})