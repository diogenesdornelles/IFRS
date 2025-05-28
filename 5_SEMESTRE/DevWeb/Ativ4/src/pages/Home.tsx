import React from 'react';
import { Container } from '../styles/Home';

interface HomeProps {
    children: React.ReactNode
}



export default function Home({ children }: HomeProps): React.ReactElement {
    return <Container>{children}</Container>
}