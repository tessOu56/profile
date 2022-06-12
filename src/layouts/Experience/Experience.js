
import React from "react";
import { v4 } from 'uuid';
import styled from 'styled-components';
import { QUERY_LG } from '../../constants/Style';

import ListItem from './ListItem/ListItem';
import { SectionName } from '../../components';

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

export default () => {

    const WorkExp = [
        {
            id: v4() ,
            level:1,
            name: "前端工程師" , 
            job: "前端工程、網站資訊安全" , 
            company: "待應徵",
            startdate:"2022-06",
            enddate:"",
            desc:"期許自己持續精進前端工程以及網頁安全、效能等，在兼顧產品品質的情況下，加速開發效率。",
            projects:[ ],
            skills:[]
        },
        {
            id: v4() ,
            level:1,
            name: "自由接案者" , 
            job: "前端工程、WordPress架設" , 
            company: "",
            startdate:"2021-09",
            enddate:"2022-06",
            desc:"同合作UI設計師共同開發網站以及後台系統、自習進修本科相關專業書籍。",
            projects:[
                {
                    name:"mou-mou-creative 形象推廣網站" ,
                    desc:"與客戶設計師共同溝通合作擬定網站架構，並透過 WordPress 後台架設網站。網站完成後，後續維護已全權轉交客戶負責。",
                },
                {
                    name:"SF-compassion 醫療診所介紹網站" ,
                    desc:"與合作設計師共同依照客戶需求合作擬定網站架構，並配合醫療專業知識進行資訊設計，並透過 WordPress 後台架設網站。目前網站持續開發中，預期將與設計師和客戶繼續合作，開發後台系統。",
                },
                {
                    name:"短期進修" ,
                    desc:"因應非本科不足之處，趁自由接案期間研讀線性代數、離散數學、演算法與資料結構等科目，並閱讀資訊相關書籍，以期自己能夠以更專業的素養參與軟體開發。"
                },
            ],
            skills:["線性代數","離散數學","演算法與資料結構","ReactJS"]
        },
        {
            id: v4() ,
            level:1,
            name: "程式設計師" , 
            job: "前端工程、後端API、資料庫模型設計與資料維護" , 
            company: "安訊集團_安訊國際網路股份有限公司",
            startdate:"2019-09",
            enddate:"2021-09",
            desc:"主要工作內容為內部系統獨立開發、撰寫研發技術文件、資料庫模型建設與維護對外官方網站，並學習各專案牽涉之相關專業知識，以及學習資訊安全和網路安全之技術與架構。",
            projects:[
                {
                    name:"行政專案管理系統" ,
                    desc:"介面規劃設計、前後台介面架設與功能開發、API流程撰寫與實作、資料庫模型設計、資料庫申請架設、虛擬機之系統部署與維護、系統功能測試、專案管理。"
                },
                {
                    name:"API管理與測試系統" ,
                    desc:"介面規劃設計、後台介面架設與功能開發、API流程撰寫與實作、資料庫模型設計、資料庫申請架設、虛擬機之系統部署與維護、系統功能測試、跨部門API測試合作。",
                },
                {
                    name:"資訊防護管理後台系統之部分子系統" ,
                    desc:"與後端工程師合作API串接、UI與介面開發、API測試、系統功能測試。"
                },
                {
                    name:"部門硬體資產管理系統" ,
                    desc:"負責API流程撰寫與實作、資料庫模型設計，與其他前端工程師合作開發系統。"
                },
                {
                    name:"電商金流測試網站" ,
                    desc:"網頁架構與功能開發、API流程撰寫與實作、資料庫模型設計、第三方金流API串接測試、網站流程與功能測試。",
                },
                {
                    name:"官方英文網站" ,
                    desc:"與跨部門設計師合作進行網頁開發。負責前台畫面、API串接，以及正式環境部署與維護、跨裝置畫面測試。",
                },
                {
                    name:"官方中文網站" ,
                    desc:"專案內容與官方英文網站相同，網站詳細內容可見此網址：",
                    link:"https://ansonnet.com.tw/"
                }
            ],
            skills:["測試驅動開發(TDD)","軟體開發","Project Managment","JS","ReactJS","C#","ASP.NET Core","DBeaver","SQLServer","Bash Script","資訊安全"]
        },
        {
            id: v4() ,
            level:2,
            name: "程式學習者" , 
            job: "網頁設計、網站全流程開發" , 
            company: "資策會專業培訓",
            startdate:"2019-02",
            enddate:"2019-08",
            desc:"學習網頁開發完整流程以及奠定相關程式語言之基礎。",
            projects:[
                {
                    name:"靜態活動網站" ,
                    desc:"自選素材與主題進行網頁設計，並用 HTML5 , SCSS , JS(ES6) 撰寫完成。",
                },
                {
                    name:"APP之介面設計" ,
                    desc:"團隊自選主題，並共同發想設計 Wireframe ，最終以 Mockup 形式報告合作成果。",
                },
                {
                    name:"金流購物網站" ,
                    desc:"包含登入、會員、產品上架、活動新增、購物車、互動遊戲、線上機器人的合作專案。團隊合作內容從UIUX發想、素材製作，到資料庫模型討論與設計、共同開發功能與購物流程、前後端工作分配、共訂git版控、系統測試、網站伺服器維護等。",
                },
            ],
            skills:["敏捷式開發","UI/UX","HTML5","CSS3","Sass/SCSS","JavaaScript","JQuery","VueJS","PHP","MySQL","MySQL Workbench","GIT","Soucetree"]
        },
        {
            id: v4() ,
            level:3,
            name: "醫護助理" , 
            job: "牙醫診所助理人員" , 
            company: "",
            startdate:"2017-09",
            enddate:"2019-02",
            desc:"協助牙醫師進行根管治療、拔牙、補牙、洗牙、牙齒矯正、兒童牙科等事務。在此期間學習到積極解決問題的態度與正向思考的能力。",
            projects:[],
            skills:["醫護行政","資產管理","醫護流程"]
        },
        {
            id: v4() ,
            level:3,
            name: "學生" , 
            job: "嘉義大學森林暨自然資源學系" , 
            company: "",
            startdate:"",
            enddate:"2017-06",
            desc:"",
            projects:[],
            skills:["社團活動","溝通協調","團隊合作"]
        }
    ]

    return( 
        <Wrapper>
            <Content>
                <SectionName data="Education and Experience" />
                {
                    WorkExp.map( ({ id , ...item }) => ( <ListItem key={ id } data={ item } /> ))
                }
            </Content>
        </Wrapper>
    )
}