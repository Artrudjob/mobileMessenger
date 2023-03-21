import React, { FC } from "react";
import ReactNativeModal from "react-native-modal";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

interface IProps {
    isVisible: boolean
    backdropPress: () => void
    children: React.ReactNode
}

export const Modal = ({ isVisible = false, backdropPress, children, ...props }: IProps) => {
    
    return (
        <ReactNativeModal style={{ margin: 0, justifyContent: "flex-end" }} isVisible={isVisible}
            backdropTransitionInTiming={800}
            backdropTransitionOutTiming={800}
            onBackdropPress={backdropPress}
            {...props}
        >
            {children}
        </ReactNativeModal>
    )
}

const ModalContainer = ({ children }: { children: React.ReactNode }) => (
    <View style={styles.container}>{children}</View>
  );
  
  const ModalHeader = ({ title, text, onPress }: { title: string, text: string, onPress: () => void }) => (
    <View style={styles.header}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.button__text}>{text}</Text>
      </TouchableOpacity>  
      <Text style={styles.text}>{title}</Text>
    </View>
  );
  
  const ModalBody = ({ children }: { children?: React.ReactNode }) => (
    <View style={styles.body}>{children}</View>
  );
  
  const ModalFooter = ({ children }: { children?: React.ReactNode }) => (
    <View style={styles.footer}>{children}</View>
  );

  const styles = StyleSheet.create({
    container: {  
      flex: .9,
      backgroundColor: "#ffcfba",
      borderRadius: 5,
      borderWidth: 1,
      borderColor: "#000",
      borderStyle: "solid",
    },
    header: {
      minHeight: 60,  
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#f07800"
    },
    button: {
        marginLeft: 10
    },
    button__text: {
        fontSize: 18,
    },
    text: {
      textAlign: "center",
      fontSize: 24,
      position: "absolute",
      left: "30%",
      top: "25%"
    },
    body: {
      borderTopWidth: 1,  
      justifyContent: "center",
      paddingHorizontal: 15,
      minHeight: 100,
    },
    footer: {
      justifyContent: "center",
      alignItems: "center",
      padding: 10,
      flexDirection: "row",
    },
  });

Modal.Header = ModalHeader;
Modal.Container = ModalContainer;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;