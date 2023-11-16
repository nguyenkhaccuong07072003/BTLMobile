import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { data } from '../../data/snack'
export default function Snack({ navigation }) {
    const {Snack } = data
    return (
        <View style={{ flex: 1 , backgroundColor: 'white'}}>
            <ScrollView>
                {Snack.map((item) => (
                    <TouchableOpacity key={item.id} onPress={() => navigation.navigate('Product_Detail')}>
                        <View  style={{ flexDirection: 'row' }}>
                            <Image
                                style={styles.img}
                                source={item.img}
                            />
                            <View style={{
                                justifyContent: 'center',
                                gap: 10
                            }}>
                                <Text style={{
                                    fontWeight: '500',
                                    fontSize: 14
                                }}>
                                    {item.name}
                                </Text>
                                <Text>
                                    {item.price}
                                </Text>
                                <Text>
                                    {item.star}
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    img: {
        margin: 10,
        borderRadius: 10
    }
})