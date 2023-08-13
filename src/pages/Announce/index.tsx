import React from "react";
import { View, StyleSheet, TextInput, Button } from "react-native";
import { useForm, Controller} from "react-hook-form";
import TextApp from "../../components/pattern/TextApp";
import { api } from "../../services/api";
import HeaderApp from "../../components/pattern/HeaderApp";
import { styles } from "./styles";

export default function Announce(): JSX.Element {
  const [isLoading, setIsLoading] = React.useState(false);
  const { 
    register, 
    setValue, 
    handleSubmit, 
    control, 
    reset, 
    formState: { errors } 
  } = useForm();

  const onSubmit = data => {
    setIsLoading(true);
    api.post('cars/store', data)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (

    <View style={styles.container}>
      <View>
        <HeaderApp>Criar Ánuncio</HeaderApp>
      </View>

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
          disabled={isLoading}
        />
      </View>
    </View>
  );
}


