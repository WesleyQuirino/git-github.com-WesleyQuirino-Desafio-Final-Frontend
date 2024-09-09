import { FiPlus, FiX } from 'react-icons/fi';
import { Container } from './styles';

export function Marker({ isNew = false, value, onClick, ...rest }){
    return (
        <Container className={ isNew ? 'novo' : 'excluir'}>
            <input 
                type="text" 
                value={ value }
                readOnly={ !isNew }
                { ...rest }
            />

            <button 
                type='button' 
                onClick={ onClick } 
            >
                { isNew ? <FiPlus /> : <FiX/>}
            </button>
        </Container>
    )
}