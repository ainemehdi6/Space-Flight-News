import * as React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';


export const LoginScreen = ({ navigation }: any) => {
  const [text, setText,] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isVisble, setIsVisible] = React.useState(true);

  function toggleSecureIcon() {
    setIsVisible(!isVisble);
  }


  return (
    <View style={styles.view}>
      <Image style={styles.Logo} source={require('../../assets/logo.jpg')} />
      <TextInput
        style={styles.TextInput}
        label="Email"
        value={text}
        mode='outlined'
        keyboardType="email-address"
        onChangeText={text => setText(text)}
      />
      <TextInput
        style={styles.TextInput}
        label="Password"
        value={password}
        secureTextEntry={isVisble}
        onChangeText={value => setPassword(value)}
        mode='outlined'
        right={
          <TextInput.Icon
            onPress={toggleSecureIcon}
            icon={isVisble ? "eye" : "eye-off"}
          />
        }
      />
      <Button mode="contained" onPress={() => navigation.navigate("Articles")}>
        Login
      </Button>
    </View>


  );

}
const styles = StyleSheet.create({
  view: {
    margin: 'auto',
    flex: 1,
    padding: 20,
    backgroundColor: '#e4e4e4'
  },
  Logo: {
    width: 200,
    height: 200,
    margin: 'auto',
  },
  inputView: {
    margin: 20,
    flex: 1,
    justifyContent: 'center',
  },
  paragraph: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 50
  },
  TextInput: {
    marginBottom: 10
  },
});





