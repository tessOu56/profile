
import React from "react";
import { v4 } from 'uuid';
import styled from 'styled-components';
import { QUERY_LG , QUERY_MD } from '../../constants/Style';

import ContactItem from './ContactItem';
import { SectionName } from '../../components';

const Wrapper = styled.div`
    width: 100%;
    padding: 0 20px;
    margin: 0px auto;
`;

const ColorWrap = styled.div`
    width: 100%;
    padding: 5px 10px;
    border-radius: 10px;
    position: relative;
    &:before {
        content:"";
        position: absolute;
        inset:0;
        border-radius: 10px;
        border: 3px solid transparent;
        background: linear-gradient( 90deg , var(--font-light) , transparent ) border-box;
        mask: linear-gradient( #fff 0 0 ) padding-box,linear-gradient( #fff 0 0 ) ;
        mask-composite: xor;
        // -website-mask-composite: xor;
    }
`;

const TxtContent = styled.div`
    width: 100%;
    margin-bottom: 10px;
`;

const TxtBox = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: minmax( auto , 150px ) minmax( auto , 100% );
    ${ QUERY_LG }{
        grid-template-columns: minmax( auto , 100% );
    }
`;

const SecondarySectionName = styled( SectionName )`
    padding: 10px 0;
`

const Description = styled.p`
    padding: 5px ;
    color: var(--font-primary);
    font-size: 18px;
    letter-spacing: 1px;
    line-height: 1.5em;
    ${ QUERY_MD }{
        padding: 0 ;
        font-size: 14px;
    }
`;

const ContentList = styled.ul`
    width: 100%;
    display: flex;
    flex-flow: row wrap;
`;

export default function Summary () {
    const InfoList = [
        { id: v4() , value: "0925-098-696" , icon:"call" } , 
        { id: v4() , value: "tess2345678@gmail.com" , icon:"mail" } , 
        { id: v4()  , value: "https://github.com/tessOu56"  , icon:"git" , type:"link" } ,  
        { id: v4()  , value: "New Taipei City , Taiwan "  , icon:"location" } ,  
        // { id: v4() , value: "0925-098-696" , icon:"lk" } ,  
    ]

    const SkillList = [
        { id: v4() , icon:"html" } , 
        { id: v4() , icon:"css" } , 
        { id: v4() , icon:"js" } , 
        { id: v4() , icon:"react" } , 
        { id: v4() , icon:"nodejs" } , 
    ]

    const LanGList = [
        { id: v4() , value: "中文"  , icon:"" } , 
        { id: v4() , value: "英文"  , icon:"" } , 
    ]

    const DescList = [
        "因對網頁設計有興趣而參加資策會前端網站設計開發班，培訓結束後旋即投入前端工作。" ,
        "於培訓期間學會標籤語言 HTML5 , CSS3，和程式語言 JavaScript , PHP , SQL Query，資料庫為 MySQL ，接觸前端框架或函式庫有 JQuery , VueJS，曾獨立完成靜態商業推廣網站、以及共同開發電商專案等，並在此學習期間逐漸啟發對程式的熱愛，並且從團隊合作中領略共同開發的樂趣。" ,
        "第一份前端工作為建置與維護內部系統，除了全力支援前端開發以外，亦參與部分系統的後端業務流程開發與API撰寫，並長期負責相關資料庫的日常維護。工作期間學會 ReactJS , C# , SQLServer，逐漸累積軟體/系統開發、跨部門合作的經驗，另也因接觸到資訊軟體業各種面向的技術，為解決各項專業問題，已習慣於自主學習。" ,
        "預期將來更加深入前端領域的專業技術和優化開發效率，若有機會參與後端開發，期望以 NodeJS 為主。" ,
    ]

    return( 
        <Wrapper>
            <TxtContent>
                <SectionName data="Summary" />
                <ColorWrap>
                {
                    DescList.map( ( desc , i ) => <Description key={ i }> { desc } </Description> )
                }
                </ColorWrap>
            </TxtContent>
            <TxtContent>
                <TxtBox>
                    <SecondarySectionName data="Main Skills" />
                    <ContentList>
                    {
                        SkillList.map( ({ id , ...item }) =>  <ContactItem key={ id } data={ item } iconlize={true}/> ) 
                    }
                    </ContentList>
                </TxtBox>
                <TxtBox>
                    <SecondarySectionName data="Languages" />
                    <ContentList>
                    {
                        LanGList.map( ({ id , ...item }) =>  <ContactItem key={ id } data={ item } txtialize={true}/> ) 
                    }
                    </ContentList>
                </TxtBox>
                <TxtBox>
                    <SecondarySectionName data="Contact" />
                    <ContentList>
                    {
                        InfoList.map( ({ id , ...item }) =>  <ContactItem key={ id } data={ item } /> ) 
                    }
                    </ContentList>
                </TxtBox>
            </TxtContent>     
        </Wrapper>
    )
}