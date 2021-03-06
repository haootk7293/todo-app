import React, { useEffect, useRef, useState } from 'react'
import { useAuth } from '../../context/UserContext'
import SignIn from './SignIn'
import SignUp from './SignUp'

import {
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams
} from 'react-router-dom'

import {
  RegisterContent,
  RegisterCover,
  RegisterFormContainer,
  ResgisterContainer
} from './style'

import Title from '../../styles/Title'
import dreamTodoLogo from '../../assets/logo.svg'
import ForgotPassword from './ForgotPassword'

const translateTitle: { [x: string]: string } = {
  ['sign-in']: 'Sign In',
  ['sign-up']: 'Sign Up',
  ['forgot-password']: 'Forgot Password'
}

const Register: React.FC = () => {
  // router definitions
  const { isUser } = useAuth()
  const param = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    if (isUser) navigate('/')

    if (!Object.values(param)[0]) {
      navigate('signin')
    }
  }, [isUser, navigate, param])

  const [login, setLogin] = useState<'sign-in' | 'sign-up' | 'forgot-password'>(
    'sign-in'
  )

  useEffect(() => {
    if (login === 'sign-in') {
      navigate('signin')
    } else if (login === 'sign-up') {
      navigate('signup')
    } else {
      navigate('forgot-password')
    }
  }, [login, navigate])

  return (
    <RegisterCover>
      <ResgisterContainer>
        <img src={dreamTodoLogo} alt="dreamTodo logo" width={200} />

        <RegisterFormContainer>
          <RegisterContent>
            <Title size="2.8rem" separator style={{ marginBottom: '20px' }}>
              {translateTitle[login]}
            </Title>

            <Routes>
              <Route path="/signin" element={<SignIn setLogin={setLogin} />} />

              <Route path="/signup" element={<SignUp setLogin={setLogin} />} />

              <Route
                path="/forgot-password"
                element={<ForgotPassword setLogin={setLogin} />}
              />
            </Routes>
          </RegisterContent>
        </RegisterFormContainer>
      </ResgisterContainer>
    </RegisterCover>
  )
}

export default Register
