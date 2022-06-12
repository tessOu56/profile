

import React from "react";
import styled from 'styled-components';
import { QUERY_MD } from '../../constants/Style';
import { StyleIcon , StyledOutLink } from '../../components';

const Wrapper = styled.li`
    width:fit-content;
    padding: 0;
    margin:0 10px ;
    color: var(--font-primary);
    font-size: 18px;
    line-height: 1.8em;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    ${ QUERY_MD } {
        margin: 0 0 5px;
        font-size: 14px;
    }
`;

const Txt = styled.p`
    width: fit-content;
    padding: 0 5px;
    color: var(--theme-light);
    margin-right: 10px;
`;

const IconWrap = styled.div`
    width: fit-content;
    min-width: ${ props => props.smallize ? '10px' : '30px' };
    padding:0;
`;

export default ({ data , iconlize=false , txtialize=false}) => {
    const { value , icon , type="text" } = data ;

    return( 
        <Wrapper>
            <IconWrap smallize={ txtialize }>
                <StyleIcon 
                    keyword={ icon } 
                    color={ iconlize ? 'var(--theme-light)' : 'var(--theme-deep)'} 
                    size={ txtialize ? 20 : 25 } />
            </IconWrap>
            {
                type === "link" ?
                <StyledOutLink type="outlink" label={ value } target={ value } /> 
                :  <Txt> { value } </Txt>
            }
        </Wrapper>  
    )
}