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
  return (
    <ProLayout
      stylish={false}
      disableMobile={true}
      collapsed={false}
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
          heightLayoutHeader: 0,
        },
        sider: {
          hide: true,
          colorBgCollapsedButton: 'hide',
          colorTextCollapsedButtonHover: 'hide',
          colorTextCollapsedButton: 'hide',
          colorMenuBackground: 'hide',
          menuHeight: 'hide',
          colorBgMenuItemCollapsedElevated: 'hide',
          colorMenuItemDivider: 'hide',
          colorBgMenuItemHover: 'hide',
          colorBgMenuItemActive: 'hide',
          colorBgMenuItemSelected: 'hide',
          colorTextMenuSelected: 'hide',
          colorTextMenuItemHover: 'hide',
          colorTextMenuActive: 'hide',
          colorTextMenu: 'hide',
          colorTextMenuSecondary: 'hide',
          paddingInlineLayoutMenu: 0,
          paddingBlockLayoutMenu: 0,
          colorTextMenuTitle: 'hide',
          colorTextSubMenuSelected: 'hide',
        }
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
