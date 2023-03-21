import React, { FC, useState } from "react";
import { Text, TouchableOpacity, View, StyleSheet, ScrollView } from "react-native";
import Chat from "../Chat/Chat";
import { Modal } from "../Modal/Modal";

const Chats: FC = () => {

    const [isModalVisible, setModalVisible] = useState<boolean>(false);

    function handleModal() {
        isModalVisible ? setModalVisible(false) : setModalVisible(true)
    }

    return (
        <View style={styles.chat}>
            <View style={styles.chat__buttonBox}>
                <TouchableOpacity onPress={handleModal}>
                    <Text style={styles.chat__text}>Создать чат</Text>
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.chats__container}>
                {/* <Text style={styles.chats__containerText}>Вы пока еще не начали общение</Text> */}
                <Chat /> 
                <Chat /> 
                <Chat /> 
                <Chat /> 
                <Chat /> 
                <Chat /> 
                <Chat /> 
                <Chat /> 
                <Chat /> 
                <Chat />    
                <Chat /> 
                <Chat /> 
                <Chat /> 
                <Chat /> 
                <Chat /> 
            </ScrollView>
            <Modal isVisible={isModalVisible} backdropPress={() => { setModalVisible(false)} }>
                <Modal.Container>
                    <View>
                        <Modal.Header title="Новый чат с..." text="Назад" onPress={handleModal}/>
                        <Modal.Body>

                        </Modal.Body>
                    </View>
                </Modal.Container>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    chat: {
        flex: 1,
        width: "100%",
    },
    chat__buttonBox: {
        flex: .1,
        backgroundColor: "#f07800",
        justifyContent: "center",
        alignItems: "flex-end",
    },
    chat__text: {
        marginRight: 20,
        fontSize: 28,
        fontWeight: "400",
    },
    chats__container: {
        flex: .9,
        borderTopWidth: 2,
        borderTopColor: "rgba(0, 0, 0, .8)"
    },
    chats__containerText: {
        marginTop: 20,
        textAlign: "center",
        fontSize: 24,
        opacity: .5,
    }
})

const modalStyles = StyleSheet.create({

})

export default Chats