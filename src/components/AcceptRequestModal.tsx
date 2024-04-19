import {
  View,
  Text,
  Modal,
  Alert,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { defaultStyles } from "@/constants/Styles";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";

type AcceptRequestModalProps = {
  modalVisible: boolean;
  setModalVisible: Function;
};

const AcceptRequestModal = ({
  modalVisible,
  setModalVisible,
}: AcceptRequestModalProps) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text
              style={{ fontFamily: "Inter600", fontSize: 22, marginBottom: 32 }}
            >
              You are about to accept a request for a pal
            </Text>
            <Text
              style={{ fontFamily: "Inter600", fontSize: 16, marginBottom: 12 }}
            >
              Before you do, make sure you do the following:{" "}
            </Text>
            <View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 14,
                  marginBottom: 16,
                }}
              >
                <Ionicons name="checkbox-outline" size={24} />
                <Text>I can deliver these items by 17 February to my pal</Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 14,
                  marginBottom: 16,
                }}
              >
                <Ionicons name="checkbox-outline" size={24} />
                <Text>I can deliver these items by 17 February to my pal</Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 14,
                  marginBottom: 16,
                }}
              >
                <Ionicons name="checkbox-outline" size={24} />
                <Text>I can deliver these items by 17 February to my pal</Text>
              </View>
            </View>
            <View style={{gap: 8}}>
              <TouchableOpacity
                style={[defaultStyles.btnSecondary]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={defaultStyles.btnTextSecondary}>Got it!</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[defaultStyles.btnSecondary, {backgroundColor: Colors.white, borderColor: Colors.secondaryGreen, borderWidth: 2}]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={defaultStyles.btnTextSecondary}>Maybe next time...</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  modalView: {
    margin: 24,
    backgroundColor: "white",
    borderRadius: 8,
    padding: 24,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default AcceptRequestModal;
