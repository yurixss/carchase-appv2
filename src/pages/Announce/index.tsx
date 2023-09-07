import React, { useMemo, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { api } from '../../services/api';
import HeaderApp from '../../components/pattern/HeaderApp';
import { styles } from './styles';
import { CarImagePicker } from '../../components/shared/ImagePicker';
import { ControlledTextInput } from '../../components/shared/ControlledTextInput';
import Toast from 'react-native-toast-message';
import { useNavigation } from '@react-navigation/native';

type DataForm = {
  name: string;
  model: string;
  year: string;
  color: string;
  price: string;
  km: string;
  description: string;
};

export default function Announce(): JSX.Element {
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();
  const [step, setStep] = useState<'details' | 'photos' | 'review'>('details');
  const {
    register,
    setValue,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<DataForm>({
    defaultValues: {
      name: '',
      model: '',
      year: '',
      color: '',
      price: '',
      km: '',
      description: '',
    },
  });

  const onSubmit = (data) => {
    setIsLoading(true);

    api
      .post('cars/store', data)
      .then((response) => {
        Toast.show({
          type: 'success',
          text1: 'Carro anunciado com sucesso!',
          text2: 'Seu anúncio já está disponível para visualização.',
        });
        console.warn(response);
        reset();
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const onReset = () => {
    reset();
  };

  //step 1
  const details = () => {
    return (
      <>
        <HeaderApp>Detalhes do seu veículo</HeaderApp>

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

        <View style={styles.button}>
          <Button title="Limpar Campos" onPress={onReset} />
        </View>

        <View style={styles.button}>
          <Button title="Próximo passo" onPress={() => setStep('photos')} />
        </View>
      </>
    );
  };

  //step 2
  const photos = () => {
    return (
      <>
        <HeaderApp>Escolha as melhores fotos</HeaderApp>
        <CarImagePicker />
        <View style={styles.button}>
          <Button title="Próximo passo" onPress={() => setStep('review')} />
        </View>
        <View style={styles.button}>
          <Button title="Voltar" onPress={() => setStep('details')} />
        </View>
      </>
    );
  };

  //step 3
  const review = () => {
    return (
      <>
        <ControlledTextInput
          control={control}
          label="Cor"
          name="color"
          rules={{ required: true }}
        />

        <ControlledTextInput
          control={control}
          label="Preço"
          name="price"
          rules={{ required: true }}
        />

        <View style={styles.button}>
          <Button title="Voltar" onPress={() => setStep('photos')} />
        </View>

        <Button title="Enviar Anúncio" onPress={handleSubmit(onSubmit)} disabled={isLoading} />

        <View style={styles.button}>
          <Button title="Limpar Campos" onPress={onReset} />
        </View>
      </>
    );
  };

  const stack = {
    details,
    photos,
    review,
  };

  const drawers = () => {
    if (!step) return <></>;

    return <View>{stack[step]()}</View>;
  };

  return <View style={styles.container}>{drawers()}</View>;
}
