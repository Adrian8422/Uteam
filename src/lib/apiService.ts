import axios from 'axios';
import { Character, CharacterFormData } from '../types';
import md5 from 'md5';

const baseURL = 'http://gateway.marvel.com/v1/public';
const publicKey = process.env.REACT_APP_MARVEL_API_PUBLIC_KEY || '';
const privateKey = process.env.REACT_APP_MARVEL_API_PRIVATE_KEY || '';

// Genero hash md5 requerido por la API de Marvel
const generateHash = (timestamp: number) => {
    return md5(timestamp + privateKey + publicKey);
  };

let localCharacters: Character[] = [];

export const marvelApi = {
  
  getCharacters: async (): Promise<Character[]> => {
    try {
      const timestamp = new Date().getTime();
      const hash = generateHash(timestamp);
      
      const response = await axios.get(`${baseURL}/characters`, {
        params: {
          apikey: publicKey,
          ts: timestamp,
          hash: hash,
          limit: 20
        }
      });
      
      
      localCharacters = response.data.data.results;
      return localCharacters;
    } catch (error) {
      console.error("Error fetching characters:", error);
      return [];
    }
  },
  
  
  getCharacterById: async (id: number): Promise<Character | null> => {
    try {
      
      const localCharacter = localCharacters.find(char => char.id === id);
      if (localCharacter) return localCharacter;
      
      
      const timestamp = new Date().getTime();
      const hash = generateHash(timestamp);
      
      const response = await axios.get(`${baseURL}/characters/${id}`, {
        params: {
          apikey: publicKey,
          ts: timestamp,
          hash: hash
        }
      });
      
      return response.data.data.results[0] || null;
    } catch (error) {
      console.error(`Error fetching character with ID ${id}:`, error);
      return null;
    }
  },
  
  
  createCharacter: async (characterData: CharacterFormData): Promise<Character> => {
    const newCharacter: Character = {
      id: Date.now(), 
      name: characterData.name,
      description: characterData.description,
      thumbnail: {
        path: characterData.thumbnailUrl.split('.').slice(0, -1).join('.'), 
        extension: characterData.thumbnailUrl.split('.').pop() || 'jpg' 
      }
    };
    
    localCharacters.push(newCharacter);
    return newCharacter;
  },
  
  
  updateCharacter: async (id: number, characterData: CharacterFormData): Promise<Character | null> => {
    const index = localCharacters.findIndex(char => char.id === id);
    
    if (index === -1) return null;
    
    const updatedCharacter: Character = {
      ...localCharacters[index],
      name: characterData.name,
      description: characterData.description,
      thumbnail: {
        path: characterData.thumbnailUrl.split('.').slice(0, -1).join('.'),
        extension: characterData.thumbnailUrl.split('.').pop() || 'jpg'
      }
    };
    
    localCharacters[index] = updatedCharacter;
    return updatedCharacter;
  },
  
  
  deleteCharacter: async (id: number): Promise<boolean> => {
    const initialLength = localCharacters.length;
    localCharacters = localCharacters.filter(char => char.id !== id);
    return initialLength > localCharacters.length;
  }
};