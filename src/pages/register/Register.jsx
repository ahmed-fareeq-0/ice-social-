import { ContainerLogin, LoginBox, LoginButton, LoginDesc, LoginInput, LoginLeft, LoginLogo, LoginRegisterButton, LoginRight, LoginWrapper} from './styleRegister';

const Register = () => {

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
                        <LoginInput type="email" placeholder="Username" />
                        <LoginInput type="email" placeholder="Email" />
                        <LoginInput type="password" placeholder="Password" />
                        <LoginInput type="email" placeholder="Password Again" />
                        <LoginButton>Sign up</LoginButton>
                        <LoginRegisterButton>Log into Account</LoginRegisterButton>
                        
                    </LoginBox>
                </LoginRight>
            </LoginWrapper>
          </ContainerLogin>
      </>
  );
}

export default Register;
