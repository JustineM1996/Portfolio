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
      {...defaultSettings}
    >
      <PageContainer title={false}>
        <MainPage/>
      </PageContainer>
    </ProLayout>
  )
}

export default App
