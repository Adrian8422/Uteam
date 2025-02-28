import styled from "styled-components";

export const FormContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  width: 100%;
  background-color: white;

  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

export const FormTitle = styled.h2`
  margin-top: 0;
  color: #e62429;
  margin-bottom: 20px;
`;

export const FormGroup = styled.div`
  margin-bottom: 15px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  min-height: 100px;
  resize: vertical;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
`;

export const SubmitButton = styled(Button)`
  background-color: #e62429;
  color: white;

  &:hover {
    background-color: #c61a1f;
  }
`;

export const CancelButton = styled(Button)`
  background-color: #f0f0f0;

  &:hover {
    background-color: #e0e0e0;
  }
`;

export const ErrorMessage = styled.div`
  color: #e62429;
  font-size: 14px;
  margin-top: 5px;
`;
