import { useEffect } from 'react'
import api from '../../services/api'

import DefaultButton from "../../components/Button"
import TopBackGround from "../../components/TopBackGround"
import { Page2 } from "./styles"
import { useNavigate } from "react-router-dom"
import { Title } from "./styles"


// get users with hook useEffects
const ListUsers = () => {
    const navigate = useNavigate()
    
    // using useEffect when load pag2
    // Additional useEffect if needed
    useEffect(() => {
        const fetchUsers = async () => {
            const {data} = await api.get('/users');
            console.log(data)
        };
        fetchUsers();
        
    }, []);

    return(
        <Page2> 
        
        <div>            
            <TopBackGround />
   
            <Title> Lista de Usuarios: </Title>
            
            <DefaultButton type='button' onClick={ () => navigate('/')}  > Voltar </DefaultButton>
        </div>

        </Page2>
    )
    
}

export default ListUsers