
import React from "react";
import styled from 'styled-components';
import { QUERY_MAX_W , QUERY_MD } from '../../constants/Style';

import Logo from '../../static/headshot.jpg';

const Wrapper = styled.header`
    width: 100%;
    max-width: ${ QUERY_MAX_W };
    margin: 0 auto ;
`;

const Content = styled.div`
    display: grid;
    grid-template-columns: 120px auto;
    ${ QUERY_MD }{
        > :nth-child(1){
            grid-column: 1 / 1;
            grid-row: 1 / 1;
        }
        > :nth-child(2){
            grid-column: 1 / 3;
            grid-row: 2 / 2;
        }
    }
`;

const LogoImg = styled.img`
    display: block;
    padding: 20px;
    border-radius: 50px;
    ${ QUERY_MD }{
        padding: 20px 20px 0px;
    }
`;

const TxtContent = styled.div`
    width: 100%;
    padding: 20px ;
    color: var(--theme-primary);
    ${ QUERY_MD }{
        padding: 5px ;
    }
`;

const BigName = styled.h1`
    width:100%;
    padding: 10px 20px ;
    font-size: 32px;
    letter-spacing:5px;
    text-transform: uppercase;
    ${ QUERY_MD }{
        padding: 10px 15px 5px;
        font-size: 26px;
    }
`;
const JobName = styled.h2`
    width:100%;
    padding: 0px 20px ;
    font-size: 18px;
    letter-spacing:2px;
    line-height:1.5em;
    text-transform: uppercase;
    ${ QUERY_MD }{
        padding: 0 15px ;
        font-size: 14px;
    }
`;

export default () => {

    return( 
        <Wrapper>
            <Content>
                <LogoImg src={ Logo } alt="logo"/>
                <TxtContent>
                    <BigName> Tess Ou </BigName>
                    <JobName> Programmer , Front-end developer , software  engineer </JobName>
                </TxtContent>
            </Content>
        </Wrapper>
    )
}