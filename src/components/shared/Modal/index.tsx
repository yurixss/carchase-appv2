import React from 'react';
import { Modal, TouchableOpacity } from 'react-native';
import {
  ButtonText,
  ButtonsContainer,
  CancelButton,
  ConfirmButton,
  ContainerConfirmButton,
  IconContainer,
  Subtitle,
  TextsContainer,
  Title,
} from './styles';
import { XCircle } from 'phosphor-react-native';

export type ConfirmModalProps = {
  isOpen: boolean;
  title: string;
  subtitle: string;
  onConfirm: () => void;
  onCancel: () => void;
};

export const ConfirmModal = ({
  isOpen,
  title,
  subtitle,
  onCancel,
  onConfirm,
}: ConfirmModalProps) => {
  return (
    <>
      {isOpen && (
        <Modal visible={isOpen}>
          <ContainerConfirmButton initial="closed" animate="open" exit="closed">
            <IconContainer>
              <XCircle size={70} color={'red'} />
            </IconContainer>
            <TextsContainer>
              <Title>{title}</Title>
              <Subtitle>{subtitle}</Subtitle>
            </TextsContainer>
            <ButtonsContainer>
              <ConfirmButton onPress={onConfirm}>
                <ButtonText>Confirmar</ButtonText>
              </ConfirmButton>
              <CancelButton onPress={onCancel}>
                <ButtonText>Voltar</ButtonText>
              </CancelButton>
            </ButtonsContainer>
          </ContainerConfirmButton>
        </Modal>
      )}
    </>
  );
};
