
import React from "react";
// import { v4 } from 'uuid';
import styled from 'styled-components';
import { QUERY_LG } from '../../constants/Style';

import ListItem from './ListItem/ListItem';
import { SectionName } from '../../components';
import Txt from '../../static/txt.json'

const Wrapper = styled.div`
    width: 100%;
    padding: 5px 20px 20px;
    margin: 0px auto;
    ${ QUERY_LG }{
        padding: 0 20px10px;
    }
`;

const Content = styled.div`
    width: 100%;
    margin: 0px auto;
`;

export default function ExperienceList() {

    return( 
        <Wrapper>
            <Content>
                <SectionName data="Education and Experience" />
                {
                    Array.isArray(Txt.WorkExp) && Txt.WorkExp.map( ({ id , ...item }) => ( <ListItem key={ id } data={ item } /> ))
                }
            </Content>
        </Wrapper>
    )
}