
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

const TxtContent = styled.div`
    width: 100%;
    margin-bottom: 10px;
`;

const TxtBox = styled(TxtContent)`
    display: grid;
    grid-template-columns: minmax( auto , 150px ) minmax( auto , 100% );
    ${ QUERY_LG }{
        grid-template-columns: minmax( auto , 100% );
    }
`;

const Description = styled.p`
    padding: 5px ;
    color: var(--font-primary);
    font-size: 18px;
    letter-spacing: 1px;
    line-height: 1.5em;
    ${ QUERY_MD }{
        padding: 0 ;
    }
`;

const ContentList = styled.ul`
    width: 100%;
    display: flex;
    flex-flow: row wrap;
`;

export default () => {
    const InfoList = [
        { id: v4() , name: "phone" , value: "0925-098-696" , icon:"call" } , 
        { id: v4() , name: "mail" , value: "tess2345678@gmail.com" , icon:"mail" } , 
        { id: v4() , name: "git" , value: "https://github.com/tessOu56"  , icon:"git" } ,  
        // { id: v4() , name: "linkedin" , value: "0925-098-696" , icon:"lk" } ,  
    ]

    const SkillList = [
        { id: v4() , name: "phone" , icon:"html" } , 
        { id: v4() , name: "phone" , icon:"css" } , 
        { id: v4() , name: "phone" , icon:"js" } , 
        { id: v4() , name: "phone" , icon:"react" } , 
        { id: v4() , name: "phone" , icon:"nodejs" } , 
    ]

    const LanGList = [
        { id: v4() , name: "phone" , value: "中文"  , icon:"" } , 
        { id: v4() , name: "phone" , value: "英文"  , icon:"" } , 
    ]

    const DescList = [
        "非資訊本科生，於嘉義大學森林暨自然資源學系畢業後，參與資策會前端網站設計開發班，培訓結束後旋即投入前端工作。" ,
        "於課程培訓期間學會標籤語言 HTML5 , CSS3，和程式語言 JavaScript , PHP , SQL 之運用，使用資料庫為 MySQL ，接觸前端框架或函式庫有 JQuery , VueJS，曾獨立完成靜態商業推廣網站、以及共同開發電商專案等。" ,
        "第一份前端工作為建置與維護內部系統，除了全力支援前端開發以外，亦參與部分系統的後端業務流程開發與API撰寫，並長期負責相關資料庫的日常維護。工作期間學會 ReactJS , C# ，並逐漸熟悉 SQLServer。" ,
        "預期將來更加深入前端領域的專業技術和優化開發效率，若有機會參與後端開發，期望以 NodeJS 為主。" ,
    ]
    return( 
        <Wrapper>
            <TxtContent>
                <SectionName data="Summary" />
                {
                    DescList.map( ( desc , i ) => <Description key={ i }> { desc } </Description> )
                }
            </TxtContent>
            <TxtContent>
                <TxtBox>
                    <SectionName data="Main Skills" />
                    <ContentList>
                    {
                        SkillList.map( ({ id , ...item }) =>  <ContactItem key={ id } data={ item } /> ) 
                    }
                    </ContentList>
                </TxtBox>
                <TxtBox>
                    <SectionName data="Languages" />
                    <ContentList>
                    {
                        LanGList.map( ({ id , ...item }) =>  <ContactItem key={ id } data={ item } /> ) 
                    }
                    </ContentList>
                </TxtBox>
                <TxtBox>
                    <SectionName data="Contact" />
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