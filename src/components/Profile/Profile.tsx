import React, { FC, useState } from "react";
import { TouchableOpacity, View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { useSearchParams } from "react-router-native";

const windowWidth = Dimensions.get('window').width;

const Profile: FC = () => {

    const [fullImage, setFullImage] = useState<boolean>(false);

    function toggleFullImage() {
        fullImage ? setFullImage(false) : setFullImage(true);
    }

    return (
        <View style={styles.profile}>
            <View style={styles.profile__buttonBox}>
                <TouchableOpacity style={styles.profile__button}>
                    <Text style={styles.profile__buttonText}>Ред.</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={toggleFullImage} 
                activeOpacity={.8}
            >
                <Image style={fullImage ? styles.profile__fullImage : styles.profile__image} 
                    source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtuphMb4mq-EcVWhMVT8FCkv5dqZGgvn_QiA&usqp=CAU'}}
                />
            </TouchableOpacity>
            <View style={styles.profile__container}> 
                <Text style={styles.profile__text}
                    numberOfLines={1} 
                    ellipsizeMode={"tail"}
                >Art</Text>
                <Text style={styles.profile__text}
                    numberOfLines={1} 
                    ellipsizeMode={"tail"}
                >Art@yandex.ru</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    profile: {
        flex: 1,
        alignItems: "center",
    },
    profile__buttonBox: {
        width: "100%",
        justifyContent: "center",
        alignItems: "flex-end",
    },
    profile__button: {
        marginRight: 15,
        paddingBottom: 5
    },
    profile__buttonText: {
        fontSize: 18
    },
    profile__fullImage: {
        height: 300,
        width: windowWidth
    },
    profile__image: {
        marginTop: 50,
        marginBottom: 55,
        width: 135,
        height: 135,
        borderRadius: 180
    },
    profile__container: {
        width: "100%",
        alignItems: "center"
    },
    profile__text: {
        marginTop: 15,
        fontSize: 24,
        textAlign: "center",
        width: "80%"
    }
})

export default Profile