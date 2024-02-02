import {
  ProLayout,
} from "@ant-design/pro-components";

import {
  defaultSettings,
} from './configs';

import {
  Facebook,
  Github,
  Find,
  Footer, 
} from './components';

import {
  MainPage
} from './pages/Main.jsx'

import { PageContainer } from "@ant-design/pro-components"
import background1 from './assets/background/background-1.png'

function App() {
  return (
    <ProLayout
      prefixCls="my-prefix"
      bgLayoutImgList={[
        {
          src: background1,
          left: 85,
          bottom: 100,
          height: "303px"
        },
        {
          src: background1,
          bottom: -68,
          right: -45,
          height: "303px"
        },
        {
          src: background1,
          bottom: 0,
          left: 0,
          width: "331px"
        }
      ]}
      token={{
        header: {
          colorBgMenuItemSelected: "gray"
        }
      }}
      actionsRender={props => {
        if (props.isMobile) return [
          <Find key="me"/>,
          <Facebook key="facebook"/>,
          <Github key="github"/>,
        ]
        if (typeof window === "undefined") return [
          <Find key="me"/>,
          <Facebook key="facebook"/>,
          <Github key="github"/>,
        ]
        return [
          <Find key="me"/>,
          <Facebook key="facebook"/>,
          <Github key="github"/>,
          ]
      }}      
      footerRender={() => {
        return (
        <Footer />
        )
      }}
      {...defaultSettings}
    >
      
      <PageContainer title={false}>
        <MainPage/>
      </PageContainer>
      
    </ProLayout>
  )
}

export default App
