
import React from "react";
import styled from 'styled-components';
import { StyledOutLink } from '../../../components';

const Wrapper = styled.li`
    width:100%;
    padding-bottom: 15px;
    display: grid ;
    grid-template-columns: 20px auto;
`;

const DotWrap = styled.div`
    width: 100%;
    padding: 13px 5px;
`;
const Dot = styled.div`
    width: 5px;
    height: 5px;
    background-color: var(--theme-light);
    border-radius: 50%;
`;

const Content = styled.div`
    width: 100%;
`;

const Title = styled.p`
    width: 100%;
    color: var(--theme-primary);
    font-weight: 700;
    font-size:14px;
`;
const Description = styled.p`
    width: 100%;
    color: var(--theme-light);
    font-size:12px;
    line-height: 1.5em;
`;

const StyledLink = styled(StyledOutLink)`
    display:inline-block;
    width: fit-content;
    font-size:12px;
    line-height: 1.3em;
    vertical-align:text-bottom;
`;
export default function ListDesc({ data }) {
    const { name , desc , link="" } = data ;
    return( 
        <Wrapper>
            <DotWrap>
                <Dot></Dot>
            </DotWrap>
            <Content>
                <Title> { name } </Title>
                <Description> { desc }
                    {
                        link && <StyledLink type="outlink" label={ link } target={ link } />
                    }
                </Description>
            </Content>
        </Wrapper>  
    )
}