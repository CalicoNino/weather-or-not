import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Icon from "react-native-vector-icons/Ionicons";
import HomeScreen from "./screens/Home";
import SevenDayScreen from "./screens/SevenDays";
import RootStackParamList from "./screens/RootStackParamList";
import Title from "./components/Title";
import { location } from "./__mocks__";
import SevenDaysTitle from "./components/SevenDaysTitle";

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: () => <Title location={location} />,
            headerStyle: {
              backgroundColor: "#60bcf4",
            },
            headerTintColor: "white",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerShadowVisible: false, // applied here
            headerBackTitleVisible: false,
          }}
        />
        <Stack.Screen
          name="SevenDays"
          component={SevenDayScreen}
          options={{
            headerTitle: () => <SevenDaysTitle />,
            headerStyle: {
              backgroundColor: "#60bcf4",
            },
            headerTintColor: "white",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerShadowVisible: false, // applied here
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
