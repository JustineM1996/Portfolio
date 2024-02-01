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
  Name,
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
      id="test-pro-layout"
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
            colorBgMenuItemSelected: "rgba(0,0,0,0.04)"
          }
        }}

        actionsRender={props => {
          if (props.isMobile) return []
          if (typeof window === "undefined") return []
          return [
            <Facebook key="facebook"/>,
            <Github key="github"/>,
            <Name key="name"/>,         
            ]
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
