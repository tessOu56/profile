

import React from "react";
import styled from 'styled-components';
import { QUERY_MD } from '../../constants/Style';

const TitleName = styled.h3`
    width:100%;
    padding: 20px 0 ;
    font-size: 18px;
    font-weight: 700;
    color: var(--theme-secondary);
    letter-spacing:3px;
    ${ QUERY_MD }{
        padding: 10px 0 ;
    }
    ${ props => props }
`;

export default function SectionName({ data="" , ...props  }) {

    return( 
        <TitleName { ...props }> { data } </TitleName>
    )
}