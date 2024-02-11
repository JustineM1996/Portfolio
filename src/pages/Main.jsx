import './main-scss/index.js'

import React from 'react'

import {
  ProCard,
} from '@ant-design/pro-components'

import {
  theme,
  Flex
} from "antd"

import {
  OverviewInfoCard,
  TechnologyInfoCard,
  WorkInfoCard,
  ProjectsInfoCard,
  FooterInfoCard
} from "../components"

import website from '../assets/just-icon/website-development.png'
import software from '../assets/just-icon/software-development-.png'
import thirdparty from '../assets/just-icon/thrid-party.png'

import html5 from '../assets/dev-icon/html5.png'
import css from '../assets/dev-icon/css.png'
import mysql from '../assets/dev-icon/mysql.png'
import reactjs from '../assets/dev-icon/react-js.png'

import nodejs from '../assets/dev-icon/node-js.png'
import js from '../assets/dev-icon/js.png'
import antdesign from '../assets/dev-icon/ant-design.png'
import git from '../assets/dev-icon/git.png'

import peso from '../assets/project-icon/peso.png'
import pesopage from '../assets/project-icon/peso-page.png'
import soon from '../assets/project-icon/soon.png'
import gpnextsolutioninc from '../assets/company-icon/gp-next-solution-inc.png'
import lloydlaboratoriesinc from '../assets/company-icon/lloyd-laboratoties-inc.jpeg'

import logo from '../assets/social-icon/logo.png'
import email from '../assets/social-icon/email.png'
import facebook from '../assets/social-icon/facebook.png'
import github from '../assets/social-icon/github.png'
import indeed from '../assets/social-icon/indeed.webp'

export const MainPage = () => {

  const { token } = theme.useToken()
  const style = { color: token.colorTextHeading }

  return (
    <div className='module-page'>

      {/* M A I N - P A G E . */}
      <ProCard className="main-page">
        <Flex className='flex-main-page' justify='center' align='flex-start' vertical>
          <div className='name' style={style}> HI, I'M JUSTINE M. </div>
          <div className='position' style={style}> Software Engineer {'</>, <_'} </div>
        </Flex>
      </ProCard>

      {/* O V E R V I E W - P A G E . */}
      <ProCard className="overview-page">
        <Flex className='flex-overview-page' justify='center' align='flex-start' vertical>
          <div className='introduction' style={style}> INTRODUCTION </div>
          <div className='overview' style={style}> O V E R V I E W . </div>
          <p className='overview-description'>
            I'm Hilario Justine M., 27 years old and resident of City of Malolos, Bulacan.
            I have a bachelor degree in information system and I have worked as a software engineer for almost 2 years.
          </p> 
          <p className='overview-description-1'>
            I'm still willing to learn new things right now in order to expand my programming knowledge and abilities.
          </p>
          <div className='overview-infocard'>
            <OverviewInfoCard
              image={website}
              title="Website Development"
            />
            <OverviewInfoCard
              image={software}
              title="Software Development"
            />
            <OverviewInfoCard
              image={thirdparty}
              title="Third-Party Integration"
            />
          </div>
        </Flex>
      </ProCard>

      {/* T E C H N O L O G I E S . */} 
      <ProCard className="technology-page">
        <Flex className='flex-technology-page' justify='center' align='flex-start' vertical>
          <div className='my-skills' style={style}> MY SKILLS </div>
          <div className='technology' style={style}> T E C H N O L O G I E S . </div>
          <div className='technology-infocard'>
            <TechnologyInfoCard
              image={html5}
              title="HTML"
              href="https://www.w3schools.com/html/"
            />
            <TechnologyInfoCard
              image={css}
              title="CSS"
              href="https://www.w3schools.com/css/"
            />
            <TechnologyInfoCard
              image={mysql}
              title="MySql"
              href="https://www.w3schools.com/mysql/"
            />
            <TechnologyInfoCard
              image={reactjs}
              title="React JS"
              href="https://react.dev/"
            />
            <TechnologyInfoCard
              image={nodejs}
              title="Node.js"
              href="https://nodejs.org/en"
            />
            <TechnologyInfoCard
              image={js}
              title="JavaScript"
              href="https://www.javascript.com/"
            />
            <TechnologyInfoCard
              image={antdesign}
              title="Ant Design"
              href="https://www.javascript.com/"
            />
            <TechnologyInfoCard
              image={git}
              title="Git"
              href="https://www.javascript.com/"
            />
          </div>
        </Flex>
      </ProCard>

      {/* P R O J E C T S . */}
      <ProCard className='project-page'>
        <Flex className='flex-project-page' justify='center' align='flex-start' vertical>
          <div className='project' style={style}> P R O J E C T S . </div>
          <div className='project-infocard'>
            <ProjectsInfoCard
              image={peso}
              image2={pesopage}
              title="P E S O"
              desc="It is an online employment platform that lists employers, openings, and announcements."
              href=""
            />
            <ProjectsInfoCard
              image={soon}
              image2=""
              title="Coming soon"
              desc=""
              href=""
            />
          </div>
        </Flex>
      </ProCard>

      {/* W O R K E X P E R I E N C E . */}
      <ProCard className='work-experience-page'>
        <Flex className='flex-work-experience-page' justify='center' align='flex-start' vertical>
          <div className='work-experience' style={style}> W O R K - E X P E R I E N C E . </div>
          <div className='work-experience-infocard'>
            <WorkInfoCard
              image={gpnextsolutioninc}
              title="Software Engineer"
              date="Nov 2021 - Jan 2023"
              href="https://web.facebook.com/gpnext2020/?_rdc=1&_rdr"
            />
            <WorkInfoCard
              image={lloydlaboratoriesinc}
              title="Junior Programmer"
              date="June 2023 - Dec 2023"
              href="https://lloydlab.com/"
            />
          </div>
        </Flex>
      </ProCard>

      {/* F O O T E R . */} 
      <ProCard className='footer-page'>
        <Flex className='flex-footer-page' justify='center' align='flex-start' vertical>
          <div className='footer' style={style}> FIND ME ON ! </div>
          <div className='footer-infocard'>
            <FooterInfoCard
              image={logo}
              title="JustHIL1996"
            />
            <FooterInfoCard
              image={email}
              title="JustineMHilario@gmail.com"
              href="https://mail.google.com/mail/u/0/#inbox"
            />
            <FooterInfoCard
              image={facebook}
              title="Facebook"
              href="https://www.facebook.com/justine1996"
            />
            <FooterInfoCard
              image={github}
              title="GitHub"
              href="https://github.com/JustineM1996"
            />
            <FooterInfoCard
              image={indeed}
              title="Indeed"
              href="https://www.w3schools.com/css/"
            />
          </div>
        </Flex>
      </ProCard>

    </div>
  )
}
