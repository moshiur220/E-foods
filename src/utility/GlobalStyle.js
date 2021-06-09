import { StyleSheet } from "react-native";
import Constants from "expo-constants";
export const globalStyle = StyleSheet.create({
  // This is font color
  clorPrimary: {
    color: "#FF9500",
  },
  colorBlue: {
    color: "#007AFF",
  },
  colorFb: {
    color: "#3B5999",
  },
  colorBlack: {
    color: "#000000",
  },
  colorWhite: {
    color: "#FFFFFF",
  },
  colorPara: {
    color: "#77767E",
  },
  // backgroundColor
  bgPrimary: {
    backgroundColor: "#FF9500",
  },
  bgBlue: {
    backgroundColor: "#007AFF",
  },
  bgFb: {
    backgroundColor: "#3B5999",
  },
  colorBlack: {
    color: "#000000",
  },
  bgWhite: {
    backgroundColor: "#FFFFFF",
  },
  bgPara: {
    backgroundColor: "#77767E",
  },
  // BorderColor
  borderPrimary: {
    borderColor: "#FF9500",
  },
  borderBlue: {
    borderColor: "#007AFF",
  },
  borderFb: {
    borderColor: "#3B5999",
  },
  borderBlack: {
    borderColor: "#000000",
  },
  borderWhite: {
    borderColor: "#FFFFFF",
  },
  borderPara: {
    borderColor: "#77767E",
  },

  // font and family
  robotoRegular: {
    fontFamily: "Roboto_400Regular",
    fontWeight: "400",
    fontStyle: "normal",
  },
  robotoBold: {
    fontFamily: "Roboto_700Bold",
    fontWeight: "700",
    fontStyle: "normal",
  },
  robotoBlack: {
    fontFamily: "Roboto_900Black",
    fontWeight: "900",
    fontStyle: "normal",
  },
  robotoMedium: {
    fontFamily: "Roboto_500Medium",
    fontWeight: "500",
    fontStyle: "normal",
  },
  robotoLight: {
    fontFamily: "Roboto_300Light",
    fontWeight: "300",
    fontStyle: "normal",
  },
  container: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
  },
  statusBar: {
    marginTop: Constants.statusBarHeight,
  },
  btnBorderRadius: {
    borderRadius: 8,
  },
  // Flex Box
  dFlex: {
    display: "flex",
  },
  flexRow: {
    flexDirection: "row",
  },
  flexColumn: {
    flexDirection: "column",
  },
  contenCenter: {
    justifyContent: "center",
    alignItems: "center",
  },
  textCenter: {
    textAlign: "center",
  },

  // Shadow classes

  shadowBtn: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },

  shadowBox: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },
  shadowRound: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 50,

    elevation: 1,
  },
});

// Parametter with style sheet
export class StyleCustom {
  static getSheet(value = 5) {
    return StyleSheet.create({
      // padding aria
      padding: {
        padding: value,
      },
      pT: {
        paddingTop: value,
      },
      pB: {
        paddingBottom: value,
      },
      pL: {
        paddingLeft: value,
      },
      pR: {
        paddingRight: value,
      },
      pE: {
        paddingEnd: value,
      },
      pH: {
        paddingHorizontal: value,
      },
      pS: {
        paddingStart: value,
      },
      pV: {
        paddingVertical: value,
      },
      // margin aria
      margin: {
        margin: value,
      },
      mB: {
        marginBottom: value,
      },
      mE: {
        marginEnd: value,
      },
      mH: {
        marginHorizontal: value,
      },
      mL: {
        marginLeft: value,
      },
      mR: {
        marginRight: value,
      },
      mS: {
        marginStart: value,
      },
      mT: {
        marginTop: value,
      },
      mV: {
        marginVertical: value,
      },
      // border aria
      bWidth: {
        borderWidth: value,
      },
      bRadius: {
        borderRadius: value,
      },
    });
  }
}
