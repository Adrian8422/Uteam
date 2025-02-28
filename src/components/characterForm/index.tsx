import React, { useState, useEffect } from 'react';
import { Character, CharacterFormData } from '../../types';
import {
  FormContainer,
  FormTitle,
  FormGroup,
  Label,
  Input,
  TextArea,
  ButtonGroup,
  SubmitButton,
  CancelButton,
  ErrorMessage
} from './styled';

interface CharacterFormProps {
  character?: Character | null;
  onSubmit: (data: CharacterFormData, id?: number) => void;
  onCancel: () => void;
}

const CharacterForm: React.FC<CharacterFormProps> = ({ 
  character, 
  onSubmit, 
  onCancel 
}) => {
  //
  const [formData, setFormData] = useState<CharacterFormData>({
    name: '',
    description: '',
    thumbnailUrl: ''
  });
  
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  
  
  useEffect(() => {
    
    if (character) {
      setFormData({
        name: character.name,
        description: character.description,
        thumbnailUrl: `${character.thumbnail.path}.${character.thumbnail.extension}`
      });
    } else {
      
      setFormData({
        name: '',
        description: '',
        thumbnailUrl: ''
      });
    }
  }, [character]);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };
  
  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es obligatorio';
    }
    
    
    if (!formData.thumbnailUrl.trim()) {
      newErrors.thumbnailUrl = 'La URL de la imagen es obligatoria';
    } else {
      const validExtensions = ['jpg', 'jpeg', 'png', 'gif'];
      const urlExtension = formData.thumbnailUrl.split('.').pop() || '';
      if (!validExtensions.includes(urlExtension.toLowerCase())) {
        newErrors.thumbnailUrl = 'La URL debe terminar con una extensión de imagen válida (jpg, jpeg, png, gif)';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      onSubmit(formData, character?.id);
    }
  };
  
  return (
    <FormContainer>
      <FormTitle>{character ? 'Editar Personaje' : 'Crear Personaje'}</FormTitle>
      
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="name">Nombre</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
        </FormGroup>
        
        <FormGroup>
          <Label htmlFor="description">Descripción</Label>
          <TextArea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </FormGroup>
        
        <FormGroup>
          <Label htmlFor="thumbnailUrl">URL de Imagen</Label>
          <Input
            type="text"
            id="thumbnailUrl"
            name="thumbnailUrl"
            value={formData.thumbnailUrl}
            onChange={handleChange}
            placeholder="https://ejemplo.com/imagen.jpg"
          />
          {errors.thumbnailUrl && <ErrorMessage>{errors.thumbnailUrl}</ErrorMessage>}
        </FormGroup>
        
        <ButtonGroup>
          <CancelButton type="button" onClick={onCancel}>
            Cancelar
          </CancelButton>
          <SubmitButton type="submit">
            {character ? 'Actualizar' : 'Crear'}
          </SubmitButton>
        </ButtonGroup>
      </form>
    </FormContainer>
  );
};

export default CharacterForm;