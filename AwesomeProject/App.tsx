import React from "react";
import { View,SafeAreaView ,StatusBar} from "react-native";
import MyStack from "./src/Navigation";
const App=()=>{
  return(
    <View style={{flex:1}}>
      <StatusBar backgroundColor='#fff'/>
   <SafeAreaView style={{flex:1,backgroundColor:'#fff'}}>
     <MyStack/>
   </SafeAreaView>
    </View>
  )
}
export default App