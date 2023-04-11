import React, { useRef, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from "react-native";
import { useAuth } from "../../AuthContext";
import { useNavigation } from "@react-navigation/native";
import styles from "./Auth.styles";

const SignUp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signUp } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  async function handleSubmit() {
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signUp(emailRef.current.value, passwordRef.current.value);
      navigation.navigate("LakeList");
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      {error && Alert.alert("Error", error)}
      <TextInput
        style={styles.input}
        placeholder="Email"
        ref={emailRef}
        onChangeText={(text) => (emailRef.current.value = text)}
        keyboardType="email-address"
        autoCapitalize="none"
        required
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        ref={passwordRef}
        onChangeText={(text) => (passwordRef.current.value = text)}
        secureTextEntry
        required
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        ref={passwordConfirmRef}
        onChangeText={(text) => (passwordConfirmRef.current.value = text)}
        secureTextEntry
        required
      />
      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit}
        disabled={loading}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <View style={styles.linkContainer}>
        <Text>
          <Text>Already have an account? </Text>
          <Text
            style={styles.linkText}
            onPress={() => navigation.navigate("SignIn")}
          >
            Log In
          </Text>
        </Text>
      </View>
    </View>
  );  
};

export default SignUp;
