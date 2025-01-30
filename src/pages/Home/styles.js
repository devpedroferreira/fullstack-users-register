import styled from 'styled-components'


// component container
export const Container = styled.div`
    background-color:rgb(10, 1, 78);
    display : flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 20px;
    height: 100vh;
    gap: 15px;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    max-width: 500px;

`
// component para h2 title
export const Title = styled.h2`
    color:#fff;
    font-weight: 450;
     
    font-size: 32px;
    border: 2px solid #777df3f0;
    background: linear-gradient(to left,rgb(255, 104, 66), #7f38dd);
    border-radius: 10px;
    text-align: center;
`

export const ContainerInputs = styled.div`


`

export const Input = styled.input`
    border-radius:10px;
    border: 1px solid #d2d2d2;
    background-color: #fff;
    padding: 10px 40px;
    width: 100%;
    

`

export const InputLabel = styled.label`
    color: #fff;
    font-size: 14px;
    

    span{
        color: red;
        font-weight: bold;
    }

`
