import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";
import { useForm, Controller} from "react-hook-form";
import TextApp from "../../components/pattern/TextApp";
import { api } from "../../services/api";
import HeaderApp from "../../components/pattern/HeaderApp";
import { styles } from "./styles";
import { CarImagePicker } from "../../components/shared/ImagePicker";

export default function Announce(): JSX.Element {
  const [isLoading, setIsLoading] = useState(false);
  const { 
    register, 
    setValue, 
    handleSubmit, 
    control, 
    reset, 
    formState: { errors } 
  } = useForm();

  const onSubmit = (data) => {
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

  const onReset = () => {
    reset();
  }

  return (

    <View style={styles.container}>

      <HeaderApp>Criar Anuncio</HeaderApp>
      <CarImagePicker/>

      <TextApp style={styles.label}>First name</TextApp>
      <Controller
        control={control}
        render={({field: { onChange, onBlur, value }}) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
            autoCapitalize="words"
            autoCorrect={true}
            placeholder="Ex: João"
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
            autoCapitalize="words"
            autoCorrect={true}
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
            inputMode="decimal"
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
            maxLength={4}
            placeholder="Ex: 0000"
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
            inputMode="numeric"
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

      <View style={styles.button}>
        <Button
          title="Limpar Campos"
          onPress={onReset}
        />
      </View>
    </View>
  );
}
