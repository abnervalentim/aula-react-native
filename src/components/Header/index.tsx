import { Container, Logo, BackIcon, BackButton } from "./styles";

import logoImg from '@assets/logo.png';

type Props = {
    showBackbutton?: boolean;
}

export function Header({ showBackbutton = false }: Props ) {
    return(
        <Container>
        {
            showBackbutton &&
            <BackButton>
            <BackIcon/>
            </BackButton>
        }
            <Logo source={logoImg}/>
        </Container>

    );
}