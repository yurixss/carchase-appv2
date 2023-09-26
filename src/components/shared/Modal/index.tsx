import React from 'react';
import { Modal, TouchableOpacity } from 'react-native';
import { Container, Subtitle, Title } from './styles';
import { CheckSquare, Heart, XCircle } from 'phosphor-react-native';

export type ConfirmModalProps = {
  isOpen: boolean;
  title: string;
  subtitle: string;
  onClose?: () => void;
};

export const ConfirmModal = ({ isOpen, title, subtitle, onClose }: ConfirmModalProps) => {
  return (
    <>
      {isOpen && (
        <Modal visible={isOpen}>
          <Container>
            <CheckSquare color="white" weight="fill" size={32} />
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
          </Container>
        </Modal>
      )}
    </>
  );
};
