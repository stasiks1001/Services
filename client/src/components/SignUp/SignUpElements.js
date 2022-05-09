import styled from "styled-components";
import { Link } from "react-router-dom";

export const BackgroundRegister = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: auto;
  overflow: hidden;
`;

export const VideoBgRegister = styled.video`

width: 100%;
height: 100%;
-o-object-fit: : cover;
object-fit: cover;
background: #232a34;
`;

export const ContainerRegister = styled.div`
  height: auto;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
`;

export const FormWrapRegister = styled.div`
  
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 400) {
    height: 80%;
  }
`;
export const IconRegister = styled(Link)`
  margin-left: 32px;
  margin-top: 32px;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 32px;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;
export const FormContentRegister = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

export const FormRegister = styled.form`
  max-width: 400px;
  height: 100%;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 10px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  }
`;

export const FormH1Register = styled.h1`
  margin-bottom: 10px;
  color: #fff;
  font-size: 10px;
  font-weight: 200;
  text-align: center;
`;

export const FormLabelRegister = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #fff;
`;

export const FormInputRegister = styled.input`
  padding: 16px 16px;
  margin-bottom: 5px;
  border: none;
  border-radius: 4px;
`;

export const FormButtonRegister = styled.button`
  background: #016f71;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`;

export const TextRegister = styled.span`
  text-align: center;
  margin-top: 24px;
  color: #fff;
  font-size: 14px;
`;

