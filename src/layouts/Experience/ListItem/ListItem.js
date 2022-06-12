
import React from "react";
import styled from 'styled-components';
import { QUERY_MD } from '../../../constants/Style';

import SideLine from './SideLine';
import ListDesc from './ListDesc';
import { LabelTagList , ItemTitle } from '../../../components';

const Wrapper = styled.li`
    width:100%;
    display: grid ;
    grid-template-columns: 50px auto ;
    ${ QUERY_MD }{
        grid-template-columns: 30px auto ;
    }
`;
const ContentWrap= styled.div`
    width:100%;
    padding: 0 5px 5px;
    color: var(--font-primary);
    font-size: 18px;
    line-height: 1.8em;
`;

const ProjectList = styled.ul`
    width:100%;
    color: var(--font-primary);
    padding: 0 5px ;
`;

export default ({ data }) => {
    const { projects=[], skills=[] , level , ...title } = data ; 
    return( 
        <Wrapper>
            <SideLine simply={ level > 1 ? true : false }/>
            <ContentWrap>
                <ItemTitle data={ title } simply={ level > 2 ? true : false  } />
                <ProjectList>
                {
                    projects.map( ( item , i ) => ( <ListDesc key={ i } data={ item } /> ))
                }
                </ProjectList>
                <LabelTagList data={ skills } />
            </ContentWrap>
        </Wrapper>  
    )
}