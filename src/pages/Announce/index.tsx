import React, { useState } from 'react';
import { View } from 'react-native';
import { useForm } from 'react-hook-form';
import { api } from '../../services/api';
import {
  BackButton,
  Body,
  ButtonContainer,
  ButtonText,
  ClearButton,
  ConfirmButton,
  Container,
  NextButton,
  Header,
  StepContainer,
  Title,
  StepNumber,
} from './styles';
import { CarImagePicker } from '../../components/shared/ImagePicker';
import { ControlledTextInput } from '../../components/shared/ControlledTextInput';
import Toast from 'react-native-toast-message';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { RootStackParamList } from '../../routes';

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
  const navigation = useNavigation<NavigationProp<RootStackParamList, 'Home'>>();
  const [step, setStep] = useState<'initial' | 'details' | 'photos' | 'review'>('initial');
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
        setStep('initial');
        reset();
        navigation.navigate('Home');
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
  const initial = () => {
    return (
      <>
        <Header>
          <StepContainer>
            <Ionicons name="car-outline" size={29} color="white" />
          </StepContainer>
          <Title>Deseja anunciar seu veículo?</Title>
        </Header>

        <ButtonContainer>
          <ClearButton onPress={() => navigation.navigate('Home')}>
            <ButtonText>Não</ButtonText>
          </ClearButton>

          <NextButton onPress={() => setStep('details')}>
            <ButtonText>Sim</ButtonText>
          </NextButton>
        </ButtonContainer>
      </>
    );
  };

  //step 2
  const details = () => {
    return (
      <>
        <ButtonContainer>
          <ClearButton onPress={onReset}>
            <ButtonText>Limpar Dados</ButtonText>
          </ClearButton>

          <NextButton title="Próximo passo" onPress={() => setStep('photos')}>
            <ButtonText>Próximo passo</ButtonText>
          </NextButton>
        </ButtonContainer>

        <Header>
          <StepContainer>
            <StepNumber>1</StepNumber>
          </StepContainer>
          <Title>Detalhes do seu veículo</Title>
        </Header>

        <Body>
          <ControlledTextInput
            control={control}
            label="Modelo do carro"
            name="name"
            rules={{ required: true }}
          />

          <ControlledTextInput
            control={control}
            label="Marca ou empresa"
            name="model"
            rules={{ required: true }}
          />

          <ControlledTextInput
            control={control}
            label="Ano de fabricação"
            name="year"
            rules={{ required: true }}
            placeholder="Ex: 2021"
          />

          <ControlledTextInput
            control={control}
            label="Cor ou cor predominante?"
            name="color"
            rules={{ required: true }}
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
            label="Preço"
            name="price"
            rules={{ required: true }}
          />
        </Body>
      </>
    );
  };

  //step 3
  const photos = () => {
    return (
      <>
        <ButtonContainer>
          <BackButton onPress={() => setStep('details')}>
            <ButtonText>Voltar</ButtonText>
          </BackButton>
          <NextButton onPress={() => setStep('review')}>
            <ButtonText>Próximo passo</ButtonText>
          </NextButton>
        </ButtonContainer>

        <Header>
          <StepContainer>
            <StepNumber>2</StepNumber>
          </StepContainer>
          <Title>Escolha as melhores fotos</Title>
        </Header>

        <CarImagePicker />
      </>
    );
  };

  //step 4
  const review = () => {
    return (
      <>
        <ButtonContainer>
          <BackButton onPress={() => setStep('photos')}>
            <ButtonText>Voltar</ButtonText>
          </BackButton>

          <ClearButton onPress={onReset}>
            <ButtonText>Limpar Dados</ButtonText>
          </ClearButton>
        </ButtonContainer>

        <Header>
          <StepContainer>
            <StepNumber>3</StepNumber>
          </StepContainer>
          <Title>Detalhes Finais</Title>
        </Header>

        <Body>
          <ControlledTextInput
            control={control}
            label="Possui sinistro?"
            name="price"
            rules={{ required: true }}
          />
          <ControlledTextInput
            control={control}
            label="Possui multas?"
            name="price"
            rules={{ required: true }}
          />
          <ControlledTextInput
            control={control}
            label="Possui débitos?"
            name="price"
            rules={{ required: true }}
          />
          <ControlledTextInput
            control={control}
            label="Possui riscos?"
            name="price"
            rules={{ required: true }}
          />
          <ControlledTextInput
            control={control}
            label="Possui batidas?"
            name="price"
            rules={{ required: true }}
          />
        </Body>

        <ConfirmButton onPress={handleSubmit(onSubmit)} disabled={isLoading}>
          <ButtonText>Finalizar Ánuncio</ButtonText>
        </ConfirmButton>
      </>
    );
  };

  const stack = {
    initial,
    details,
    photos,
    review,
  };

  const drawers = () => {
    if (!step) return <></>;

    return <View>{stack[step]()}</View>;
  };

  return <Container>{drawers()}</Container>;
}
