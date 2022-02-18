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
        style={styles.ImageBackground_1_35}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1534/1805/a16262fe4b6f626062d7a3a1632f9dc2"
        }}
        style={styles.ImageBackground_1_36}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a3fa/c5d5/12aa7085ef36b42d68ae052162864bd0"
        }}
        style={styles.ImageBackground_1_37}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b778/fd11/0bb129b0b6091671c060ba5c1737e5a4"
        }}
        style={styles.ImageBackground_1_38}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c44f/e0b6/417eb495d69f4f492be4afa5ce2779e2"
        }}
        style={styles.ImageBackground_1_39}
      />
      <TouchableOpacity
        style={styles.TouchableOpacity_1_40}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("1_2"))
        }
      >
        <Text style={styles.Text_1_40}>2.</Text>
      </TouchableOpacity>
      <View style={styles.View_1_62}>
        <Text style={styles.Text_1_62}>
          SESTI NA 8 VOZITI SE 16 STANICA SETATI DO NARODNOG FRONTA - SEKSPIROVA
          SESTI NA 7A VOZITI SE 11 STANICA SETATI DO BULEVAR JOVANA DUCICA -
          BULEVAR KNEZA MILOSA SESTI NA 8 VOZITI SE 6 STANICA
        </Text>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 1)" },
  View_2: { height: hp("127%") },
  ImageBackground_1_35: {
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
  ImageBackground_1_36: {
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
  ImageBackground_1_37: {
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
  ImageBackground_1_38: {
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
  ImageBackground_1_39: {
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
  TouchableOpacity_1_40: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_1_40: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_62: {
    width: wp("64%"),
    minWidth: wp("64%"),
    minHeight: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("30%"),
    justifyContent: "flex-start"
  },
  Text_1_62: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
