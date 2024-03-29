import React from 'react';

import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';
import {Link} from 'react-router-dom';
import Colors from './Colors';

import {dynamicSize, getFontSize} from './DynamicSize';
import {addCart, removeCart} from '../Redux/cartSlice';
import {useDispatch, useSelector} from 'react-redux';
export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;

export const StatusCodeContext = React.createContext();

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
                  console.log('Product already exist in cart');
                  // alert('Product already exist in cart');
                } else {
                  dispatch(addCart(item));
                  console.log('Product added successfully');
                  // alert('Product added successfully.');
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
  const {title} = props;
  const height = dynamicSize(45);

  return (
    <View
      style={{
        height: height,
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: backgroundColor,
        width: '100%',
        paddingLeft: 15,
        paddingRight: 30,
      }}>
      <Text
        style={{
          marginLeft: 10,
          fontWeight: 'bold',
          color: isDarkMode ? Colors.white : Colors.black,
          fontSize: getFontSize(15),
        }}>
        {title}
      </Text>

      <Link to="/" style={{textDecoration: 'none'}}>
        <Text
          style={{
            textAlign: 'right',
            fontWeight: 'bold',
            color: isDarkMode ? Colors.white : Colors.black,
            fontSize: getFontSize(8),
          }}>
          {'Home'}
        </Text>
      </Link>
      <Link to="/cart" style={{textDecoration: 'none'}}>
        <Image
          source={{
            uri: 'https://static-00.iconduck.com/assets.00/shopping-cart-icon-2048x2047-gv68pvgw.png',
          }}
          resizeMode="contain"
          style={{
            tintColor: 'white',
            height: 45,
            width: 45,
          }}
        />
        {products.length > 0 && (
          <View
            style={{
              position: 'absolute',
              top: 30,

              right: 20,
              height: 30,
              width: 30,
              backgroundColor: 'red',
              borderRadius: 50,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: isDarkMode ? Colors.white : Colors.black,
                fontSize: getFontSize(7),
              }}>
              {products.length}
            </Text>
          </View>
        )}
      </Link>
    </View>
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
    width: 120,
    height: 120,
  },
  inputStyle: {
    borderWidth: 1,
    justifyContent: 'center',

    height: dynamicSize(50),
    color: Colors.black,
    width: '50%',
  },

  buttonView: {
    height: dynamicSize(15),
    paddingHorizontal: 30,
    bottom: 0,
    position: 'absolute',
    alignSelf: 'flex-end',

    justifyContent: 'center',
    alignItems: 'center',
  },
  customBtnTextStyle: {
    fontSize: getFontSize(7),
    fontWeight: 'bold',
  },

  headerIconStyle: {
    height: dynamicSize(25),
    width: dynamicSize(25),
  },
});
