import React from "react";
import { View, StyleSheet, TextInput, Button } from "react-native";
import { useForm, Controller} from "react-hook-form";
import TextApp from "../../components/TextApp";
import { api } from "../../services/api";

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

    api.post('cars/store', data)
      .then(response => {
        console.log('oi');
      })
      .catch(error => {
        console.log(error);
      });
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

      <TextApp style={styles.label}>Marca:</TextApp>
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
        name="model"
        rules={{ required: true }}
      />

      <TextApp style={styles.label}>Ano de fabricação:</TextApp>
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
        name="year"
        rules={{ required: true }}
      />

      <TextApp style={styles.label}>Kilomentragem:</TextApp>
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
        name="km"
        rules={{ required: true }}
      />

      <TextApp style={styles.label}>Cor</TextApp>
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
        name="color"
        rules={{ required: true }}
      />

      <TextApp style={styles.label}>Preço:</TextApp>
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
        name="price"
        rules={{ required: true }}
      />

      <View style={styles.button}>
        <Button
          title="Enviar Anúncio"
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
    color: 'black',
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
    width: '100%',
    height: 40,
    borderRadius: 20,
  },
});
