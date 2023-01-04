import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { RecoilRoot } from "recoil";
import Screen2 from "./views/Screen2"
import Screen1 from "./views/Screen1";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <RecoilRoot>
      {/* <Screen1 /> */}
      <NavigationContainer>
        <Stack.Navigator initialRouteName="S1">
          <Stack.Screen
            name="S1"
            component={Screen1}
            options={{
              headerStyle: {
                backgroundColor: "#dc143c",
              },
            headerTintColor:"#fff",
            headerTitleStyle:{
              fontWeight:"bold"
            },
            headerTitleAlign :"center",
            title : "Home"
            }}
          />
          <Stack.Screen name='Back' component={Screen2} />
        </Stack.Navigator>
      </NavigationContainer>
    </RecoilRoot>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  marginTop: 20,
    width: "100%",
    height: "100%",
    //backgroundColor: "#dc143c",
    alignItems: "center",
    justifyContent: "center",
  },
});
