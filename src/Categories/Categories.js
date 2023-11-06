import React from 'react';
import { Image, ScrollView, View, Text } from 'react-native';
import { categories } from '../mocks/categories';
import { back } from '../assets';

const Categories = () => {
  const getObjectByKey = (key) => {
    const category = categories.find((categoryObj) => categoryObj? categoryObj[key]:{} );
    return category ? category[key] : null;
  };

  return (
    <ScrollView horizontal={true}>
      {categories.map((category, index) => {
        const categoryName = Object.keys(category)[0]; 
        const imgSource = getObjectByKey(categoryName)?.img;

        return (
          <View
            key={index}
            style={{
              width: 60,
              height: 60,
              backgroundColor: 'red',
              borderRadius: 32,
              margin: 20,
              alignContent:'center',
              alignItems:'center'
            }}
          >
            <Image style={{height:'100%', width:'100%'}} source={imgSource} />

          </View>
        );
      })}
    </ScrollView>
  );
};

export default Categories;
