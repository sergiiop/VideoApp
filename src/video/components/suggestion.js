import React from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet
}from 'react-native';

function Suggestion(Props){
    return(
        <View style={styles.container}>
            <View style={styles.left}>
                <Image style={styles.cover} 
                source={{
                    uri: Props.medium_cover_image
                }}></Image>
            </View>
            <View style={styles.genre}> 
                <Text style={styles.genreText}>{Props.genres[0]}</Text>
            </View>
            <View style={styles.right}>
                <Text style={styles.title}>{Props.title}</Text>
                <Text style={styles.year}>{Props.year}</Text>
                <Text style={styles.rating}>{Props.rating}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',

    },
    genre:{
        position:'absolute',
        left:0,
        top:0,
        backgroundColor:'black',
    },
    genreText:{
        color:'white',
        fontSize:11,
        paddingVertical:5,
        paddingHorizontal:7
    },
    cover:{
        height:150,
        width:100,
        resizeMode:'contain',
    },
    right:{
        paddingLeft: 10,
        justifyContent: 'space-between',
    },
    title:{
        fontSize:18,
        color: '#44546b',
    },
    year:{
        backgroundColor: '#70b124',
        paddingVertical: 4,
        paddingHorizontal: 6,
        color:'white',
        fontSize:13,
        borderRadius: 4,
        overflow: 'hidden',
        alignSelf:'flex-start'
    },
    rating:{
        color:'#6b6b6b',
        fontSize:14,
        fontWeight:'bold',
    }

})

export default Suggestion