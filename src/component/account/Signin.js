import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import Constants from "expo-constants";
import styled from "styled-components/native";
import { colorName } from "../../utility/ecolor";
import { Col, Row, Grid } from "react-native-easy-grid";
import { roboto } from "../../utility/efont";
import { Button, TextInput } from "react-native-paper";
const Signview = styled.View`
  flex: 1;
  background-color: ${colorName.backgroundColor};
`;
const LoginTitle = styled.Text`
  font-family: ${roboto.Roboto_400Regular};
  font-style: normal;
  font-weight: normal;
  font-size: 34px;
  line-height: 41px;
`;
const AuthBtnTxt = styled.Text`
  font-family: ${roboto.Roboto_400Regular};
  text-transform: capitalize;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 18px;
  /* color: "black"; */
`;
const HaveAccout = styled.Text`
  font-family: ${roboto.Roboto_400Regular};
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 28px;
  color: #232326;
`;
const SigninText = styled.Text`
  font-family: ${roboto.Roboto_400Regular};
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 22px;
  color: #77767e;
  text-align: center;
`;
const ForgerPass = styled.Text`
  font-family: ${roboto.Roboto_400Regular};
  font-size: 13px;
  line-height: 18px;
  color: #007aff;
`;
const BtnSignIn = styled.Text`
  padding: 10px;
  color: #ffffff;
`;
export default function Signin() {
  return (
    <Signview>
      <Grid style={{ marginTop: Constants.statusBarHeight }}>
        {/* Login taitle aria start */}
        <Row
          style={{ height: 80, justifyContent: "center", alignItems: "center" }}
        >
          <LoginTitle>Hey, Hello 👋</LoginTitle>
        </Row>
        {/* Login taitle aria end */}

        {/* Login taitle aria start */}
        <Row
          style={{
            height: 80,
            justifyContent: "center",
            alignItems: "center",
            paddingLeft: 20,
            paddingRight: 20,
          }}
        >
          <Col>
            <Button style={style.authBtn}>
              <AuthBtnTxt style={{ color: "black" }}>Authentication</AuthBtnTxt>
            </Button>
          </Col>
          <Col>
            <Button style={style.regiBtn}>
              <AuthBtnTxt style={{ color: "#007AFF" }}>Registration</AuthBtnTxt>
            </Button>
          </Col>
        </Row>
        {/* Login taitle aria end */}

        {/* Text content start */}
        <Row
          style={{
            height: 160,
            justifyContent: "center",
            alignItems: "center",
            paddingLeft: 20,
            paddingRight: 20,
            flexDirection: "column",
          }}
        >
          <HaveAccout>Have an Account?</HaveAccout>
          <SigninText>
            Sign in to speed up the checkout process and save your order to your
            account
          </SigninText>
        </Row>
        {/* Text field start */}
        <Row
          style={{
            height: 80,
            justifyContent: "center",
            alignItems: "center",
            paddingLeft: 20,
            paddingRight: 20,
            marginTop: -20,
          }}
        >
          <TextInput
            style={{ width: "100%", backgroundColor: "#FFFFFF" }}
            label="Email Adress"
            mode="flat"
          />
        </Row>
        <Row
          style={{
            height: 80,
            justifyContent: "center",
            alignItems: "center",
            paddingLeft: 20,
            paddingRight: 20,
          }}
        >
          <TextInput
            style={{ width: "100%", backgroundColor: "#FFFFFF" }}
            label="Password"
            mode="flat"
          />
        </Row>
        {/* Text field start end */}
        {/* forget text start */}
        <Row
          style={{
            height: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ForgerPass>Forgot my password</ForgerPass>
        </Row>
        {/* forget text end */}
        {/* button text start */}
        <Row
          style={{
            height: 80,
            justifyContent: "center",
            alignItems: "center",
            paddingLeft: 20,
            paddingRight: 20,
          }}
        >
          <Button style={style.btnSingIn}>
            <BtnSignIn>signin</BtnSignIn>
          </Button>
        </Row>
        <Row
          style={{
            // marginTop: -10,
            height: 60,
            justifyContent: "center",
            alignItems: "center",
            paddingLeft: 20,
            paddingRight: 20,
          }}
        >
          <Button style={style.btnFbSingIn}>
            <BtnSignIn>SIGN IN WITH FACEBOOK</BtnSignIn>
          </Button>
        </Row>        
        
        <Row
          style={{
            marginTop: 10,
            height: 60,
            justifyContent: "center",
            alignItems: "center",
            paddingLeft: 20,
            paddingRight: 20,
          }}
        >
          <Button style={style.btnPiSingIn}>
            <BtnSignIn>SIGN IN WITH GMAIL</BtnSignIn>
          </Button>
        </Row>
        {/* button text end */}
      </Grid>
    </Signview>
  );
}

const style = StyleSheet.create({
  authBtn: {
    backgroundColor: colorName.white,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: "#77767E",
    width: "100%",
  },
  regiBtn: {
    backgroundColor: "#E6E4EA",
    borderRadius: 2,
    width: "100%",
    borderWidth: 1,
    borderColor: "#E6E4EA",
  },
  btnSingIn: {
    backgroundColor: "#007AFF",
    borderRadius: 8,
    width: "100%",
    borderWidth: 1,
    borderColor: "#E6E4EA",
    padding: 7,
  },
  btnFbSingIn: {
    backgroundColor: "#3B5999",
    borderRadius: 8,
    width: "100%",
    borderWidth: 1,
    borderColor: "#E6E4EA",
    padding: 7,
  },
  btnPiSingIn: {
    backgroundColor: "#FF2D55",
    borderRadius: 8,
    width: "100%",
    borderWidth: 1,
    borderColor: "#E6E4EA",
    padding: 7,
  },
});
