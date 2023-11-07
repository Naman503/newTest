import React, { useState } from 'react'
import { Text, View, StyleSheet, Image, ImageBackground, Modal,TouchableOpacity as Touch } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
export default function StoryAdded() {
    const navigation = useNavigation()
    const [modal, setModal] = useState(false)
    return (
        <View style={styles.container}>
            <View style={styles.header} >
                <Touch onPress={()=>navigation.goBack()}>
                <Image tintColor={'#FFD700'} style={{ height: 30, width: 30 }} source={require('../Assets/back.png')} />
                </Touch>
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <TouchableOpacity style={{ height: '80%' }} activeOpacity={0.8} onLongPress={() => { setModal(true)}} onPress={() => {
                    navigation.navigate('StoryScreen')
                }}>
                    <ImageBackground style={{ height: "75%", width: '100%', alignSelf: 'center', alignItems: "center", overflow: 'hidden' }} tintColor={'#FFD700'} source={require('../Assets/decagaonal.png')}>

                        <Image style={{ height: '50%', width: '70%', alignSelf: "center", borderRadius: 90, marginTop: '17%' }} source={require('../Assets/user.webp')} />

                        <View style={{ marginTop: '24%' }}>
                        <Text style={styles.name}>Byung ho</Text>
                            <Text style={styles.name}>Photographer</Text>
                            <Text style={styles.name}>www.hoarts.com</Text>

                        </View>
                    </ImageBackground>
                </TouchableOpacity>
                <Modal transparent={true} visible={modal}>
                    <Touch onPress={()=>setModal(false)} style={{flex:1,alignItems:"center",justifyContent:'center'}}>
                       <View style={styles.modal}>
                       <View style={{justifyContent:"space-around",marginLeft:30,marginTop:15}}>
                        <Text onPress={()=>setModal(false)} style={styles.modaltxt}>Add Story</Text>
                        <Text onPress={()=>setModal(false)} style={styles.modaltxt}>remove story</Text>
                        <Text onPress={()=>{navigation.navigate('NoStory');setModal(false)}} style={styles.modaltxt}>chage profile  image</Text>
                       </View>
                       <Text onPress={()=>setModal(false)} style={[styles.modaltxt,{position:'absolute',right:20,color:"green"}]} >Cancel</Text>
                    </View>
                 
                    </Touch>
                </Modal>

            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container:{
         flex: 1,
         backgroundColor: "white" 
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-between',
        paddingVertical: 10,
        marginTop: 5,
        marginHorizontal: 15
    },
    name: {
        fontSize: 24,
        fontWeight: '600',
        color: "black",
        textAlign: "center"
    },
    modal:{
        backgroundColor: "white",
         height: "20%", 
         width: "80%", 
         alignSelf: "center",
         borderRadius:8,
         shadowColor:"black",
         shadowOffset:{height:4,width:4},
         shadowOpacity:4,
         shadowRadius:4
       
    },
    modaltxt:{
        fontSize:20,
        marginTop:14,
        fontWeight:"500",
        color:"black"
    }

})