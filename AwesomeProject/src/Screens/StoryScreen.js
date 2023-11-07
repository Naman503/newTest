import React, { useEffect, useState } from 'react'
import { Text, View, Image, StyleSheet, ProgressBarAndroid,ActivityIndicator, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
export default function StoryScreen() {
    const navigation = useNavigation()
    const [animate, setAnimate] = useState(true);
    const [bar, setBar] = useState(0.1);

  useEffect(() => {
    closeActivityIndicator();
  }, []);

  
  if(animate == true){
   let myInter = setInterval(function () {setBar(bar+0.2)}, 1000);

  }

  const closeActivityIndicator = () => {
    setTimeout(() => {
      setAnimate(false);
      navigation.navigate('NoStory');

    }, 5000);
  };
    return (
        <View style={{ flex: 1, backgroundColor: "#545454" }}>

        
        
            <View style={styles.header} >
                <ProgressBarAndroid styleAttr="Horizontal" progress={bar} indeterminate={false} color="#2196F3" />
                {/* <ActivityIndicator animating={animate} size="large" color="#fff" /> */}
            </View>
            <View style={styles.storyImageContainer}>
                <Image style={{ height: '100%', width: "100%", overflow: 'hidden' }} source={require('../Assets/isro.jpeg')} />
            </View>
            <Text style={styles.newsHead}>ISRO to launch survelillance satellite</Text>

            <Text style={styles.subHead} >SUCH an AMAZING NEWS! YOU MUSHT READ THIS!</Text>
            <Text style={styles.bigHead} >READ THIS!</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    header: {

        marginTop: 5,
        marginHorizontal: 15
    },
    bigHead:{
        marginBottom:10,
        fontSize: 50,
        fontWeight: '800',
        marginHorizontal: "10%", textAlign: "justify", color: "white", marginTop: '10%'
    },
    subHead: { 
        marginBottom:10,
        fontSize: 20,
        fontWeight: '300',
        marginHorizontal: "10%", textAlign: "justify", color: "white", marginTop: '10%' },
    newsHead: {
        textAlign: "justify", marginHorizontal: "10%", marginTop: 30, fontSize: 30, fontWeight: '500', color: 'white'
    },
    storyImageContainer: {
        //  borderWidth: 1,
        marginTop: 80,
        height: '28%',
        width: '95%',
        borderRadius: 30,
        alignSelf: 'center',
        shadowColor: 'black',
        shadowOpacity: 1,
        shadowRadius: 5,
        backgroundColor: "white",
        overflow: "hidden"


    },
    opiniion:{
        borderRadius:10,marginHorizontal:10,color:"#fff" , backgroundColor:'#fff'
    }
}
)