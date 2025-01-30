import { useEffect, useState } from 'react'
import api from '../../services/api'

import DefaultButton from "../../components/Button"
import TopBackGround from "../../components/TopBackGround"
import { Container } from "./styles"
import { data, useNavigate } from "react-router-dom"
import { Title } from "./styles"


// get users with hook useEffects
const ListUsers = () => {
    const navigate = useNavigate()
    const [ usersFromApi, setUsersFromApi ] = useState([])

    // using useEffect when load pag2
    // Additional useEffect if needed
    useEffect(() => {
        const fetchUsers = async () => {
            const {data} = await api.get('/users');
            
            setUsersFromApi(data)
        };
        fetchUsers();
        
    }, []);

    return(
    <Container> 
        
        <div>            
            <TopBackGround />
   
            <Title> Lista de Usuarios: </Title>
            
            <ContainerUsers>
                {usersFromApi.map((user) => (

                        <CardUsers>
                            <div key={user.id} >
                                <p> <br /> </p>
                                <p> Nome:  {user.name}</p>
                                <p> Idade: {user.age}</p>
                                <p> Email: {user.email}</p>
                                <p> <br /></p>
                            </div>
                            <TrashIcon> Deletar Usuário </TrashIcon>
                        </CardUsers>
                ))}
            </ContainerUsers>

            <DefaultButton type='button' onClick={ () => navigate('/')}  > Voltar </DefaultButton>
        </div>

    </Container>
    )
    
}

export default ListUsers