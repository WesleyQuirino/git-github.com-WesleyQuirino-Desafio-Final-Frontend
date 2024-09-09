import { Container } from "./style";

export function ButtonIcon({ title, fav, icon: Icon, size=20, ...rest}){
    return(
        <Container type="button"
            $fav={fav}
            {...rest}
        >
            {Icon && <Icon size={size}/>}
            {title}
        </Container>
    )
}