import React from "react";
import { useNavigation } from "@react-navigation/native";

import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";
import { RoundedButton } from "../../components/RoundedButton";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../App";

export const ResetPasswordScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    // COLUMN
    <View style={styles.container}>
      <Image
        source={require("../../../assets/amist.jpg")}
        style={styles.imageBackground}
      />
      <View style={styles.logoContainer}>
        <Image
          source={require("../../../assets/AmistAppIcon.png")}
          style={styles.logoImage}
        />
        <Text style={styles.logoText}>Amist App</Text>
      </View>
      <View style={styles.form}>
        <Text style={styles.formText}>INGRESE SU CORREO PARA RECUPERARLO</Text>
        <View style={styles.formInput}>
          <Image
            style={styles.formIcon}
            source={require("../../../assets/email.png")}
          />

          <TextInput
            style={styles.formTextInput}
            placeholder="Ingrese su Correo"
            keyboardType="email-address"
          />
        </View>

        <View style={{ marginTop: 30 }}>
          <RoundedButton
            text="Ingresar"
            onPress={() => ToastAndroid.show("Holiii", ToastAndroid.SHORT)}
          />
        </View>
        <View style={styles.formPassword}>
          <Text>Recuerda su Password ?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("HomeScreen")}
          >
            <Text style={styles.formPasswordText}>Ingrese</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  imageBackground: {
    width: "100%",
    height: "100%",
    opacity: 0.7,
    bottom: "30%",
  },
  form: {
    width: "100%",
    height: "33%",
    backgroundColor: "white",
    position: "absolute",
    bottom: 0,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 30,
  },
  formText: {
    fontWeight: "bold",
    fontSize: 16,
  },
  formInput: {
    flexDirection: "row",
    marginTop: 30,
  },
  formIcon: {
    width: 25,
    height: 25,
    marginTop: 5,
  },
  formTextInput: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#AAAAAA",
    marginLeft: 15,
  },
  formPassword: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 30,
  },
  formPasswordText: {
    fontStyle: "italic",
    color: "purple",
    borderBottomWidth: 1,
    borderBottomColor: "purple",
    fontWeight: "bold",
    marginLeft: 10,
  },
  logoContainer: {
    position: "absolute",
    alignSelf: "center",
    top: "5%",
  },
  logoImage: {
    width: 100,
    height: 100,
    marginTop: 60, // Agregado para bajar el logo 30 puntos más
  },
  logoText: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    marginTop: 10,
    fontWeight: "bold",
  },
});
