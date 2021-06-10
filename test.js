import React from "react";
import { View, Text } from "react-native";
import { Button,TextInput } from "react-native-paper";
import { globalStyle, StyleCustom } from "../../utility/GlobalStyle";
import { UiButton,UiInput,UiTitle1,UiTitle2,UiTitle3,Paragraph } from "../../utility/Ui";


export default function CreateAccount({ navigation }) {
    const [text, setText] = React.useState('');
    // let myStyleSheet = StylePadding.getSheet(10)
  return (
    <View style={{ flex: 1, paddingTop:200}}>


<View>

<TextInput style={{ width: "80%", backgroundColor: "#FFFFFF",marginBottom:20}}
      label="Email"
      selectionColor="#FF9500"
   
      underlineColor="#FF9500"
     
      value={text}
      onChangeText={text => setText(text)}
    />

    <UiInput label="Hello"/>
    <UiTitle1>Hello</UiTitle1>
    <UiTitle2>Thite two</UiTitle2>
    <UiTitle3>Thite two</UiTitle3>
    <Paragraph>Paragraph</Paragraph>
</View>

        {/* <Ebutton icon="camera" mode="contained"> <Text>Create account</Text></Ebutton> */}
        <UiButton style={[globalStyle.bgPrimary]}>
        <Text style={[globalStyle.colorWhite]}>Create account</Text>
        </UiButton>
      <Button
        icon="camera"
        mode="contained"
        onPress={() => navigation.navigate("Signin")}
      >
        Press me
      </Button>
      <Text style={[globalStyle.clorPrimary,StyleCustom.getSheet(10).padding]}>Hello</Text>
    </View>
  );
}
