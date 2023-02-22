
import React from "react";
import styled from 'styled-components';
import { QUERY_MD } from '../../constants/Style';

const Wrapper = styled.a`
    display: block;
    width: 100%;
    padding: 0 5px;
    margin: 0;
    color: var(--theme-secondary);
    font-size: 16px;
    line-height: 1.2em;
    text-decoration: underline;
    overflow: hidden;
    &:hover {
        cursor: pointer;
        color: var(--theme-primary);
        text-decoration: underline;
    }
    ${ QUERY_MD }{
        font-size: 14px;
        justify-content: flex-start;
    }
    ${ props => props }
`;

const DateTxt = styled.p`
    width: 100%;
    padding: 0 ;
    margin:0;
    color: inherit;
    line-height: inherit;
`;

export default function StyledOutLink({ type="" , child , label="" , target=null , ...styleprops }){

    return( 
        <Wrapper 
            { ...styleprops }
            href={ target } 
            target="_blank" 
            rel="noreferrer noopenner"
        >
            { label && <DateTxt> { label } </DateTxt>}
            { child }
        </Wrapper>
    )
}