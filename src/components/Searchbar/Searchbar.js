import styled from "styled-components";

export const Header = styled.header`
    padding: 28px;
    border-bottom: 5px solid #f8b26a;
`;

export const Form = styled.form`
    display: flex;
    justify-content: center
`;

export const Button = styled.button`
  padding: 20px 36px;
  border-radius: 60px 0 0 60px;
  font-size: 18px;
  border: none;
  background: #abbd81;
  color: #fff;
  transition: 0.3s;

  &:hover {
    background: #849b87;
  }
`;

export const Input = styled.input`
  font-size: 18px;
  color:  #849b87;
  padding: 20px 36px;
  border-radius: 0 60px 60px 0 ;
  margin: 0;
  border: 3px solid #f47e60;

  &:hover, &:focus {
      border: 3px solid #e15b64;

  }

  &::placeholder {
  color:  #abbd81;
  
  }
`;