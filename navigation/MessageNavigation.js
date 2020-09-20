import { createStackNavigator } from "@react-navigation/stack";
import Messages from "../screens/Messages/Message";
import Message from "../screens/Messages/Messages";

const Stack = createStackNavigator();
export default () => (
  <Stack.Navigator>
    <Stack.Screen name="Messages" component={Messages} />
    <Stack.Screen name="Message" component={Message} />
  </Stack.Navigator>
);
