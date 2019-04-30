import React from 'react';
import styled from 'styled-components';

const MainStyle = styled.div`
    background-color: #F5F2EA;
    max-width: 100%;
    min-height: 100vh;
`;

const MainContainer = styled.div`
    max-width: 1270px;
    margin: 0 auto;
    padding: 1vh 10px;
`;

const Main = ({ children  }) =>(
    <MainStyle>
        <MainContainer>
            {children}
        </MainContainer>
    </MainStyle>
);

export default Main;