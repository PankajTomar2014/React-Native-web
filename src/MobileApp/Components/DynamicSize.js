import {Dimensions, Image} from 'react-native';

const {width} = Dimensions.get('window');
const STANDARD_WIDTH = 375;
const CURRENT_WIDTH = width;
const K = CURRENT_WIDTH / STANDARD_WIDTH;

const USE_FOR_BIGGER_SIZE = true;

export function dynamicSize(size) {
  return K * size;
}

export function getFontSize(size) {
  if (USE_FOR_BIGGER_SIZE || CURRENT_WIDTH < STANDARD_WIDTH) {
    const newSize = dynamicSize(size);
    return newSize;
  }
  return size;
}

export const getImageSize = imageUrl => {
  return new Promise((resolve, reject) => {
    if (imageUrl.includes('.jpg')) {
      Image.getSize(
        imageUrl,
        (width, height) => {
          const aspectRatio = height / width;
          resolve({height, width, aspectRatio});
        },
        error => {
          console.log(
            'Error getting image size : ',
            error,
            'imageUrl is not valid : ' + imageUrl,
          );
          reject('Error getting image size:');
        },
      );
    }
  });
};
