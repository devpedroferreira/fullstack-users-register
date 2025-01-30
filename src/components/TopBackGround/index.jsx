
import UsersImagem from '../../assets/users.png'
import { BackGround } from './styles'

const TopBackGround = () => {

    return(
        <div className='divTopBackGround'>
        <BackGround>
            <img src={UsersImagem} alt="imagem-usuarios"/>
        </BackGround>
        </div>
    )

}

export default TopBackGround