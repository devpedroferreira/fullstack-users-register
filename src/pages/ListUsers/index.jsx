import { useEffect, useState } from 'react'
import api from '../../services/api'

import DefaultButton from "../../components/Button"
import TopBackGround from "../../components/TopBackGround"

import { 
    Container,
    Title,
    ContainerUsers,
    AvatarUser,
    CardUsers,
    TrashIcon
 } from "./styles"
 
import TrashIcone from '../../assets/trash.svg'

import { data, useNavigate } from "react-router-dom"
import { use } from 'react'

// https://avatar.iran.liara.run/public API random avatar

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

    const deleteUser = async (id) => {
        await api.delete(`/users/${id}`)
        setUsersFromApi(usersFromApi.filter(user => user.id !== id)) // se o usuario for delete f5 na pag
    }

    return(
    <Container> 
        
        <div>            
            <TopBackGround />
   
            <Title> Lista de Usuarios: </Title>
            
            <ContainerUsers>
                {usersFromApi.map((user) => (

                        <CardUsers>
                            <AvatarUser src={`https://avatar.iran.liara.run/public?username=${user.id}`} />
                            <div key={user.id} >

                                <h4> {user.name}</h4>
                                <p>Idade:{user.age}</p>
                                <p>Email:{user.email}</p>
                                
                            </div>
                            <TrashIcon src={TrashIcone} alt='icone-delete-usuario' onClick={()=> deleteUser(user.id)} />
                            
                        </CardUsers>
                ))}
            </ContainerUsers>

            <DefaultButton type='button' onClick={ () => navigate('/')}  > Voltar </DefaultButton>
        </div>

    </Container>
    )
    
}

export default ListUsers