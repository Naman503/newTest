import { createStackNavigator } from "@react-navigation/stack";
import NoStory from "../Screens/NoStory";
import StoryScreen from "../Screens/StoryScreen";
import StoryAdded from "../Screens/StoryAdded";
import { NavigationContainer } from '@react-navigation/native';
const MyStack = () => {
    const Stack = createStackNavigator()

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="NoStory" screenOptions={{headerShown:false}}>
                <Stack.Screen name='NoStory' component={NoStory} />
                <Stack.Screen name='StoryScreen' component={StoryScreen} />
                <Stack.Screen name='StoryAdded' component={StoryAdded} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default MyStack