
import React from "react";
import styled from 'styled-components';
import { QUERY_MD } from '../../../constants/Style';
import { DateLabel , ItemTitleDescription } from '../../../components';

const Wrapper = styled.div`
    width: 100%;
`;

const NameWrap = styled.div`
    width: 100%;
    color: var(--theme-primary);
    display: grid;
    grid-template-columns: 150px auto 220px;
    align-content: baseline;
    ${ QUERY_MD }{
        grid-template-columns: 100%;
    }
`;

const Name = styled.p`
    width: 100%;
    font-size: 26px;
    font-weight: 700;
    line-height: 1.8em;
    ${ QUERY_MD }{
        font-size: 20px;
        line-height: 1.8em;
    }
`;

const Job = styled.p`
    width: 100%;
    padding: 12px 0 0;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.8em;
    ${ QUERY_MD }{
        padding: 0px 0 3px;
        font-size: 14px;
        line-height: 1.5em;
    }
`;

export default ({ data }) => {
    const { name , job , company , startdate , enddate , desc } = data ;
    return( 
        <Wrapper>
            <NameWrap>
                <Name> { name } </Name>
                <Job> { job } </Job>
                <DateLabel data={{ startdate , enddate }} />
            </NameWrap>
            <ItemTitleDescription data={{ company , desc }}/>
        </Wrapper>  
    )
}