
import React from "react";
import styled from 'styled-components';
import { QUERY_MD } from '../../constants/Style';

const Wrapper = styled.div`
    width: 100%;
    padding: 16px 0px 0;
    color: var(--theme-light);
    font-size: 16px;
    line-height: 1.8em;    
    display: flex;
    justify-content: flex-end;
    align-items: baseline;
    ${ QUERY_MD }{
        padding: 0px 0px 3px;
        font-size: 14px;
        line-height: 1.5em;
        justify-content: flex-start;
    }
`;

const DateTxt = styled.span`
    width: fit-content;
    margin:0;
`;

const DateSeperate = styled(DateTxt)`
    padding: 0 5px;
`;

export default ({ data }) => {
    const { startdate , enddate } = data ;
    return( 
        <Wrapper>
            <DateTxt> { startdate } </DateTxt>
            <DateSeperate>~</DateSeperate>
            <DateTxt> { enddate } </DateTxt>
        </Wrapper> 
    )
}