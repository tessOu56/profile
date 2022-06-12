

import React from "react";
import styled from 'styled-components';
import { QUERY_MD } from '../../../constants/Style';

const Wrapper = styled.div`
    width:100%;
    display: grid;
    grid-template-rows: 25px auto;
    ${ QUERY_MD }{
        grid-template-rows: 24px auto;
    }
    
`;

const BallWrap = styled.div`
    width: 100%;
    height:100%;
    padding: 15px 20px 0;
    ${ QUERY_MD }{
        padding: 12px 9px 0;
    }
`;

const Ball = styled.div`
    width: 100%;
    height:100%;
    border-radius: 50%;
    background-color: ${ props => props.color };
`;

const LineWrap = styled.div`
    width: 100%;
    height:100%;
    padding: 0 49%;
    ${ QUERY_MD }{
        padding: 0 48%;
    }
`;
const Line = styled.div`
    width: 100%;
    height:100%;
    background: linear-gradient( 180deg , ${ props => props.color } , ${ props => props.color } , var(--theme-light , transparent) );
`;

export default ({ simply=false }) => {
    return( 
        <Wrapper>
            <BallWrap>
                <Ball color={ simply ? "var(--theme-secondary)": "var(--theme-primary)" }/>
            </BallWrap>
            <LineWrap>
                <Line color={ simply ? "var(--theme-secondary)": "var(--theme-primary)" }/>
            </LineWrap>
        </Wrapper>  
    )
}