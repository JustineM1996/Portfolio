import React from 'react';

import {
  ProCard,
} from '@ant-design/pro-components';

import {
  theme,
  Flex
} from "antd"

import {
  TechnologyInfoCard,
  WorkInfoCard,
  ProjectsInfoCard,
  FooterInfoCard
} from "../components"

import ctaimage from '../assets/background/cta-image.webp'

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

import email from '../assets/social-icon/email.png'
import facebook from '../assets/social-icon/facebook.png'
import github from '../assets/social-icon/github.png'
import indeed from '../assets/social-icon/indeed.png'
import logo from '../assets/social-icon/logo.png'

export const MainPage = () => {

  const { token } = theme.useToken();

  const boxStyle = {
    width: '100%',
    height: 'auto',
    minHeight: "80vh",
  };
  
  return (
    <>
      {/* M A I N . */}
      <ProCard
        style={{
          marginBottom: 50,
          background: "transparent"
        }}
      >
        <Flex style={boxStyle} justify={"center"} align={"flex-start"} vertical>
          <div
            style={{
              width: "100%",
              backgroundPosition: "100% -30%",
              backgroundRepeat: "no-repeat",
              backgroundSize: "274px auto",
              backgroundImage:'url' + ctaimage,
            }}
          >
            <div
              style={{
                fontSize: "60px",
                fontWeight: "bold",
                color: token.colorTextHeading,
                display: "flex",
              }}
            >
              HI, I'M JUSTINE M.
            </div>
            <div
              style={{
                fontSize: "20px",
                width: "100%",
                color: token.colorTextHeading,
              }}
            >
              Software Engineer {"</>, <_"}
            </div>
          </div>
        </Flex>
      </ProCard>

      {/* O V E R V I E W . */}
      <ProCard
        style={{
          marginBottom: 50,
          background: "transparent"
        }}
      >
        <Flex style={boxStyle} justify={"center"} align={"flex-start"} vertical>
        <div
          style={{
            fontSize: "20px",
            color: token.colorTextHeading,
            display: "flex",
          }}
        >
          INTRODUCTION
        </div>
        <div
          style={{
            fontSize: "30px",
            fontWeight: "bold",
            color: token.colorTextHeading,
            display: "flex",
          }}
        >
          O V E R V I E W .
        </div>
        <p
          style={{
            fontSize: "16px",
            color: token.colorTextSecondary,
            lineHeight: "22px",
            width: "75%",
          }}
        >
          I'm Justine M. Hilario, a 27 yr old resident of Bulacan City of Malolos.
          I have a bachelor degree in information system, and I have worked as a software engineer for almost 2 years.
          <p>
          I'm still willing to learn new things right now in order to expand my programming knowledge and abilities.
          </p>
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 16,
            width: "100%",
          }}
        >
          <TechnologyInfoCard
            image={website}
            title="Website Development"
          />
          <TechnologyInfoCard
            image={software}
            title="Software Development"
          />
          <TechnologyInfoCard
            image={thirdparty}
            title="Third-Party Integration"
          />
        </div>
        </Flex>
      </ProCard>

      {/* T E C H N O L O G I E S . */} 
      <ProCard
        style={{
          marginBottom: 50,
          background: "transparent"
        }}
      >
        <Flex style={boxStyle} justify={"center"} align={"flex-start"} vertical>
          <div
            style={{
              fontSize: "20px",
              color: token.colorTextHeading,
              display: "flex",
            }}
          >
            MY SKILLS
          </div>
          <div
            style={{
              fontSize: "30px",
              fontWeight: "bold",
              color: token.colorTextHeading,
              marginBottom: 50,
              display: "flex",
            }}
          >
            T E C H N O L O G I E S .
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 16,
            }}
          >
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
              title="ReactJs"
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
      <ProCard
        style={{
          marginBottom: 50,
          background: "transparent"
        }}
      >
        <Flex style={boxStyle} justify={"center"} align={"flex-start"} vertical>
          <div
            style={{
              fontSize: "30px",
              fontWeight: "bold",
              color: token.colorTextHeading,
              display: "flex",
              marginBottom: 50,
            }}
          >
            P R O J E C T S .
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 16,
              width: "100%",
              height: "100vh auto"
            }}
          >
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
      <ProCard
        style={{
          marginBottom: 50,
          background: "transparent"
        }}
      >
        <Flex style={boxStyle} justify={"center"} align={"flex-start"} vertical>
          <div
            style={{
              fontSize: "30px",
              fontWeight: "bold",
              color: token.colorTextHeading,
              marginBottom: 50,
              display: "flex",
            }}
          >
            W O R K - E X P E R I E N C E .
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 16,
              width: "100%",
            }}
          >
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

      {/* T E C H N O L O G I E S . */} 
      <ProCard
        style={{
          height: "30%",
          background: "transparent"
        }}
      >
        <Flex wrap="wrap" gap="small">
          <Flex style={boxStyle} justify={"center"} align={"flex-start"} vertical>
          <div
            style={{
              fontSize: "30px",
              fontWeight: "bold",
              color: token.colorTextHeading,
              marginBottom: 50,
              display: "flex",
            }}
          >
            FIND ME ON !
          </div>
            <div
              style={{
                gap: 16,
              }}
            >
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
        </Flex>
      </ProCard>
    </>
  )
}
