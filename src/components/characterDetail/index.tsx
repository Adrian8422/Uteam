import React, { useEffect } from 'react';
import { Character } from '../../types';
import {
  Container,
  Header,
  BackButton,
  ActionButton,
  ButtonsContainer, 
  ContentContainer,
  ImageContainer,
  CharacterImage,
  DetailsContainer,
  Title,
  Description
} from './styled';

interface CharacterDetailProps {
  character: Character;
  onBack: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

const CharacterDetail: React.FC<CharacterDetailProps> = ({ 
  character, 
  onBack,
  onEdit,
  onDelete
}) => {
  
  useEffect(() => {
    document.title = `Marvel App - ${character.name}`;
    
    
    return () => {
      document.title = 'Marvel App';
    };
  }, [character]);
  
  
  useEffect(() => {
    console.log('Character detail updated', character.id);
  }, [character]);
  
  return (
    <Container>
      <Header>
        <BackButton onClick={onBack}>← Volver</BackButton>
        <ButtonsContainer>
          <ActionButton onClick={onEdit}>Editar</ActionButton>
          <ActionButton onClick={onDelete}>Eliminar</ActionButton>
        </ButtonsContainer>
      </Header>
      
      <ContentContainer>
        <ImageContainer>
          <CharacterImage 
            src={`${character.thumbnail.path}.${character.thumbnail.extension}`} 
            alt={character.name} 
          />
        </ImageContainer>
        
        <DetailsContainer>
          <Title>{character.name}</Title>
          <Description>
            {character.description || 'No hay descripción disponible para este personaje.'}
          </Description>
        </DetailsContainer>
      </ContentContainer>
    </Container>
  );
};

export default CharacterDetail;