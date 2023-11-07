import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
const avatar = require('../img/avatar/avatar.jpg');
export default function User({ navigation }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.touchback}>
                <Ionicons name="arrow-back-sharp" size={30} color="black" onPress={() => navigation.navigate('Home')} />
            </TouchableOpacity>
            <View style={styles.Info}>
                <Image source={avatar} style={styles.avatar} />
                <Text style={styles.username}>Nguyễn Thảo</Text>
                <View style={styles.DonHang}>
                    <Text style={styles.ThongTin}>1. Đơn hàng</Text>
                    <Text style={styles.ThongTin}>2. Thông Tin cá nhân</Text>
                    <Text style={styles.ChiTiet}>Năm sinh:</Text>
                    <Text style={styles.ChiTiet}>Địa chỉ:</Text>
                    <Text style={styles.ChiTiet}>SĐT:</Text>
                </View>
            </View>
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
        paddingHorizontal: 10,
    },
    Info: {
        alignItems: 'center',
        top: 26,
        left: 0,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 100,
    },
    username: {
        textAlign: 'center',
        fontSize: 20,
    },
    ThongTin: {
        paddingTop: 20,
        paddingBottom: 5,
        fontSize: 20,
        flexShrink: 0,
        marginRight: 150,
    },
    ChiTiet: {
        paddingTop: 20,
        height: 50,
        fontSize: 20,
        marginLeft: 50,
        justifyContent: 'space-between',
    },
});