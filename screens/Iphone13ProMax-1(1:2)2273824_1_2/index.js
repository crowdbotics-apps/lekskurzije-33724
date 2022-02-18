import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c698/86c3/c1eada2840a5cd3eaab4c62f91393660"
        }}
        style={styles.ImageBackground_1_3}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1534/1805/a16262fe4b6f626062d7a3a1632f9dc2"
        }}
        style={styles.ImageBackground_1_4}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1534/1805/a16262fe4b6f626062d7a3a1632f9dc2"
        }}
        style={styles.ImageBackground_1_8}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b778/fd11/0bb129b0b6091671c060ba5c1737e5a4"
        }}
        style={styles.ImageBackground_1_5}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c44f/e0b6/417eb495d69f4f492be4afa5ce2779e2"
        }}
        style={styles.ImageBackground_1_6}
      />
      <View style={styles.View_1_9}>
        <Text style={styles.Text_1_9}>LUKA EKSKURZIJE</Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_1_10}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("1_18"))
        }
      />
      <View style={styles.View_1_14} />
      <View style={styles.View_1_15} />
      <View style={styles.View_1_16} />
      <View style={styles.View_1_17} />
      <TouchableOpacity
        style={styles.TouchableOpacity_1_11}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("1_50"))
        }
      />
      <TouchableOpacity
        style={styles.TouchableOpacity_1_12}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("1_42"))
        }
      />
      <TouchableOpacity
        style={styles.TouchableOpacity_1_13}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("1_34"))
        }
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 1)" },
  View_2: { height: hp("127%") },
  ImageBackground_1_3: {
    width: wp("137%"),
    minWidth: wp("137%"),
    height: hp("74%"),
    minHeight: hp("74%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-31%"),
    top: hp("72%")
  },
  ImageBackground_1_4: {
    width: wp("166%"),
    minWidth: wp("166%"),
    height: hp("99%"),
    minHeight: hp("99%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("39%")
  },
  ImageBackground_1_8: {
    width: wp("166%"),
    minWidth: wp("166%"),
    height: hp("99%"),
    minHeight: hp("99%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("-33%")
  },
  ImageBackground_1_5: {
    width: wp("98%"),
    minWidth: wp("98%"),
    height: hp("57%"),
    minHeight: hp("57%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-49%"),
    top: hp("14%")
  },
  ImageBackground_1_6: {
    width: wp("135%"),
    minWidth: wp("135%"),
    height: hp("73%"),
    minHeight: hp("73%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-46%"),
    top: hp("21%")
  },
  View_1_9: {
    width: wp("43%"),
    minWidth: wp("43%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("17%"),
    justifyContent: "flex-start"
  },
  Text_1_9: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_1_10: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("32%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_1_14: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("45%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_1_15: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("45%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_1_16: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%"),
    top: hp("45%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_1_17: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("45%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  TouchableOpacity_1_11: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("32%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  TouchableOpacity_1_12: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%"),
    top: hp("32%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  TouchableOpacity_1_13: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("32%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
