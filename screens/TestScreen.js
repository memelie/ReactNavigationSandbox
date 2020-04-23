import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { MonoText } from '../components/StyledText';

export default function TestScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <Text>
          {"Hi! This is Test View \n\n"}
        </Text>
        <TouchableOpacity onPress={() => navigation.goBack()} >
          <Text>
            {"Click here to go back"}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

TestScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
    paddingLeft: 15,
  },
});
