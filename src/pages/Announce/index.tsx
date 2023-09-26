import React, { useState } from 'react';
import { View } from 'react-native';
import { set, useForm } from 'react-hook-form';
import { api } from '../../services/api';
import {
  BackButton,
  Body,
  ButtonText,
  ConfirmButton,
  Container,
  NextButton,
  Header,
  Title,
  Row,
  ClearButton,
  ImageInputContainer,
  BodyRow,
  Subtitle,
} from './styles';
import { CarImagePicker } from '../../components/shared/ImagePicker';
import { ControlledTextInput } from '../../components/shared/ControlledTextInput';
import Toast from 'react-native-toast-message';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { RootStackParamList } from '../../routes';
import StepIndicator from 'react-native-step-indicator';
import TextApp from '../../components/pattern/TextApp';
import { ArrowBendUpLeft, Eraser } from 'phosphor-react-native';
import { ConfirmModal } from '../../components/shared/Modal';

type DataForm = {
  name: string;
  model: string;
  year: string;
  color: string;
  price: string;
  km: string;
  description: string;
  status: string;
  photos: string[];
  is_new: boolean;
};

export default function Announce(): JSX.Element {
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation<NavigationProp<RootStackParamList, 'Home'>>();
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  const indicatorLabels = ['Detalhes', 'Fotos', 'Revisão'];

  const indicatorStyles = {
    stepIndicatorSize: 20,
    stepStrokeCurrentColor: '#b6d89c',
    separatorFinishedColor: '#b6d89c',
    separatorUnFinishedColor: '#b6d89c',
    stepIndicatorFinishedColor: '#b6d89c',
    stepIndicatorUnFinishedColor: '#b6d89c',
    stepIndicatorCurrentColor: '#b6d89c',
    labelColor: 'black',
    currentStepLabelColor: '#b6d89c',
    stepIndicatorLabelCurrentColor: 'white',
  };

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
        setStep('details');
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

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  //step 1
  const details = () => {
    return (
      <>
        <Header>
          <BackButton onPress={() => navigation.navigate('Home')}>
            <ArrowBendUpLeft color="white" weight="fill" size={24} />
          </BackButton>

          <Title>Criar ánuncio</Title>

          <ClearButton onPress={openModal}>
            <Eraser color="white" weight="fill" size={24} />
          </ClearButton>
        </Header>

        <StepIndicator
          stepCount={3}
          customStyles={indicatorStyles}
          currentPosition={0}
          labels={indicatorLabels}
          direction="horizontal"
        />

        <Subtitle>Detalhes do veículo</Subtitle>

        <Body>
          <ControlledTextInput
            control={control}
            label="Modelo do carro"
            name="name"
            rules={{ required: true }}
            placeholder="Ex: Argo"
          />

          <ControlledTextInput
            control={control}
            label="Placa"
            name="name"
            rules={{ required: true }}
            placeholder="Ex: ABC-1234"
          />

          <ControlledTextInput
            control={control}
            label="Marca ou empresa"
            name="model"
            rules={{ required: true }}
            placeholder="Ex: Fiat"
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
            label="Preço"
            name="price"
            rules={{ required: true }}
            placeholder="Ex: R$89,000"
          />

          <NextButton onPress={() => setStep('photos')}>
            <ButtonText>Próximo passo</ButtonText>
          </NextButton>

          <ConfirmModal
            isOpen={isModalOpen}
            title="Confirmação"
            subtitle="Você tem certeza de que deseja limpar?"
            onClose={closeModal}
          />
        </Body>
      </>
    );
  };

  //step 2
  const photos = () => {
    return (
      <>
        <Header>
          <BackButton onPress={() => setStep('details')}>
            <ArrowBendUpLeft color="white" weight="fill" size={24} />
          </BackButton>

          <Title>Criar ánuncio</Title>

          <ClearButton onPress={() => onReset()}>
            <Eraser color="white" weight="fill" size={24} />
          </ClearButton>
        </Header>

        <StepIndicator
          stepCount={3}
          customStyles={indicatorStyles}
          currentPosition={1}
          labels={indicatorLabels}
          direction="horizontal"
        />

        <Subtitle>Fotos do seu veículo</Subtitle>

        <BodyRow>
          <CarImagePicker title="Foto da frente" />
          <CarImagePicker title="Foto da traseira" />
          <CarImagePicker title="Foto dos lados" />
          <CarImagePicker title="Foto do interior" />

          <NextButton onPress={() => setStep('review')}>
            <ButtonText>Próximo</ButtonText>
          </NextButton>
        </BodyRow>
      </>
    );
  };

  //step 3
  const review = () => {
    return (
      <>
        <Header>
          <BackButton onPress={() => setStep('photos')}>
            <ArrowBendUpLeft color="white" weight="fill" size={24} />
          </BackButton>

          <Title>Criar ánuncio</Title>

          <ClearButton onPress={() => onReset()}>
            <Eraser color="white" weight="fill" size={24} />
          </ClearButton>
        </Header>

        <StepIndicator
          stepCount={3}
          customStyles={indicatorStyles}
          currentPosition={2}
          labels={indicatorLabels}
          direction="horizontal"
        />

        <Subtitle>Detalhes finais </Subtitle>

        <Body>
          <ControlledTextInput
            control={control}
            label="Descreva seu carro, o que ele tem de especial?"
            name="description"
            rules={{ required: true }}
          />

          <ConfirmButton onPress={handleSubmit(onSubmit)} disabled={isLoading}>
            <ButtonText>Finalizar Ánuncio</ButtonText>
          </ConfirmButton>
        </Body>
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

  return <Container>{drawers()}</Container>;
}
