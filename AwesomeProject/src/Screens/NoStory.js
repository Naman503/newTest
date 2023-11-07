import React from 'react'
import { Text, View, StyleSheet, Image, ImageBackground, TouchableOpacity as Touch } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
export default function NoStory() {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <View style={styles.root}>
                <TouchableOpacity style={{ height: '80%' }} activeOpacity={1}
                    onPress={() => navigation.navigate('StoryAdded')}
                ><View style={styles.header} >
                <Image tintColor={'#FFD700'} style={{ height: 30, width: 30 }} source={require('../Assets/menu.png')} />
            </View>
                    <ImageBackground style={styles.imageBg} tintColor={'grey'} source={require('../Assets/decagaonal.png')}>

                        <Image style={styles.userImage} source={require('../Assets/user.webp')} />

                        <View style={{ marginTop: '24%' }}>
                            <Text style={styles.name}>Byung ho</Text>
                            <Text style={styles.name}>Photographer</Text>
                            <Text style={styles.name}>www.hoarts.com</Text>

                        </View>
                    </ImageBackground>
                    <Touch style={styles.plushicon}>
                        <Image tintColor={'#FFD700'} style={styles.image} source={require('../Assets/plush.png')} />
                    </Touch>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: "white"
    },
    root: {
        flex: 1, alignItems: 'center',
        justifyContent: 'center'
    },
    userImage:{ height: '50%', width: '70%', alignSelf: "center", borderRadius: 90, marginTop: '17%' },
    imageBg: { height: "75%", width: '100%', alignSelf: 'center', alignItems: "center", overflow: 'hidden' },
    image: { height: 50, width: 50 },
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
        color: "Black",
        textAlign: "center"
    },
    plushicon: {
        position: "absolute",
        height: 50, width: 50,
        right: 30,
        top: '40%',
        zIndex: 1
    }

})