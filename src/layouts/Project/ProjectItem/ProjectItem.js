
import React from "react";
import styled from 'styled-components';
import { QUERY_LG } from '../../../constants/Style';
import { StyledOutLink 
    // , StyleIcon 
} from '../../../components';

import Description from './Description';

const Wrapper = styled.li`
    width: 100%;
    display: grid;
    grid-template-columns: minmax( 500px , 45% ) minmax( auto , 55% ) ;
    grid-template-rows: auto;
    gap: 5px 0px;
    padding-bottom: 20px;
    ${ QUERY_LG }{
        grid-template-columns: minmax( auto , 100% ) ;
    }
`;

const IndexImg = styled.img`
    display:block;
    width: 100%;
`; 

const HoverWrap = styled.div`
    width: 100%;
    position: relative;
    &:before{
        content:"";
        position: absolute;
        z-index:1;
        width: 100%;
        height: 100%;
        inset:0;
        background: linear-gradient( 180deg var(--bg-hover) transparent );
        // opacity: 0;
    }
    &:hover {
        &:before{
            cursor:pointer;
            opacity: 1;
        }
    }
`;

// const IconWrap = styled.div`
//     width: fit-content;
//     min-width: 40px;
//     padding:0;
//     margin-right: 10px;
// `;

export default function ProjectItem({ data }) {
    const { img , link , skills , subimgs , ...item } = data ;
    return( 
        <Wrapper>
            <StyledOutLink 
                type="outlink" 
                child={ 
                    <HoverWrap>
                        {/* <IconWrap>
                            <StyleIcon keyword={ icon } color="var(--theme-deep)" size="25" />
                        </IconWrap> */}
                        <IndexImg src={ img } alt="project-demo-img"/>
                    </HoverWrap>
                 } 
                target={ link } 
            />
            <Description data={ item } list={ skills } imglist={ subimgs } link={ link }/>
        </Wrapper>
    )
}