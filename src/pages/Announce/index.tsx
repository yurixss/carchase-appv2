import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";
import { useForm, Controller} from "react-hook-form";
import TextApp from "../../components/pattern/TextApp";
import { api } from "../../services/api";
import HeaderApp from "../../components/pattern/HeaderApp";
import { styles } from "./styles";
import { CarImagePicker } from "../../components/shared/ImagePicker";
import { ControlledTextInput } from "../../components/shared/ControlledTextInput";

type DataForm = {
  name: string;
  model: string;
  year: string;
  color: string;
  price: string;
  km: string;
  description: string;
}

export default function Announce(): JSX.Element {
  const [isLoading, setIsLoading] = useState(false);
  const { 
    register, 
    setValue, 
    handleSubmit, 
    control, 
    reset, 
    formState: { errors } 
  } = useForm<DataForm>({
    defaultValues: {
      name: '',
      model: '',
      year: '',
      color: '',
      price: '',
      km: '',
      description: '',
    }
  });

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

      <HeaderApp >Criar Anuncio</HeaderApp>
      <CarImagePicker/>

      {/* <TextApp style={styles.label}>Nome do Modelo:</TextApp> */}
      <ControlledTextInput
        control={control}
        label="Nome do carro"
        name="name"
        rules={{ required: 'Nome do carro obrigatório' }}
        placeholder="Nome do carro"
        style={styles.input}
      />

      <TextApp style={styles.label}>Marca:</TextApp>
      <ControlledTextInput
        control={control}
        name="model"
        rules={{ required: true }}
        style={styles.input}
      />

      <TextApp style={styles.label}>Ano de fabricação:</TextApp>
      <ControlledTextInput
        control={control}
        name="year"
        rules={{ required: true }}
        style={styles.input}
      />

      <TextApp style={styles.label}>Kilomentragem:</TextApp>
      <ControlledTextInput
        control={control}
        name="km"
        rules={{ required: true }}
        style={styles.input}
      />

      <TextApp style={styles.label}>Cor</TextApp>
      <ControlledTextInput
        control={control}
        name="color"
        rules={{ required: true }}
        style={styles.input}
      />

      <TextApp style={styles.label}>Preço:</TextApp>
      <ControlledTextInput
        control={control}
        name="price"
        rules={{ required: true }}
        style={styles.input}
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
