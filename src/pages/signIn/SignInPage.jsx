import { useState } from "react";
import styled from "styled-components";
import { DefaultDiv, RowDiv } from "../../style/CommonStyle";
import { ReactComponent as Reset } from "../../assets/Reset.svg";
import { signInAPI } from "../../api/AuthAPI";

const SignInPage = () => {
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");

  const isButtonDisabled = userId === "" || userPw === "";

  const signIn = async () => {
    try {
      const response = await signInAPI(userId, userPw);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <LoginWrapper>
      <LoginTitle>로그인</LoginTitle>
      <InputWrapper>
        <LoginInput
          type="text"
          placeholder="아이디"
          value={userId}
          onChange={(e) => {
            setUserId(e.target.value);
          }}
        />
        <ResetIcon onClick={() => setUserId("")} />
      </InputWrapper>
      <InputWrapper>
        <LoginInput
          type="password"
          placeholder="비밀번호"
          value={userPw}
          onChange={(e) => {
            setUserPw(e.target.value);
          }}
        />
        <ResetIcon onClick={() => setUserPw("")} />
      </InputWrapper>
      <LoginButton disabled={isButtonDisabled} onClick={signIn}>
        로그인
      </LoginButton>
    </LoginWrapper>
  );
};

const LoginWrapper = styled(DefaultDiv)`
  justify-content: flex-start;
`;

const LoginTitle = styled.div`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 46px;
  padding-top: 113px;
`;

const InputWrapper = styled(RowDiv)`
  position: relative;
  justify-content: flex-end;
`;

const LoginInput = styled.input`
  width: 306px;
  height: 58px;
  border-radius: 12px;
  border: 1px solid #bababa;
  font-size: 15px;
  font-weight: 400;
  padding-left: 15px;
  margin-bottom: 11px;

  &:focus {
    outline: none;
    border-color: #95c25c;
  }
`;

const LoginButton = styled.div`
  width: 324px;
  height: 41px;
  border-radius: 20px;
  border: 1px solid #bababa;
  font-size: 15px;
  font-weight: 400;
  color: white;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  background-color: ${(props) => (props.disabled ? "#bababa" : "#95c25c")};
`;

const ResetIcon = styled(Reset)`
  padding-right: 20px;
  padding-bottom: 10px;
  position: absolute;
  z-index: 1;
  cursor: pointer;
`;

export default SignInPage;
