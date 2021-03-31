import React from 'react';
import styled from 'styled-components';
import Product from './Product';

function Home() {
    return (
        <Container>
            <Banner>

            </Banner>
            <Content>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
            </Content>
        </Container>
    )
}

export default Home;

const Container =styled.div`
max-width:1500px;
margin: 0 auto;
justify-content: space-between;


`
const Banner =styled.div`
background-image: url('https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2021/desktop-2x._CB658860139_.jpg');
min-height:600px;
background-position:center;
background-size:cover;
z-index:1;
mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));

`
const Content =styled.div`
padding-left:10px;
padding-right:10px;
margin-top:-350px;
display:flex;
width:500px;


`
