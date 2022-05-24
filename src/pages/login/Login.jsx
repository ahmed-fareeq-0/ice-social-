import { ContainerLogin, LoginBox, LoginButton, LoginDesc, LoginForgot, LoginInput, LoginLeft, LoginLogo, LoginRegisterButton, LoginRight, LoginWrapper} from './styleLogin';

const Login = () => {
  return (
      <>
          <ContainerLogin>
            <LoginWrapper>
                <LoginLeft>
                    <LoginLogo>ICE</LoginLogo>
                    <LoginDesc>Connect with friends and the world around you on Lamasocial.</LoginDesc>
                </LoginLeft>

                <LoginRight>
                    <LoginBox>
                        <LoginInput type="email" placeholder="Email" />
                        <LoginInput type="password" placeholder="Password" />
                        <LoginButton>Login</LoginButton>
                        <LoginForgot>Forgot Password?</LoginForgot>
                        <LoginRegisterButton>Create a New Account</LoginRegisterButton>
                    </LoginBox>
                </LoginRight>
            </LoginWrapper>
          </ContainerLogin>
      </>
  );
}

export default Login;
