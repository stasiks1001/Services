import styled from "styled-components";

export const BackgroundRegister = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  
`;

export const VideoBgRegister = styled.video`

width: 100%;
height: 100%;
-o-object-fit: : cover;
object-fit: cover;
background: #232a34;
`;



export const FormContentRegister = styled.div`
  height: 0 auto;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

export const FormRegister = styled.form`
  max-width: 400px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 80px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  }
`;

export const FormH1Register = styled.h1`
  margin-bottom: 40px;
  color: #fff;
  font-size: 30px;
  font-weight: 900;
  text-align: center;
`;

export const FormButtonRegister1 = styled.button`
  background: #016f71;
  padding: 16px 0;
  margin-bottom: 10px;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`;

export const FormButtonRegister2 = styled.button`
  background: #016f71;
  margin-bottom: 10px;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`;

export const FormButtonRegister3 = styled.button`
  background: #016f71;
  margin-bottom: 10px;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`;

export const FormButtonRegister4 = styled.button`
  background: #016f71;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`;

