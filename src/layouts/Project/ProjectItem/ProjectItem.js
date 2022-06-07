
import React from "react";
import styled from 'styled-components';
import { QUERY_MD , QUERY_SM } from '../../../constants/Style';
import { StyledOutLink } from '../../../components';

import Description from './Description';

const Wrapper = styled.li`
    width: 100%;
    display: grid;
    grid-template-columns: minmax( auto , 45% ) minmax( auto , 55% ) ;
    grid-template-rows: auto;
    gap: 5px 0px;
    padding-bottom: 20px;
    ${ QUERY_MD }{
        grid-template-columns: minmax( auto , 100% ) ;
        grid-template-rows: 300px auto;
    }
    ${ QUERY_SM }{
        grid-template-rows: 200px auto;
    }
`;

const IndexImg = styled.div`
    display:block;
    width: 100%;
    min-height: 330px;
    background: url(${ props => props.img }) no-repeat;
    background-size: cover;
    position: relative;
    &:before{
        content:"";
        position: absolute;
        width: 100%;
        height: 100%;
        top:0;
        left:0;
        background-color: transparent;
    }
    &:hover {
        &:before{
            background-color: var(--bg-hover);
        }
    }
`; 

export default ({ data }) => {
    const { img , link , skills , subimgs , ...item } = data ;
    return( 
        <Wrapper>
            <StyledOutLink 
                type="outlink" 
                child={ <IndexImg img={ img }/> } 
                target={ link } 
            />
            <Description data={ item } list={ skills } imglist={ subimgs } link={ link }/>
        </Wrapper>
    )
}