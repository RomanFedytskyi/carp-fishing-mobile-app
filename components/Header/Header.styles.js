import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#001529",
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  signOutButton: {
    backgroundColor: "#1890ff",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 4,
  },
  signOutButtonText: {
    color: "#fff",
    fontSize: 14,
  },
});

export default styles;
