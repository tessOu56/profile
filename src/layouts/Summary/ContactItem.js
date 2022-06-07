

import React from "react";
import styled from 'styled-components';
import { QUERY_MD } from '../../constants/Style';
import { StyleIcon } from '../../components';

const Wrapper = styled.li`
    width:fit-content;
    padding: 0;
    margin:0 10px ;
    color: var(--font-primary);
    font-size: 18px;
    line-height: 1.8em;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    ${ QUERY_MD } {
        margin: 0 0 2px;
    }
`;

const Txt = styled.p`
    width: fit-content;
    padding:0;
    color: var(--theme-light);
`;

const IconWrap = styled.div`
    width: fit-content;
    min-width: 40px;
    padding:0;
    margin-right: 10px;
`;

export default ({ data }) => {
    const { name , value , icon } = data ;

    return( 
        <Wrapper>
            <IconWrap>
                <StyleIcon keyword={ icon } color="var(--theme-deep)" size="30" />
            </IconWrap>
            <Txt> { value } </Txt>
        </Wrapper>  
    )
}