import {
  StyleSheet,
  View,
  Image,
  Button,
  Text,
  TextInput,
  Pressable,
  TouchableOpacity,
} from "react-native";
import Spotify from "../assets/logo_full.png";
import { useState } from "react";

export const LoginPage = () => {
  const [valor, setValor] = useState(0);
  return (
    <View style={styles.container}>
      <Image source={Spotify} style={styles.logo} width={108} height={33} />
      <Text style={styles.text}>Sign In</Text>

      <View style={styles.SupportCont}>
        <Text style={styles.text2}>If you need any support </Text>
        <TouchableOpacity>
          <Text style={styles.text3}>click here</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.flex}>
        <View style={styles.inputBorder}>
          <TextInput
            style={styles.input}
            placeholder="enter username or email"
            placeholderTextColor="#A7A7A7"
          />
        </View>
        <View style={styles.inputBorder}>
          <TextInput
            style={styles.input}
            placeholder="enter username or email"
            placeholderTextColor="#A7A7A7"
          />
        </View>
        <Text style={styles.recovery}>Recovery password</Text>
      </View>
      <Pressable style={styles.submit} onPress={() => setValor(valor + 1)}>
        <Text style={styles.btnText}>Sign In</Text>
      </Pressable>
      <View style={styles.lineContainer}>
        <View style={styles.line}></View>
        <Text style={styles.or}>Or</Text>
        <View style={styles.line}></View>
      </View>
      <View style={styles.MembCont}>
        <Text style={styles.txt1}>Not A Member? </Text>
        <TouchableOpacity>
          <Text style={styles.txt2}>Register Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#161616",
  },
  logo: {
    marginTop: 46,
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: 700,
    marginTop: 60,
  },
  text2: {
    color: "#FFF",
    fontSize: 14,
    fontWeight: 400,
  },
  text3: {
    color: "#38B432",
    fontSize: 14,
    fontWeight: 400,
  },
  inputBorder: {
    borderRadius: 30,
    borderColor: "#fff",
  },
  input: {
    borderWidth: 1,
    borderColor: "#fff",
    color: "#fff",
    marginTop: 38,
    paddingHorizontal: 27,
    paddingVertical: 29,
    borderRadius: 30,
    width: 334,
  },
  flex: {
    display: "flex",
    alignItems: "flex-start",
  },
  recovery: {
    color: "#fff",
    marginTop: 20,
    marginLeft: 10,
  },
  /* submit: {
    backgroundColor: "#42c83c",
    borderRadius: 30,
    color: "#fff",
    marginTop: 22,
    width: 325,
  }, */
  SupportCont: {
    marginTop: 22,
    flexDirection: "row",
    alignItems: "center",
  },
  btnText: {
    color: "#fff",
    borderWidth: 0,
    width: 325,
    textAlign: "center",
    paddingVertical: 26,
    backgroundColor: "#42C83C",
    marginTop: 22,
    borderRadius: 30,
  },
  lineContainer: {
    flexDirection: "row",
    marginTop: 31,
    alignItems: "center",
  },
  line: {
    width: 146,
    height: 1,
    backgroundColor: "#fff",
  },
  or: {
    color: "#fff",
    paddingHorizontal: 11,
  },
  MembCont: {
    flexDirection: "row",
    marginTop: 57,
  },
  txt1: {
    fontSize: 14,
    fontWeight: 700,
    color: "#DBDBDB",
  },
  txt2: {
    fontSize: 14,
    fontWeight: 700,
    color: "#288CE9",
  },
});
