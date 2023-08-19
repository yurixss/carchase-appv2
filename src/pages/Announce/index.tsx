import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import { useForm, Controller} from "react-hook-form";
import TextApp from "../../components/pattern/TextApp";
import { api } from "../../services/api";
import HeaderApp from "../../components/pattern/HeaderApp";
import { styles } from "./styles";
import { CarImagePicker } from "../../components/shared/ImagePicker";
import { ControlledTextInput } from "../../components/shared/ControlledTextInput";
import { CardSkeleton } from "../CarDetails/CardSkeleton";

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

      <ControlledTextInput
        control={control}
        label="Nome do carro"
        name="name"
        rules={{ required: true }}
      />

      <ControlledTextInput
        control={control}
        label="Modelo"
        name="model"
        rules={{ required: true }}
      />

      <ControlledTextInput
        control={control}
        label="Ano"
        name="year"
        rules={{ required: true }}
        placeholder="Ex: 2021"
      />

      <ControlledTextInput
        control={control}
        label="Kilomentragem"
        name="km"
        rules={{ required: true }}
        placeholder="Ex: 12.943"
      />

      <ControlledTextInput
        control={control}
        label='Cor'
        name="color"
        rules={{ required: true }}
      />

      <ControlledTextInput
        control={control}
        label="Preço"
        name="price"
        rules={{ required: true }}
      />

      <CarImagePicker/>


        <Button
          title="Enviar Anúncio"
          onPress={handleSubmit(onSubmit)}
          disabled={isLoading}
        />

      <View style={styles.button}>
        <Button
          title="Limpar Campos"
          onPress={onReset}
        />
      </View>
    </View>
  );
}
