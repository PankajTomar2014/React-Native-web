import {View, Text} from 'react-native';
import React from 'react';
import {StatusCodeContext} from '../Components/All';

export default function NoPage() {
  const status = React.useContext(StatusCodeContext);

  console.log('status---------', status);

  if (status) {
    status.code = 404;
  }

  return (
    <View>
      <Text>Oops! This URL doesn't exist.</Text>
    </View>
  );
}
