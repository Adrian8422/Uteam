export interface Character {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

export interface CharacterFormData {
  name: string;
  description: string;
  thumbnailUrl: string;
}
