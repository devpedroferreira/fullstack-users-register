import {Button} from './styles'

// ...NOMEVAR é chamdo de SPREAD OPERATOR salva o restante na var
const DefaultButton = ({ children, theme, ...props }) => {
    
    // console.log(info aqui info na function para ver no browser)
    console.log(props)
    return(
        <Button { ...props } theme={theme}> { children } </Button>
    )

}


export default DefaultButton