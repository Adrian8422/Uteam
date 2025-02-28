import styled from "styled-components";

const breakpoints = {
  mobile: "480px",
  tablet: "768px",
  laptop: "1024px",
};

export const Container = styled.div`
  max-width: 1200px; 
  margin: 0 auto; 
  padding: 20px; 
  width: 100%; 
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (min-width: ${breakpoints.tablet}) {
    padding: 20px;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 20px;

  @media (min-width: ${breakpoints.tablet}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const BackButton = styled.button`
  background-color: #f0f0f0;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  font-size: 16px;

  @media (min-width: ${breakpoints.tablet}) {
    width: auto;
  }

  &:hover {
    background-color: #e0e0e0;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;

  @media (min-width: ${breakpoints.tablet}) {
    width: auto;
  }
`;

export const ActionButton = styled.button`
  background-color: #e62429;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
  flex: 1;
  font-size: 16px;

  @media (min-width: ${breakpoints.tablet}) {
    flex: 0 1 auto;
    margin-left: 10px;
  }

  &:hover {
    background-color: #c61a1f;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: ${breakpoints.laptop}) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;

  @media (min-width: ${breakpoints.laptop}) {
    flex: 0 0 300px;
  }
`;

export const CharacterImage = styled.img`
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-height: 400px;
  object-fit: cover;
  object-position: center top;

  @media (min-width: ${breakpoints.tablet}) {
    max-height: 500px;
  }

  @media (min-width: ${breakpoints.laptop}) {
    max-height: none;
  }
`;

export const DetailsContainer = styled.div`
  width: 100%;

  @media (min-width: ${breakpoints.laptop}) {
    flex: 1;
    min-width: 0;
  }
`;

export const Title = styled.h2`
  margin-top: 0;
  color: #e62429;
  font-size: 24px;
  word-break: break-word;

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 28px;
  }
`;

export const Description = styled.p`
  line-height: 1.6;
  color: #333;
  font-size: 16px;

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 18px;
  }
`;
