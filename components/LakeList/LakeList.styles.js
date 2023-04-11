import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f0f2f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  lakeListItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 8,
    backgroundColor: "#fff",
    borderRadius: 4,
    marginBottom: 16,
  },
  lakeInfo: {
    flex: 1,
  },
  lakeNotes: {
    marginTop: 8,
  },
  deleteLakeButton: {
    backgroundColor: "red",
    padding: 8,
    borderRadius: 4,
  },
  addLakeButton: {
    backgroundColor: "#1890ff",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    alignItems: "center",
  },
  addLakeButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default styles;
