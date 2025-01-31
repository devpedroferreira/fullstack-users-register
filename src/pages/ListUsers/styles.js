import styled from "styled-components";


// component container
export const Container = styled.div`
    background-color:rgb(10, 1, 78);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 20px;
    height: auto; /* Set height to auto for dynamic sizing */
    min-height: 100vh; /* Ensure it takes at least the full viewport height */
`

export const Title = styled.h2`
    color:#fff;
    font-weight: 450;
     
    font-size: 32px;
    border: 2px solid #777df3f0;
    background: linear-gradient(to left,rgb(255, 104, 66), #7f38dd);
    border-radius: 10px;
    text-align: center;
    margin-top: 60px;
    margin-bottom: 20px;
    
`
export const ContainerUsers = styled.div` 
    display: grid;
    grid-template-columns: 1fr 1fr  ; // uma francao para cada column
    gap: 10px;
    // responsive
    @media (max-width: 700px) {
        grid-template-columns: 1fr;
    }

`

export const AvatarUser = styled.img`
    height:50px;

`

export const CardUsers = styled.div` 
color:#fff;
font-size: 15px;
border: 1px solid #d5d5d5d5;
border-radius: 5px;
margin-bottom: 5px;
display: flex;
justify-content: space-between; // lixeira vai para o lado
align-items: center;
max-width: 700px;


`

export const TrashIcon = styled.img` 
cursor: pointer;
padding-top:5px;
display:flex;
justify-content: end;

`