import React from 'react';
import { Modal } from 'react-native';
import { Container, Subtitle, Title } from './styles';
import { Heart } from 'phosphor-react-native';

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
            <Heart color="#AE2983" weight="fill" size={32} />
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
          </Container>
        </Modal>
      )}
    </>
  );
};
