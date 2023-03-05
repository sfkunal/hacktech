import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
	text: {
    fontFamily: 'SF-Pro-Text-Bold',
    fontSize: 40,
		color: "#FFFFFF",
  },
	container: {
		backgroundColor: "#272727",
		flex: 1,
		paddingHorizontal: 32,
	},
  separator: {
		// width: '85%',
    borderBottomWidth: 1,
    borderBottomColor: "#dcdcdc",
		// alignSelf: "center",
		// justifyContent: "center",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#383838",
    opacity: 0.94,
    paddingBottom: 5,
    height: 70,
  },
  iconContainer: {
    // flex: 1,
    alignItems: "center",
  },
  icon: {
    height: 33,
    width: 33,
  },
	screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
	header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // paddingHorizontal: 5,
    paddingTop: 55,
    paddingBottom: 10,
  },
	logo: {
    width: 200,
    height: 50,
  },
  profilePicture: {
    width: 45,
    height: 45,
    borderRadius: 20,
  },
  input: {
    position: "relative",
    height: 30,
    margin: 6,
    // borderWidth: 1,
    padding: 8,
    color: "#FFFFFF",
    fontSize: 16
  },
});

export default styles