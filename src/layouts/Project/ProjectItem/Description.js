
import React from "react";
import styled from 'styled-components';
import { QUERY_MD } from '../../../constants/Style';
import { DateLabel , ItemTitleDescription , LabelTagList , StyledOutLink } from '../../../components';

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
const StyleDesc = styled(ItemTitleDescription)` margin: 10px 0 5px ; padding-bottom:0; `;

const ImgList = styled.ul`
    width: 100%;
    display: flex;
    flex-flow: row wrap;
`;

const ImgBox = styled.img`
    width: 80px;
    margin: 10px;
    
`;

const StyledLink = styled(StyledOutLink)`
    // margin: 10px 0 20px;
    margin: 0px 0 20px;
`;

export default ({ data , list=[] , imglist=[] , link }) => {
    const { name , update , desc  } = data ;

    return( 
        <Wrapper>
            <TitleWrap>
                <ProjectName> { name } </ProjectName>
                <DateLabel data={{ startdate:"" , enddate:update }} />
            </TitleWrap>
            <ItemTitleDescription data={{ company:"" , desc }}/>
            <StyledLink type="outlink" label={ link } target={ link } />
            <LabelTagList data={ list } />
            <StyleDesc data={{ company:"" , desc:"other images :" }}/>
            <ImgList>
            {
                imglist.map( ( item , i ) => ( <ImgBox src={ item } alt="demo-imgs"/> ))
            }
            </ImgList>
            {/* <StyleDesc data={{ company:"" , desc:"go see project :" }}/> */}
            {/* <ItemTitleDescription data={{ company:"" , desc:"go see project :" }}/> */}
        </Wrapper>
    )
}