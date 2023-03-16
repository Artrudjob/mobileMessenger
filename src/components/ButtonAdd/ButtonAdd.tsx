import React, { FC } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface IProps {
    title: string
    onPress: () => void 
}

const ButtonAdd: FC<IProps> = ({ title, onPress }) => {

    return (
        <TouchableOpacity style={styles.button}
            onPress={onPress}>
            <Text style={styles.button__text}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        alignSelf: "center",
        width: "82%",
        borderRadius: 10,
        backgroundColor: "#436f64",
    },
    button__text: {
        borderRadius: 10,
        borderWidth: 2,
        fontSize: 30,
        textAlign: "center",
        padding: 10
    }
})

export default ButtonAdd