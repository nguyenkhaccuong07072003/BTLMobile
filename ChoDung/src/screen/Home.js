import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function Home({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <Image
        style={styles.tinyLogo}
        source={require('../img/category/1.png')}
      />
      <ScrollView>
        <View>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Coffee')}>
            <Text style={{ color: 'white', fontSize: 18, fontWeight: '600' }}>
              Coffee
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Milk')}>
            <Text style={{ color: 'white', fontSize: 18, fontWeight: '600' }}>
              Milk shake
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Smoothie')}>
            <Text style={{ color: 'white', fontSize: 18, fontWeight: '600' }}>
              Smoothie
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Tea')}>
            <Text style={{ color: 'white', fontSize: 18, fontWeight: '600' }}>
              Tea
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Other')}>
            <Text style={{ color: 'white', fontSize: 18, fontWeight: '600' }}>
              Other
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  tinyLogo: {
    width: '100%',
    marginBottom: 20
  },
  button: {
    backgroundColor: '#2DE840',
    alignItems: 'center',
    padding: 20,
    margin: 20,
    borderRadius: 10,
    marginTop: 0
  }
})