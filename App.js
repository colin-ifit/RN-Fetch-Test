/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {Button, View} from 'react-native';

const App: () => Node = () => {
  return (
    <View>
      <HttpCall />
    </View>
  );
};

const HttpCall = () => {
  function makeRequest() {
    fetch('https://publicobject.com/helloworld.txt', {
      headers: {
        'Cache-Control': 'no-cache',
      },
    });
  }

  return (
    <View>
      <Button title={'Network Request'} onPress={makeRequest} />
    </View>
  );
};
export default App;
