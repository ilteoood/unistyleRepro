/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { Button, FlatList, View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { Text } from 'react-native-unistyles/components/native/Text.js';

function App() {
  const [horizontal, setHorizontal] = useState(false);
  const onPress = () => setHorizontal(currentValue => !currentValue);
  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <FlatList
          contentContainerStyle={styles.flatList}
          accessibilityRole="adjustable"
          contentInsetAdjustmentBehavior="never"
          snapToAlignment="start"
          nestedScrollEnabled
          decelerationRate="fast"
          automaticallyAdjustContentInsets={false}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={1}
          data={[1]}
          horizontal={horizontal}
          renderItem={() => <Text>Item</Text>}
        />
      </View>
      <Button onPress={onPress} title="Toggle Horizontal" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listContainer: {
    width: 150,
  },
  flatList: {
    backgroundColor: 'lightblue',
    height: 300,
  },
});

export default App;
