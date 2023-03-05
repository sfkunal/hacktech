import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  separator: {
    borderBottomWidth: 1,
    padding: 5,
    borderBottomColor: "#dcdcdc",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#383838",
    opacity: 0.94,
    paddingBottom: 8,
    height: 86,
  },
  iconContainer: {
    flex: 1,
    alignItems: "center",
  },
  icon: {
    height: 44,
    width: 29,
  },
	screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles