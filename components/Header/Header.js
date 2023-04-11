import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useAuth } from "../../AuthContext";
import { signOut, getAuth } from "firebase/auth";
import styles from "./Header.styles";

const AppHeader = () => {
  const { currentUser } = useAuth();

  const handleSignOut = async () => {
    try {
      const auth = getAuth();
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <View style={styles.header}>
      <View />
      {currentUser && (
        <TouchableOpacity style={styles.signOutButton} onPress={handleSignOut}>
          <Text style={styles.signOutButtonText}>Sign Out</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default AppHeader;
