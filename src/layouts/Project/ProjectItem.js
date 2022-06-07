
import React from "react";
import styled from 'styled-components';
import { QUERY_MD } from '../../constants/Style';
import { DateLabel , ItemTitleDescription , LabelTagList } from '../../components';

const Wrapper = styled.div`
    width: 100%;
    padding: 0 20px;
    margin: 0px auto;
    ${ QUERY_MD }{
        padding: 0 5px;
    }
`;

const TitleWrap = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: auto 85px ;
    align-items: baseline ;
    ${ QUERY_MD } {
        align-items: center ;
        grid-template-columns: auto 77px ;
    }
`;

const ProjectName = styled.p`
    width: 100%;
    color: var(--theme-primary);
    font-size: 18px;
    font-weight: 500;
    line-height: 1.8em;
`;


export default ({ data , list=[] }) => {
    const { name , update , desc , imglist } = data ;

    return( 
        <Wrapper>
            <TitleWrap>
                <ProjectName> { name } </ProjectName>
                <DateLabel data={{ startdate:"" , enddate:update }} />
            </TitleWrap>
            <ItemTitleDescription data={{ company:"" , desc }}/>
            <LabelTagList data={ list } />
        </Wrapper>
    )
}