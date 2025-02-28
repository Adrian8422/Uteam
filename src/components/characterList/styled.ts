import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  background-color: #f5f5f5;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

export const Card = styled.div`
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const CardContent = styled.div`
  padding: 15px;
`;

export const CardTitle = styled.h3`
  margin: 0 0 10px;
  font-size: 18px;
`;

export const Button = styled.button`
  background-color: #e62429;
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 10px;

  &:hover {
    background-color: #c61a1f;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
  transition: background 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    background: rgba(216, 52, 52, 0.6);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    text-align: center;
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 60px;
  padding: 20px;
  text-align: center;
`;

export const ButtonPag = styled.button`
  background-color: #e62429;
  color: white;
  border: none;
  padding: 15px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #c61a1f;
  }
`;
export const PageNumber = styled.span`
  padding: 10px;
  font-size: 1rem;
  color: black;
`;
