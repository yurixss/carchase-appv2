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
} from './styles';
import { CarImagePicker } from '../../components/shared/ImagePicker';
import { ControlledTextInput } from '../../components/shared/ControlledTextInput';
import Toast from 'react-native-toast-message';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { RootStackParamList } from '../../routes';
import StepIndicator from 'react-native-step-indicator';
import TextApp from '../../components/pattern/TextApp';

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
    stepStrokeCurrentColor: 'orange',
    separatorFinishedColor: 'orange',
    separatorUnFinishedColor: 'orange',
    stepIndicatorFinishedColor: 'orange',
    stepIndicatorUnFinishedColor: 'orange',
    stepIndicatorCurrentColor: 'orange',
    labelColor: 'black',
    currentStepLabelColor: 'orange',
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

  //step 1
  const details = () => {
    return (
      <>
        <Header>
          <BackButton>
            <Ionicons
              name="arrow-back"
              size={24}
              color={'black'}
              onPress={() => navigation.navigate('Home')}
            />
          </BackButton>

          <Title>Criar ánuncio</Title>

          <ClearButton>
            <Ionicons name="close" size={24} color={'black'} onPress={() => onReset()} />
          </ClearButton>
        </Header>

        <StepIndicator
          stepCount={3}
          customStyles={indicatorStyles}
          currentPosition={0}
          labels={indicatorLabels}
          direction="horizontal"
        />

        <Row>
          <Title>Detalhes do veículo</Title>
        </Row>

        <Body>
          <ControlledTextInput
            control={control}
            label="Modelo do carro"
            name="name"
            rules={{ required: true }}
          />

          <ControlledTextInput
            control={control}
            label="Placa"
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

          <NextButton title="Próximo passo" onPress={() => setStep('photos')}>
            <ButtonText>Próximo</ButtonText>
          </NextButton>
        </Body>
      </>
    );
  };

  //step 2
  const photos = () => {
    return (
      <>
        <Header>
          <BackButton>
            <Ionicons
              name="arrow-back"
              size={24}
              color={'black'}
              onPress={() => setStep('details')}
            />
          </BackButton>

          <Title>Criar ánuncio</Title>

          <ClearButton>
            <Ionicons name="close" size={24} color={'black'} onPress={() => onReset()} />
          </ClearButton>
        </Header>

        <StepIndicator
          stepCount={3}
          customStyles={indicatorStyles}
          currentPosition={1}
          labels={indicatorLabels}
          direction="horizontal"
        />

        <Row>
          <Title>Fotos do seu veículo</Title>
        </Row>

        <BodyRow>
          <CarImagePicker title="Foto da frente" />
          <CarImagePicker title="Foto da traseira" />
          <CarImagePicker title="Foto dos lados" />
          <CarImagePicker title="Foto do interior" />

          <NextButton title="Próximo passo" onPress={() => setStep('review')}>
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
          <BackButton>
            <Ionicons
              name="arrow-back"
              size={24}
              color={'black'}
              onPress={() => setStep('photos')}
            />
          </BackButton>

          <Title>Criar ánuncio</Title>

          <ClearButton>
            <Ionicons name="close" size={24} color={'black'} onPress={() => onReset()} />
          </ClearButton>
        </Header>

        <StepIndicator
          stepCount={3}
          customStyles={indicatorStyles}
          currentPosition={2}
          labels={indicatorLabels}
          direction="horizontal"
        />

        <Row>
          <Title>Fotos do seu veículo</Title>
        </Row>

        <Body>
          <ControlledTextInput
            control={control}
            label="Descreva seu carro, o que ele tem de especial?"
            name="description"
            rules={{ required: true }}
          />
          <ControlledTextInput
            control={control}
            label="Usado ou novo?"
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
            label="Possui riscos?"
            name="price"
            rules={{ required: true }}
          />
          <ControlledTextInput
            control={control}
            label="Possui sinistros?"
            name="price"
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
