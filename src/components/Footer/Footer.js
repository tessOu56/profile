
import React from "react";
import styled from 'styled-components';

const Wrapper = styled.div`
    width:100%;
    background-color: var(--theme-primary);
`;

const Content = styled.div`
    width:100%;
    padding: 0px 8px;
    margin: 0 5px 0 0 ;
    border-radius: 5px;
    color: white;
    font-size: 12px;
    line-height: 1.8em;
    text-align: center;
`; 

export default function Footer(){

    return( 
        <Wrapper>
            <Content> copyright 2022 </Content>
        </Wrapper>  
    )
}