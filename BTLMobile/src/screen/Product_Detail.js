import { Image, ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
export default function Product_Detail({navigation}) {
    return (
        <View style={{flex:1,backgroundColor:'white'}}>
            <TouchableOpacity style={styles.touchback}>
                <Ionicons name="arrow-back-sharp" size={30} color="black" onPress={() => navigation.navigate('Home')} />
            </TouchableOpacity>
            <Image
                style={styles.tinyLogo}
                source={require('../img/icon/duahau.png')}
            />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 20 }}>
                <Text style={{ fontSize:16,fontWeight:'500'}}>
                    Sinh tố dưa hấu
                </Text>
                <Text>
                    ⭐⭐⭐⭐⭐
                </Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 20 }}>
                <Text>
                    3$
                </Text>
                <Image
                    style={styles.tinyLogo}
                    source={require('../img/icon/count.png')}
                />
            </View>
            <View style={{ flexDirection: 'row', gap: 20, margin: 20 }}>
                <Image
                    style={styles.tinyLogo}
                    source={require('../img/icon/commen.png')}
                />
                <Text>
                    Comment
                </Text>
            </View>
            <ScrollView>
                <View style={{
                    backgroundColor: '#D9D9D9',
                    padding: 20,
                    margin: 20,
                    borderRadius: 8
                }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                        <Image
                            style={styles.tinyLogo}
                            source={require('../img/icon/user.png')}
                        />
                        <Text>
                            Lương Thùy Dung
                        </Text>
                    </View>
                    <Text style={{
                        fontWeight: '500'
                    }}>
                        Ngon
                    </Text>
                </View>
                <View style={{
                    backgroundColor: '#D9D9D9',
                    padding: 20,
                    margin: 20,
                    borderRadius: 8
                }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                        <Image
                            style={styles.tinyLogo}
                            source={require('../img/icon/user.png')}
                        />
                        <Text>
                            Nguyễn Thảo
                        </Text>
                    </View>
                    <Text style={{
                        fontWeight: '500'
                    }}>
                        Tuyệt Vời
                    </Text>
                </View>
                <View style={{
                    backgroundColor: '#D9D9D9',
                    padding: 20,
                    margin: 20,
                    borderRadius: 8
                }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                        <Image
                            style={styles.tinyLogo}
                            source={require('../img/icon/user.png')}
                        />
                        <Text>
                            Nguyễn Cường
                        </Text>
                    </View>
                    <Text style={{
                        fontWeight: '500'
                    }}>
                        Hoa quả rất là tươi nha.
                    </Text>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    touchback: {
        paddingHorizontal: 10,
        marginTop: 50,
      },
    tinyLogo:{
        alignSelf:'center'
    }
})