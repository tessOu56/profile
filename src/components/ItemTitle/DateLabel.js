
import React from "react";
import styled from 'styled-components';
import { QUERY_MD } from '../../constants/Style';

const Wrapper = styled.div`
    width: 100%;
    padding: 16px 0px 0;
    color: var(--theme-light);
    font-size: ${ props => props.simply ? '12px' : '16px' };
    line-height: 1.8em;    
    display: flex;
    justify-content: flex-end;
    align-items: baseline;
    ${ QUERY_MD }{
        padding: 0px 5px 3px;
        font-size: ${ props => props.simply ? '12px' : '14px' };
        line-height: 1.5em;
        justify-content: flex-start;
    }
`;

const DateTxt = styled.span`
    width: fit-content;
    min-width: ${ props => props.simply ? '55px' : '63px' };
    margin:0;
    color:inherit;
`;

const DateSeperate = styled(DateTxt)`
    min-width: 0;
    padding: 0 5px;
    color:inherit;
`;

export default function DataLabel({ data , simply=false }) {
    const { startdate , enddate } = data ;
    return( 
        <Wrapper simply={ simply }>
            <DateTxt simply={ simply }> { startdate } </DateTxt>
            <DateSeperate>~</DateSeperate>
            <DateTxt simply={ simply }> { enddate } </DateTxt>
        </Wrapper> 
    )
}