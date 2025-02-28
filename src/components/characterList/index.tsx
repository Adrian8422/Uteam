import React, { useState, useEffect } from "react";
import { Character } from "../../types";
import {
  Container,
  Grid,
  Card,
  CardImage,
  CardContent,
  CardTitle,
  Button,
  ContainerButton,
  ButtonPag,
  HeaderContainer,
  PageNumber,
} from "./styled";
import { marvelApi } from "../../lib/apiService";
import CharacterDetail from "../characterDetail";
import CharacterForm from "../characterForm";

const CharacterList: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(
    null
  );
  const [showForm, setShowForm] = useState(false);
  const [editingCharacter, setEditingCharacter] = useState<Character | null>(
    null
  );
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const limit = 14;

  useEffect(() => {
    fetchCharacters(page);
  }, [page]);

  const fetchCharacters = async (page: number) => {
    setLoading(true);
    try {
      const data = await marvelApi.getCharacters(page, limit);
      setCharacters(data);
    } catch (error) {
      console.error("Error loading characters:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  const handleCharacterClick = (character: Character) => {
    setSelectedCharacter(character);
    setEditingCharacter(null);
    setShowForm(false);
  };

  const handleCreateClick = () => {
    setShowForm(true);
    setSelectedCharacter(null);
    setEditingCharacter(null);
  };

  const handleEditClick = (character: Character, e: React.MouseEvent) => {
    e.stopPropagation();
    setEditingCharacter(character);
    setSelectedCharacter(null);
    setShowForm(true);
  };

  const handleDeleteClick = async (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    if (window.confirm("¿Estás seguro que deseas eliminar este personaje?")) {
      try {
        const success = await marvelApi.deleteCharacter(id);
        if (success) {
          setCharacters(characters.filter((char) => char.id !== id));
          if (selectedCharacter?.id === id) {
            setSelectedCharacter(null);
          }
        }
      } catch (error) {
        console.error("Error deleting character:", error);
      }
    }
  };

  const handleFormSubmit = async (characterData: any, id?: number) => {
    try {
      if (id) {
        const updatedCharacter = await marvelApi.updateCharacter(
          id,
          characterData
        );
        if (updatedCharacter) {
          setCharacters(
            characters.map((char) => (char.id === id ? updatedCharacter : char))
          );
        }
      } else {
        const newCharacter = await marvelApi.createCharacter(characterData);
        setCharacters([...characters, newCharacter]);
      }
      setShowForm(false);
      setEditingCharacter(null);
    } catch (error) {
      console.error("Error saving character:", error);
    }
  };

  const handleFormCancel = () => {
    setShowForm(false);
    setEditingCharacter(null);
  };

  if (loading) {
    return <Container>Cargando personajes...</Container>;
  }

  return (
    <Container>
      <HeaderContainer>
        <h1>Personajes de Marvel</h1>
        <Button onClick={handleCreateClick}>Crear Personaje</Button>
      </HeaderContainer>

      {showForm ? (
        <CharacterForm
          character={editingCharacter}
          onSubmit={handleFormSubmit}
          onCancel={handleFormCancel}
        />
      ) : selectedCharacter ? (
        <CharacterDetail
          character={selectedCharacter}
          onBack={() => setSelectedCharacter(null)}
          onEdit={() => {
            setEditingCharacter(selectedCharacter);
            setSelectedCharacter(null);
            setShowForm(true);
          }}
          onDelete={async () => {
            if (
              window.confirm(
                "¿Estás seguro que deseas eliminar este personaje?"
              )
            ) {
              try {
                const success = await marvelApi.deleteCharacter(
                  selectedCharacter.id
                );
                if (success) {
                  setCharacters(
                    characters.filter(
                      (char) => char.id !== selectedCharacter.id
                    )
                  );
                  setSelectedCharacter(null);
                }
              } catch (error) {
                console.error("Error deleting character:", error);
              }
            }
          }}
        />
      ) : (
        <Grid>
          {characters.map((character) => (
            <Card
              key={character.id}
              onClick={() => handleCharacterClick(character)}
            >
              <CardImage
                src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                alt={character.name}
              />
              <CardContent>
                <CardTitle>{character.name}</CardTitle>
                <Button onClick={(e) => handleEditClick(character, e)}>
                  Editar
                </Button>
                <Button onClick={(e) => handleDeleteClick(character.id, e)}>
                  Eliminar
                </Button>
              </CardContent>
            </Card>
          ))}
        </Grid>
      )}
      {!showForm && !selectedCharacter && (
        <ContainerButton>
          {page === 1 ? null : (
            <ButtonPag onClick={handlePrevPage}>Anterior</ButtonPag>
          )}
          <PageNumber>Página {page}</PageNumber>
          <ButtonPag
            onClick={handleNextPage}
            disabled={characters.length < limit}
          >
            Siguiente
          </ButtonPag>
        </ContainerButton>
      )}
    </Container>
  );
};

export default CharacterList;
