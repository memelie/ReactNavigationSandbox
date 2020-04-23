import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import TestScreen from './TestScreen';
import { getHeaderTitle } from '../navigation/BottomTabNavigator';


import { MonoText } from '../components/StyledText';

const SandboxStack = createStackNavigator();
const INITIAL_ROUTE_NAME = 'Sandbox';

export default function SandboxStackScreen({ navigation, route }) {

  navigation.setOptions({ headerTitle: getHeaderTitle(route) });
  return (
    <SandboxStack.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <SandboxStack.Screen name="Sandbox" component={SandboxScreen} />
      <SandboxStack.Screen name="Test" component={TestScreen} />
    </SandboxStack.Navigator>
  );
}

function SandboxScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Test')} >
          <Text>
            {"Click here to go to test view"}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

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
