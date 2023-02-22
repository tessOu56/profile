
import React from "react";
import { v4 } from 'uuid';
import styled from 'styled-components';
import { SectionName } from '../../components';

import Demo1 from '../../static/demo1_home.png';
import Demo2 from '../../static/demo1_about.png';
import Demo3 from '../../static/demo1_gallery.png';
import Demo4 from '../../static/demo1_service.png';
import Demo5 from '../../static/demo1_pricing.png';
import Demo6 from '../../static/demo1_contact.png';

import ProjectItem from './ProjectItem/ProjectItem';

const Wrapper = styled.div`
    width: 100%;
    padding: 0 20px;
    margin: 0 auto 40px;
`;

const Content = styled.div`
    width: 100%;
`;

const List = styled.ul`
    width: 100%;
`;

export default function Projects(){

    const ProjectList = [
        {
            id: v4() ,
            name: "靜態網站 DEMO" , 
            update:"2022-06",
            desc:`參考他人以 WordPress 模板進行的網頁設計，採用 ReactJS 進行靜態網站開發。`,
            skills:["ReactJS","React-Router v6","Styled-Component"],
            link:"https://tessou56.github.io/Demo_layout",
            img: Demo1 ,
            subimgs: [ Demo2 , Demo3 , Demo4 , Demo5 , Demo6 ]
        }
    ]

    return( 
        <Wrapper>
            <Content>
                <SectionName data="Projects" />
                <List>
                {
                    ProjectList.map( ({ id , ...item }) => ( <ProjectItem key={ id } data={ item } /> ))
                }
                </List>
            </Content>
        </Wrapper>
    )
}