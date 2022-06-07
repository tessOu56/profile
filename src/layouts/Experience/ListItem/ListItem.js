
import React from "react";
import styled from 'styled-components';
import { QUERY_MD } from '../../../constants/Style';

import SideLine from './SideLine';
import ProjectTitle from './ProjectTitle';
import ProjectItem from './ProjectItem';
import { LabelTagList } from '../../../components';

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
    padding: 0 5px 30px;
    color: var(--font-primary);
    font-size: 18px;
    line-height: 1.8em;
`;

const ProjectList = styled.ul`
    width:100%;
    color: var(--font-primary);
`;

export default ({ data }) => {
    const { projects=[], skills=[] , level , ...title } = data ; 
    return( 
        <Wrapper>
            <SideLine trans={ level > 1 ? true : false }/>
            <ContentWrap>
                <ProjectTitle data={ title } />
                <ProjectList>
                {
                    projects.map( ( item , i ) => ( <ProjectItem key={ i } data={ item } /> ))
                }
                </ProjectList>
                <LabelTagList data={ skills } />
            </ContentWrap>
        </Wrapper>  
    )
}