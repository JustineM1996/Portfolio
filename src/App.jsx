import React, { useState } from "react";

import {
  ConfigProvider,
  theme,
  Tooltip,
  FloatButton
} from "antd";

import { MoonFilled } from "@ant-design/icons"

import {
  ProLayout,
} from "@ant-design/pro-components";

import {
  defaultSettings,
} from './configs';

import {
  MainPage
} from './pages/Main.jsx'

import { PageContainer } from "@ant-design/pro-components"
import background1 from './assets/background/background-1.png'

function App() {

  const { defaultAlgorithm, darkAlgorithm } = theme;
  const [isDarkMode, setIsDarkMode] = useState(false);
 
  const handleClick = () => {
   setIsDarkMode((previousValue) => !previousValue);
  };
  
  return (
    <ConfigProvider
      theme={{
        algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
      }}
    >
      <ProLayout
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
            colorBgHeader: 'hide',
            colorBgScrollHeader: 'hide',
            colorHeaderTitle: 'hide',
            colorBgMenuItemHover: 'hide',
            colorBgMenuElevated: 'hide',
            colorBgMenuItemSelected: 'hide',
            colorTextMenuSelected: 'hide',
            colorTextMenuActive: 'hide',
            colorTextMenu: 'hide',
            colorTextMenuSecondary: 'hide',
            colorBgRightActionsItemHover: 'hide',
            colorTextRightActionsItem: 'hide',
            heightLayoutHeader: -100,
          },
        }}
        prefixCls="my-prefix"
        disableMobile={true}
        {...defaultSettings}
      >
        <PageContainer title={false}>
          <Tooltip placement="leftTop" title={"Dark Mode"}>
            <FloatButton icon={<MoonFilled />} onClick={handleClick} />
          </Tooltip>
          <MainPage/>
        </PageContainer>
      </ProLayout>
    </ConfigProvider>
  )
}

export default App
