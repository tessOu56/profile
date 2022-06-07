
import React from "react";
import styled from 'styled-components';
import { QUERY_MD } from '../../constants/Style';

const Wrapper = styled.div`
    ${ props => props }
    width: 100%;
    padding: 0 0 15px;
`;

const Descript = styled.p`
    width: 100%;
    color: var(--theme-light);
    font-size: 16px;
    line-height: 1.8em;
    ${ QUERY_MD }{
        font-size: 12px;
        line-height: 1.2em;
    }
`;

const JobDescrip = styled(Descript)`
    font-size: 14px;
    ${ QUERY_MD }{
        font-size: 12px;
        line-height: 1.5em;
    }
`;

export default ({ data , ...styleprops}) => {
    const { company , desc } = data ;
    return( 
        <Wrapper { ...styleprops } >
            <Descript> { company } </Descript>
            <JobDescrip> -{ desc } </JobDescrip>
        </Wrapper>  
    )
}