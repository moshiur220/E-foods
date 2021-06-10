import React from "react";
import { View, Text } from "react-native";
import { globalStyle, StyleCustom } from "../../utility/GlobalStyle";
import { Col, Row, Grid } from "react-native-easy-grid";
import {
  UiButton,
  UiInput,
  UiTitle1,
  Paragraph,
} from "../../utility/Ui";

export default function CreateAccount() {
  return (
    <View style={[globalStyle.mainContainer]}>
      <Grid style={[globalStyle.statusBar]}>
      {/* // this is heading aria start */}
        <Row size={20}>
        <View style={[globalStyle.container,StyleCustom.getSheet(50).pT]}>
            <UiTitle1>Create Account </UiTitle1>
            <Paragraph style={{width:"70%",color:"black"}}>
              Hi, kindly fill in the form to proceed shopping
            </Paragraph>
          </View>
        </Row>
          {/* // this is heading aria end */}
          {/* // this is user create  aria start */}
        <Row size={80}>
        <View style={[globalStyle.container]}>
          <UiInput label="Name" style={[StyleCustom.getSheet(10).mB]} />
          <UiInput label="Email" style={[StyleCustom.getSheet(10).mB]}/>
          <UiInput label="Mobile" style={[StyleCustom.getSheet(10).mB]}/>
          <UiInput label="Password" style={[StyleCustom.getSheet(10).mB]}/>
          <UiInput label="Confirm password" style={[StyleCustom.getSheet(10).mB]}/>
          <UiButton style={[globalStyle.bgPrimary,StyleCustom.getSheet(5).mT]}><Text style={[globalStyle.colorWhite]}>SignUp</Text></UiButton>
          <UiButton style={[globalStyle.bgFb,StyleCustom.getSheet(10).mT]}><Text style={[globalStyle.colorWhite]}>Login</Text></UiButton>
        </View>
        </Row>
        {/* // this is user create  aria end */}   
      </Grid>
    </View>
  );
}
