
import React from "react";
import styled from 'styled-components';
import { QUERY_MD , QUERY_LG } from '../../constants/Style';
import StyledLink from '../StyledOutLink/StyledOutLink';
import DateLabel from './DateLabel';
import ItemDescription from './ItemDescription';

const Wrapper = styled.div`
    width: 100%;
`;

const NameWrap = styled.div`
    width: 100%;
    color: ${ props => props.light ? 'var(--theme-secondary)' : 'var(--theme-primary)' };
    display: grid;
    grid-template-columns: 150px auto auto;
    align-content: baseline;
    ${ QUERY_MD }{
        grid-template-columns: 100%;
    }
`;

const Name = styled.p`
    width: 100%;
    padding-top: ${ props => props.simply ? '8px' : '2px' };
    color: inherit;
    font-size: ${ props => props.simply ? '18px' : '26px' };
    font-weight: 700;
    line-height: 1.8em;
    ${ QUERY_LG }{
        grid-column: 1 / 3 ;
        grid-row: 1 / 1 ;
    }
    ${ QUERY_MD }{
        grid-column: 1 / 1 ;
        grid-row: 1 / 1 ;
        padding-top: ${ props => props.simply ? '5px' : 0 };
        font-size: ${ props => props.simply ? '14px' : '20px' };
        line-height: 1.8em;
    }
`;

const Job = styled.p`
    width: 100%;
    color: inherit;
    padding: ${ props => props.simply ? '11px 5px 0' : '13px 5px 0' };
    font-size: ${ props => props.simply ? '14px' : '18px' };
    font-weight: 500;
    line-height: 1.8em;
    ${ QUERY_LG }{
        padding: 0px 5px 3px;
        grid-column: 1 / 4 ;
        grid-row: 2 / 2 ;
    }
    ${ QUERY_MD }{
        grid-column: 1 /  1;
        grid-row: 2 / 2 ;
        font-size: ${ props => props.simply ? '12px' : '14px' };
        line-height: 1.5em;
    }
`;

const JobLink = styled(StyledLink)`
    padding: 10px 5px 0;
    line-height: 1.8em;
    ${ QUERY_LG }{
        padding: 0 5px;
        grid-column: 1 / 4 ;
        grid-row: 2 / 2 ;
    }
    ${ QUERY_MD }{
        grid-column: 1 /  1;
        grid-row: 2 / 2 ;
    }
`;

export default function ItemTitle({ data , simply=false , secondary=false }) {
    const { name , job , joblink , company , startdate , enddate , desc } = data ;
    return( 
        <Wrapper>
            <NameWrap light={ secondary } simply={ simply || secondary }>
                <Name simply={ simply || secondary }> { name } </Name>
                {
                    joblink ? 
                    <JobLink type="outlink" label={ joblink } target={ joblink } />
                    :
                    <Job simply={ simply || secondary }> { job } </Job>
                }
                <DateLabel data={{ startdate , enddate }} simply={ simply || secondary } />
            </NameWrap>
            { !simply && <ItemDescription data={{ company , desc }}/> }
        </Wrapper>  
    )
}