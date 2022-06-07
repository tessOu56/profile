

import React from "react";
import styled from 'styled-components';

const TitleName = styled.h3`
    width:100%;
    padding: 20px 0 ;
    font-size: 18px;
    font-weight: 700;
    color: var(--theme-secondary);
    letter-spacing:3px;
`;

export default ({ data="" }) => {

    return( 
        <TitleName> { data } </TitleName>
    )
}