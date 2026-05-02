import { ConvexProvider, ConvexReactClient } from "convex/react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TodoScreen from "./screens/TodoScreen";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import { Id } from "./convex/_generated/dataModel";
import Ionicons from "@react-native-vector-icons/ionicons";




const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL!, {
  unsavedChangesWarning: false,
});

export type RootStackParamList = {
  Login: undefined;
  Signup: undefined;
  Todo: { userId: Id<"users"> };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <ConvexProvider client={convex}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
          <Stack.Screen name="Todo" component={TodoScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ConvexProvider>
  );
}