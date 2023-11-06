import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {back, group, search} from '../assets';

const Nav = () => {
  return (
    <>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            source={back}
            style={{
              marginRight: 4,
            }}
          />
          <Text style={styles.text}>Products</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <View style={{marginRight: 15}}>
            <Image source={search} />
          </View>
          <View style={{marginRight: 15}}>
            <Image source={group} />
          </View>
        </View>
      </View>
      <View
        style={{
          top: 10,
          width: 16,
          right: 20,
          height: 16,
          borderRadius: 7,
          position: 'absolute',
          backgroundColor: '#FFA347',
        }}>
        <Text style={{textAlign: 'center', fontSize: 10, color:'white'}}>5</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 16,
    flexDirection: 'row',
    alignContent: 'space-between',
    alignItems: 'center',
    flexShrink: 0,
    justifyContent: 'space-between',
  },
  text: {
    fontWeight: '500',
    fontSize: 20,
    margin: 5,
    color: '#35495E',
  },
});

export default Nav;
