import { Container } from './styles';

export function Tags({ title, pink = false, isSelected,...rest}){
    return (
        <Container 
            $pink ={ pink }
            { ...rest }
            type='button'
            value={ title }
        >
            { title }
        </Container>
    )
}