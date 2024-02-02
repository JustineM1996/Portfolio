import React from 'react';

import {
  ProCard,
} from '@ant-design/pro-components';

import {
  theme,
  Flex
} from "antd"

import {
  InfoCard,
  WorkInfoCard,
  ProjectsInfoCard,
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
                fontSize: "50px",
                fontWeight: "bold",
                color: token.colorTextHeading,
                display: "flex",
                marginBottom: -15,
              }}
            >
              HI, I'M
            </div>
            <div
              style={{
                fontSize: "60px",
                fontWeight: "bold",
                color: token.colorTextHeading,
                display: "flex",
              }}
            >
              JUSTINE M.
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
            width: "83%",
            marginBottom: 50,
          }}
        >
          I'm Justine M. Hilario 27 years old from City of Malolos, Bulacan.
          My recent job is Software Engineer for almost 2 years.
          As of now I am still willing to learn to widen my knowledge and skills when it comes to programming.
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 16,
            width: "100%",
          }}
        >
          <InfoCard
            image={website}
            title="Website Development"
          />
          <InfoCard
            image={software}
            title="Software Development"
          />
          <InfoCard
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
            <InfoCard
              image={html5}
              title="HTML"
              href="https://www.w3schools.com/html/"
            />
            <InfoCard
              image={css}
              title="CSS"
              href="https://www.w3schools.com/css/"
            />
            <InfoCard
              image={mysql}
              title="MySql"
              href="https://www.w3schools.com/mysql/"
            />
            <InfoCard
              image={reactjs}
              title="ReactJs"
              href="https://react.dev/"
            />
            <InfoCard
              image={nodejs}
              title="Node.js"
              href="https://nodejs.org/en"
            />
            <InfoCard
              image={js}
              title="JavaScript"
              href="https://www.javascript.com/"
            />
            <InfoCard
              image={antdesign}
              title="Ant Design"
              href="https://www.javascript.com/"
            />
            <InfoCard
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
    </>
  )
}
