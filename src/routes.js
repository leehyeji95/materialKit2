// @mui material components
import Icon from "@mui/material/Icon";

// Pages
import AboutUs from "layouts/pages/landing-pages/about-us";
import Facility from "layouts/pages/landing-pages/facilities";
import ESG from "layouts/pages/landing-pages/esg";
import AutorenewIcon from '@mui/icons-material/Autorenew';

const routes = [
  {
    name: "home",
    icon: <Icon>home</Icon>,
    href: "/",
  },
  {
    name: "회사소개",
    icon: <Icon>dashboard</Icon>,
    collapse: [
      {
        name: "기업 개요",
        route: "/pages/landing-pages/about-us",
        component: <AboutUs />
      },
      {
        name: "기업이념 및 경영방침",
        route: "/pages/landing-pages/about-us",
        component: <AboutUs />
      },
      {
        name: "오시는 길",
        route: "/pages/landing-pages/about-us",
        component: <AboutUs />
      },
    ],
  },
  {
    name: "ESG",
    icon: <AutorenewIcon/>,
    collapse: [
      {
        name: "SHE 방침",
        route: "/pages/landing-pages/esg",
        component: <ESG />
      },
      {
        name: "안전보건경영",
        route: "/pages/landing-pages/esg",
        component: <Facility />
      },
      {
        name: "환경경영",
        route: "/pages/landing-pages/esg",
        component: <Facility />
      },
      {
        name: "윤리경영",
        route: "/pages/landing-pages/esg",
        component: <Facility />
      },
      {
        name: "사이버신문고",
        route: "/pages/landing-pages/esg",
        component: <Facility />
      },
    ],
  },
  {
    name: "설비현황",
    icon: <Icon>article</Icon>,
    collapse: [
      {
        name: "설비 보유 현황",
        route: "/pages/landing-pages/facilities",
        component: <Facility />
      },
      {
        name: "주요 생산품",
        route: "/pages/landing-pages/facilities",
        component: <Facility />
      },
      {
        name: "고객사 및 적용차종",
        route: "/pages/landing-pages/facilities",
        component: <Facility />
      },
      {
        name: "인증현황",
        route: "/pages/landing-pages/facilities",
        component: <Facility />
      },

    ],
  },
];

export default routes;
