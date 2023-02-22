
import React from "react";
import styled from 'styled-components';
import { QUERY_MD } from '../../../constants/Style';
import { ItemTitle  , LabelTagList } from '../../../components';

const Wrapper = styled.div`
    width: 100%;
    padding: 0 20px;
    margin: 0px auto;
    ${ QUERY_MD }{
        padding: 0 5px;
    }
`;

const ImgList = styled.ul`
    width: 100%;
    display: flex;
    flex-flow: row wrap;
`;

const ImgBox = styled.img`
    width: 80px;
    margin: 10px;
    
`;

export default function Description ({ data , list=[] , imglist=[] , link }){
    const { update } = data ;

    return( 
        <Wrapper>
            <ItemTitle data={{ ...data , startdate:update , enddate:update , joblink:link }} secondary={ true } />
            <LabelTagList data={ list } />
            <ImgList>
            {
                imglist.map( ( item , i ) => ( <ImgBox src={ item } alt="demo-imgs"/> ))
            }
            </ImgList>
        </Wrapper>
    )
}