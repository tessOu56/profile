
import React from "react";
import styled from 'styled-components';

const Wrapper = styled.ul`
    width:100%;
    padding: 5px;
    display: flex;
    flex-flow:row wrap;
`;

const Content = styled.li`
    width:fit-content;
    padding: 0px 8px;
    margin: 0 5px 5px 0 ;
    border: 1px solid var(--theme-primary);
    border-radius: 5px;
    color: var(--theme-light);
    font-size: 12px;
    line-height: 1.8em;
`; 

export default function LabelTag({ data=[] }) {

    return( 
        <Wrapper>
            { 
                data.map( ( item , i ) => <Content key={ i }> { item } </Content>)
            }
        </Wrapper>  
    )
}