import React, { useContext } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Alert,
} from "react-native";
import { LakesContext } from "../../LakesContext";
// import LakePreview from "../LakePreview/LakePreview";
import { collection, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import { useAuth } from "../../AuthContext";
import { useNavigation } from "@react-navigation/native";
import styles from "./LakeList.styles";

const LakeList = () => {
  const { lakes } = useContext(LakesContext);
  const { currentUser } = useAuth();
  const navigation = useNavigation();

  const getLastNotes = (notes) => {
    return notes
      .filter((note) => note.type === "fishBite")
      .slice(-3)
      .map(
        (note) =>
          `Bait: ${note.fishBite.bait}, Distance: ${note.fishBite.distance}m`
      )
      .join(" | ");
  };

  const handleDeleteLake = async (lakeId) => {
    try {
      await deleteDoc(
        doc(collection(db, "users", currentUser.uid, "userLakes"), lakeId)
      );
    } catch (error) {
      console.error("Error deleting lake:", error);
    }
  };

  const confirmDelete = (lakeId) => {
    Alert.alert(
      "Delete Lake",
      "Are you sure you want to delete this lake?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        { text: "Yes", onPress: () => handleDeleteLake(lakeId) },
      ],
      { cancelable: true }
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Lakes</Text>
      {/* <FlatList
        data={lakes}
        renderItem={({ item: lake }) => (
          <TouchableOpacity
            style={styles.lakeListItem}
            onPress={() => navigation.navigate
              ("LakeDetails", { lakeId: lake.id })}
          >
            <View style={styles.lakeInfo}>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                {lake.name}
              </Text>
              <Text>{lake.description}</Text>
              <Text style={styles.lakeNotes}>{getLastNotes(lake.notes)}</Text>
            </View>
            <LakePreview lake={lake} style={{ flexGrow: 3, marginLeft: 16 }} />
              <TouchableOpacity
                style={styles.deleteLakeButton}
                onPress={() => confirmDelete(lake.id)}
              >
                <Text style={{ color: "#fff", fontWeight: "bold" }}>X</Text>
              </TouchableOpacity>
            </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      /> */}
      <TouchableOpacity
        style={styles.addLakeButton}
        onPress={() => navigation.navigate("AddLake")}
      >
        <Text style={styles.addLakeButtonText}>Add Lake</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default LakeList;