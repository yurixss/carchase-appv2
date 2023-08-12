import React from "react";
import { View, StyleSheet, TextInput, Button } from "react-native";
import { useForm, Controller} from "react-hook-form";
import TextApp from "../../components/TextApp";


export default function Announce(): JSX.Element {
  const { 
    register, 
    setValue, 
    handleSubmit, 
    control, 
    reset, 
    formState: { errors } 
  } = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <View style={styles.container}>
      <TextApp style={styles.label}>First name</TextApp>
      <Controller
        control={control}
        render={({field: { onChange, onBlur, value }}) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name="name"
        rules={{ required: true }}
      />
      <View style={styles.button}>
        <Button
          title="Button"
          onPress={handleSubmit(onSubmit)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    marginTop: 40,
    color: 'white',
    height: 40,
    backgroundColor: 'blue',
    borderRadius: 4,
  },
  label: {
    color: 'black',
    margin: 20,
    marginLeft: 0,
  },
  input: {
    backgroundColor: 'white',
    borderColor: 'black',
    width: 300,
    height: 40,
    padding: 10,
    borderRadius: 20,
  },
});
