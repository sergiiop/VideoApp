import React from 'react';
import{
    View,
    Text,
    Image,
    StyleSheet,
    SafeAreaView,
}from 'react-native';


function Header(props){
    return(
        <View>
            <SafeAreaView>
                <View style={styles.container}>
                <Image source={require('../../../assets/Logo.png')} style={styles.logo}></Image>
                <View style={styles.right}>
                    {props.children}
                </View>
                </View>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    logo:{
        width:120,
        height: 50,
        resizeMode: 'contain',
    },
    container:{
        padding:5,
        flexDirection:'row',
    },
    right:{
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-end',
    }
})
export default Header;