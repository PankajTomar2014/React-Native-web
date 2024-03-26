import React from 'react';

import {
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  View,
  Image,
  useColorScheme,
  Dimensions,
  Alert,
} from 'react-native';
import Colors from './Colors';
import {useNavigation} from '@react-navigation/native';
import {dynamicSize, getFontSize} from './DynamicSize';
import {addCart, removeCart} from '../Redux/cartSlice';
import {useDispatch, useSelector} from 'react-redux';
export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;

export const genrateRandomNumber = () => {
  try {
    return Math.floor(Math.random() * 9000000000) + 1;
  } catch (error) {
    console.log('error------', error.message);
  }
};
export const ProductCard = props => {
  const dispatch = useDispatch();
  const cartData = useSelector(state => state.cart.data);

  const isDarkMode = useColorScheme() == 'dark';
  const {item, type} = props;
  return (
    <TouchableOpacity
      onPress={() => console.log(item)}
      activeOpacity={0.7}
      style={styles.item}>
      <View
        style={{
          width: '30%',
          alignItems: 'center',
          borderWidth: 1,
          borderColor: Colors.dimGray,
          margin: 2,
        }}>
        <Image
          source={{uri: item.image}}
          resizeMode="contain"
          style={styles.image}
        />
      </View>
      <View style={{width: '65%', height: 110}}>
        <Text
          style={[
            styles.name,
            {color: isDarkMode ? Colors.white : Colors.black},
          ]}
          numberOfLines={1}>
          {item.title}
        </Text>
        <Text
          style={[
            styles.description,
            {color: isDarkMode ? Colors.white : Colors.black},
          ]}
          numberOfLines={2}>
          {item.description}
        </Text>
        <Text
          style={[
            styles.price,
            {color: isDarkMode ? Colors.white : Colors.black},
          ]}>
          ₹{item.price}
        </Text>
        <Text
          style={[
            styles.category,
            {color: isDarkMode ? Colors.white : Colors.black},
          ]}>
          Category : {item.category}
        </Text>
        <CustomButton
          title={type == 'productList' ? 'Add to cart' : 'Remove'}
          onPressBtn={() => {
            console.log('type----', type);
            try {
              if (type == 'productList') {
                const cartProducts = cartData.filter(
                  product => product.id == item.id,
                );
                if (cartProducts.length > 0) {
                  Alert.alert('Product already exist in cart');
                } else {
                  dispatch(addCart(item));

                  Alert.alert('Product added successfully.');
                }
              } else {
                dispatch(removeCart(item));
              }
            } catch (error) {
              console.log('error----', error.message);
            }
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

export const EmptyMessage = props => {
  const isDarkMode = useColorScheme() == 'dark';
  const {message, styles} = props;
  return (
    <View
      style={[
        {
          height: SCREEN_HEIGHT - 150,
          justifyContent: 'center',
          alignItems: 'center',
        },
        styles,
      ]}>
      <Text
        style={{
          fontSize: 23,
          alignSelf: 'center',
          color: isDarkMode ? Colors.white : Colors.black,
        }}>
        {message}
      </Text>
    </View>
  );
};

export const CustomButton = props => {
  const isDarkMode = useColorScheme() == 'dark';
  const {title, titleTextStyle, onPressBtn, containerStyle} = props;
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[
        styles.buttonView,
        {backgroundColor: isDarkMode ? Colors.white : Colors.black},
        containerStyle,
      ]}
      onPress={onPressBtn}>
      <Text
        style={[
          styles.customBtnTextStyle,
          {color: isDarkMode ? Colors.black : Colors.white},
          titleTextStyle,
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export const Header = props => {
  const isDarkMode = useColorScheme() == 'dark';
  const products = useSelector(state => state.cart.data);
  const backgroundColor = isDarkMode ? Colors.black : Colors.white;

  const navigation = useNavigation();
  const {title, isBack} = props;
  const height = dynamicSize(45);

  const onPressCart = () => {
    console.log(navigation);
    navigation.navigate('Cart');
  };

  return (
    <View
      style={{
        height: height,
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: backgroundColor,
        width: '100%',
        paddingLeft: 15,
      }}>
      {isBack && (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.goBack()}
          style={{
            height: height,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: backgroundColor,
            width: '10%',
          }}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/3114/3114883.png',
            }}
            style={[
              styles.headerIconStyle,
              {tintColor: isDarkMode ? Colors.white : Colors.black},
            ]}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
      )}

      <Text
        style={{
          marginLeft: 10,
          fontWeight: 'bold',
          color: isDarkMode ? Colors.white : Colors.black,
          fontSize: getFontSize(18),
        }}>
        {title}
      </Text>
      <View
        style={{
          width: '55%',
          alignItems: 'flex-end',
          justifyContent: 'center',
        }}>
        <HeaderIconButton
          onPress={() => onPressCart()}
          count={products.length}
          icon={{
            uri: 'https://static-00.iconduck.com/assets.00/shopping-cart-icon-2048x2047-gv68pvgw.png',
          }}
        />
      </View>
    </View>
  );
};
export const HeaderIconButton = props => {
  const isDarkMode = useColorScheme() == 'dark';
  const {count, icon, iconStyle, containerStyle, onPress} = props;
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[
        {
          marginRight: 5,
          width: 35,
          height: 40,
          // backgroundColor:"green",
          justifyContent: 'center',
          alignItems: 'center',
        },
        containerStyle,
      ]}
      onPress={onPress}>
      <Image
        resizeMode="contain"
        source={icon}
        style={[
          {
            height: 22,
            tintColor: isDarkMode ? Colors.white : Colors.black,
            width: 22,
          },
          iconStyle,
        ]}
      />
      {count > 0 && (
        <View
          style={{
            height: 18,
            width: 18,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'red',
            borderRadius: 20,
            top: 3,
            right: 0,
            alignSelf: 'flex-end',
            position: 'absolute',
          }}>
          <Text
            style={{
              fontSize: 8,
              color: isDarkMode ? Colors.white : Colors.black,
            }}>
            {count > 99 ? '99+' : count}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export const Input = props => {
  const isDarkMode = useColorScheme() == 'dark';

  const backgroundColor = isDarkMode ? Colors.black : Colors.white;
  const textColor = isDarkMode ? Colors.white : Colors.black;
  return (
    <View>
      <View style={styles.inputContainer}>
        <View
          style={{
            width: '45%',
            height: dynamicSize(50),
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: getFontSize(18),
              color: textColor,
              fontWeight: 'bold',
            }}
            {...props}>
            {props.lable}
          </Text>
        </View>
        <View
          style={[
            styles.inputStyle,
            {
              borderColor: isDarkMode ? Colors.white : Colors.black,
              backgroundColor: backgroundColor,
            },
          ]}>
          <TextInput
            cursorColor={isDarkMode ? Colors.white : Colors.black}
            style={{
              height: dynamicSize(50),
              color: isDarkMode ? Colors.white : Colors.black,
            }}
            {...props}
          />
        </View>
      </View>
      {props.error && (
        <Text
          style={{
            textAlign: 'left',
            marginLeft: SCREEN_WIDTH / 2.1,
            color: isDarkMode ? Colors.white : Colors.red,
            fontSize: getFontSize(11),
          }}>
          {props.error}
        </Text>
      )}
    </View>
  );
};

export const TitleText = props => {
  const {title} = props;
  return (
    <Text
      style={{
        textAlign: 'center',
        fontWeight: 'bold',
        marginVertical: 10,
        fontSize: 25,
        color: 'green',
      }}>
      {title}
    </Text>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 5,
    flexDirection: 'row',
    borderRadius: 15,
    height: dynamicSize(50),
    // alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  inputStyle: {
    borderWidth: 1,
    justifyContent: 'center',

    height: dynamicSize(50),
    color: Colors.black,
    width: '50%',
  },

  buttonView: {
    height: dynamicSize(30),
    paddingHorizontal: 15,
    marginVertical: 10,
    alignSelf: 'center',
    position: 'absolute',
    bottom: -15,

    right: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  customBtnTextStyle: {
    fontSize: getFontSize(13),

    fontWeight: 'bold',
  },

  headerIconStyle: {
    height: dynamicSize(25),
    width: dynamicSize(25),
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  name: {
    fontSize: 18,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    marginVertical: 8,
    fontSize: 13,
  },
  category: {
    marginVertical: 5,
    fontSize: 10,
  },
  image: {
    width: 110,
    height: 120,
  },
});
