import { Link, useLocation } from "react-router-dom";

import {
  ProLayout,
} from "@ant-design/pro-components";

import {
  defaultSettings,
  menu,
  routes
} from './configs';

import {
  Facebook,
  Github,
  Find,
  Footer, 
} from './components';

import Router from './routes.js';

function App() {

  const location = useLocation();
  const path = location.pathname === '/' ? location.pathname : location.pathname
  
  if (typeof document === "undefined") {
    return <div />
  }
  
  return (
    <div
      style={{
        height: "100vh",
        overflow: "auto"
      }}
    >
      <ProLayout

        {...menu}

        location={location}

        menuItemRender={(item, defaultDom) => (
          <Link to={item.path}> {defaultDom} </Link>
        )}

        menu={{
          collapsedShowGroupTitle: true
        }}

        siderMenuType="classic"

        prefixCls="my-prefix"

        bgLayoutImgList={[
          {
            src: "./background/background-1.png",
            left: 85,
            bottom: 100,
            height: "303px"
          },
          {
            src: "./background/background-1.png",
            bottom: -68,
            right: -45,
            height: "303px"
          },
          {
            src: "./background/background-1.png",
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

        <Router
          routes={routes}
          path={path}
        />
          
      </ProLayout>
    </div>
  )
}

export default App
