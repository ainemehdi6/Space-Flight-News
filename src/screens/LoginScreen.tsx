import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';


export const LoginScreen = ({ Navigation }: any) => {
  const [text, setText,] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isVisble, setIsVisible] = React.useState(true);

  function toggleSecureIcon() {
    setIsVisible(!isVisble);
  }


  return (
    <View style={styles.view}>
      <Text variant="headlineLarge" style={styles.paragraph}>Login Form</Text>

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

      <Button mode="contained" onPress={() => Navigation.navigate("Articles")}>
        Login
      </Button>
    </View>


  );

}

const styles = StyleSheet.create({
  view: {
    backgroundColor: 'red',
    flex: 1,
    margin: 20,
    padding: 20,
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





