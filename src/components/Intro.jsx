import React from 'react';
import styled from 'styled-components';

const IntroStyle = styled.div`
    width: 100%;
    padding: 40vh 0;
`;

const IntroContainer = styled.div`
    max-width: 576px;
    height: 10vh;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Intro = ( data ) =>(
    <IntroStyle>
        <IntroContainer>
            <h4>{ data.intro }</h4>
        </IntroContainer>
    </IntroStyle>
);  

export default Intro;