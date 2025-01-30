import { Title, Container, Form, ContainerInputs, Input, InputLabel} from "./styles"
// instalar react-route-dom para naver nas outras pastas
// npm install react-route-dom
// site SPA sigle page application

import { useNavigate } from "react-router-dom"

import { useRef } from "react"
import api from "../../services/api"
import DefaultButton from "../../components/Button"
import TopBackGround from "../../components/TopBackGround"

function Home() {
    // get inputs
    const inputName = useRef()
    const inputAge = useRef()
    const inputEmail = useRef()
    const navigate = useNavigate()

    // register button
    //conf api here
    // current.value é oq chega no cosole do browser
    const newUserButton = async () => {
      const data = await api.post('/users', {
        name: inputName.current.value,
        age: parseInt(inputAge.current.value), //parseInt() para enviar como inteiro
        email: inputEmail.current.value
      })
      console.log(data) //gardando responta
    }

  return (
    <>
        <Container>
          
          <TopBackGround /> 
          
          <Form>
            <Title> Cadastro de Usúario </Title>
          </Form>
          
          <ContainerInputs>
            <div>
              <div>
              <InputLabel>Nome<span> * </span></InputLabel>
              <Input type="text" placeholder="Nome do usuário" ref={inputName}></Input>
              </div>
              
              <div>
              <InputLabel>Idade<span> * </span></InputLabel>
              <Input type="number" placeholder="Idade do usuário" ref={inputAge}></Input>
              </div>

              
            </div>
              
            <div>
              <InputLabel>E-mail<span> * </span></InputLabel>  
              <Input type="email" placeholder="Email do usuário" ref={inputEmail}></Input>
            </div>
          </ContainerInputs>

          <DefaultButton type='button' onClick={newUserButton} theme='primary'>Cadastrar Usuário</DefaultButton>

          <DefaultButton type='button' onClick={() => navigate('/usersList')} > Lista de Usuários</DefaultButton>

      </Container>
    </>
  )
}

export default Home

/* 
export default =  exporta um COMPONENT APP so
export ande de cada funcao para exportar cada uma 

*/