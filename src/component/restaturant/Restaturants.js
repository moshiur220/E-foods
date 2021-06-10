import React from "react";
import { View, Text, Image,TouchableOpacity } from "react-native";
import { globalStyle, StyleCustom } from "../../utility/GlobalStyle";
import { Col, Row, Grid } from "react-native-easy-grid";
import { Avatar, Searchbar } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import {
  UiButton,
  UiInput,
  UiTitle1,
  UiTitle3,
  Paragraph,
  ProductHead,
  ProductViewLink,
} from "../../utility/Ui";

export default function Restaturants() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <View style={[globalStyle.mainContainer]}>
      <Grid style={[globalStyle.statusBar]}>
        <Row>
          {/* Top bar start */}
          <View style={[globalStyle.container]}>
            <View
              style={[
                globalStyle.flexD,
                globalStyle.flexRow,
                globalStyle.flexJcSpaceBetween,
              ]}
            >
              <Avatar.Image
                size={40}
                source={require("../../../assets/img/Male.png")}
              />
              <MaterialCommunityIcons
                name="bell-ring-outline"
                size={40}
                color="#FF9500"
              />
            </View>
          </View>
        </Row>
        {/* Top bar end */}
        {/* Search bar start */}
        <Row>
          <View style={[globalStyle.container]}>
            <Searchbar
              style={[globalStyle.shadowBox]}
              placeholder="Search"
              onChangeText={onChangeSearch}
              value={searchQuery}
            />
          </View>
        </Row>
        {/* Search bar End */}

        {/* Trending this week start */}
        <Row>
          <View style={[globalStyle.container]}>
            <View
              style={[
                globalStyle.flexD,
                globalStyle.flexRow,
                globalStyle.flexJcSpaceBetween,
              ]}
            >
              <ProductHead>Trending this week</ProductHead>
              <View style={[globalStyle.flexRow, globalStyle.flexAiEnd]}>
                <ProductViewLink>26 places</ProductViewLink>
                <AntDesign name="doubleright" size={16} color="#FF9500" />
              </View>
            </View>

            {/* product view info start */}
            <TouchableOpacity>
            <View style={[StyleCustom.getSheet(250).w,StyleCustom.getSheet(211).h,globalStyle.bgWhite,globalStyle.shadowBox,globalStyle.productBorderRadius]}>
              <Image style={{width:"100%",borderTopLeftRadius:4,borderTopRightRadius:4}} source={require("../../../assets/img/product1.png")} />
            </View>
            </TouchableOpacity>
            {/* product view info end */}
          </View>
        </Row>
        {/* Trending this week end */}
      </Grid>
    </View>
  );
}
