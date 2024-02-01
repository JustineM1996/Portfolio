import React from "react"

import { PageContainer } from "@ant-design/pro-components"

import {
  theme,
  Flex
} from "antd"

import {
  InfoCard,
  WorkInfoCard,
  ProjectsInfoCard,
} from "../components"

export const MainPage = () => {

  const { token } = theme.useToken();

  const boxStyle = {
    width: "100%",
    height: "auto"
  };

  return (
    <>
      <PageContainer title={false}>
      {/* M A I N . */}
        <Flex  justify={"center"} align={"flex-start"} vertical style={{height: "100vh"}}>
          <div
            style={{
              width: "100%",
              backgroundPosition: "100% -30%",
              backgroundRepeat: "no-repeat",
              backgroundSize: "274px auto",
              backgroundImage:"url('././background/cta-image.webp')",
            }}
          >
            <div
              style={{
                fontSize: "50px",
                fontWeight: "bold",
                color: token.colorTextHeading,
                display: "flex",
              }}
            >
              HI, I'M
            </div>
            <div
              style={{
                fontSize: "60px",
                fontWeight: "bold",
                marginBottom: -15,
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
      </PageContainer>

      <PageContainer title={false}>
      {/* O V E R V I E W . */}
        <Flex style={boxStyle} justify={"center"} align={"flex-start"} vertical >
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
              fontSize: "40px",
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
              width: "85%",
              marginBottom: 50,
            }}
          >
            I'm Justine M. Hilario 27 years old from City of Malolos, Bulacan.
            My recent job is Jr. Software Engineer and Jr. Prorammer for almost 2 years.
            <dr/>
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
              image="./dev-icon/react-js.png"
              title="Frontend Developer"
              desc="Web developers that specialise in front-end development use computer programming languages such as JavaScript, HTML, and CSS to create websites."
              href="https://www.coursera.org/articles/front-end-developer"
            />
            <InfoCard
              image="./dev-icon/node-js.png"
              title="Backend Developer"
              desc="A back-end developer is a kind of programmer who develops a website, software, or information system's logical backend and basic computational logic."
              href="https://www.coursera.org/articles/back-end-developer"
            />
          </div>
        </Flex>
      </PageContainer>

      <PageContainer title={false}>
      {/* T E C H N O L O G I E S . */}
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
              fontSize: "40px",
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
              width: "100%",
            }}
          >
            <InfoCard
              image="./dev-icon/react-js.png"
              title="ReactJs"
              href="https://react.dev/"
            />
            <InfoCard
              image="./dev-icon/node-js.png"
              title="Node.js"
              href="https://nodejs.org/en"
            />
            <InfoCard
              image="./dev-icon/ts.png"
              title="TypeScript"
              href="https://www.typescriptlang.org/"
            />
            <InfoCard
              image="./dev-icon/js.png"
              title="JavaScript"
              href="https://www.javascript.com/"
            />
          </div>
        </Flex>
      </PageContainer>

      <PageContainer title={false}>
      {/* P R O J E C T S . */}
        <Flex style={boxStyle} justify={"center"} align={"flex-start"} vertical>
          <div
            style={{
              fontSize: "40px",
              fontWeight: "bold",
              color: token.colorTextHeading,
              display: "flex",
            }}
          >
            P R O J E C T S .
          </div>
          <p
            style={{
              fontSize: "16px",
              color: token.colorTextSecondary,
              lineHeight: "22px",
              marginTop: 16,
              marginBottom: 50,
              width: "85%"
            }}
          >
            These projects provide practical examples of some of my work along with interactive demonstrations that demonstrate the skill, brief explanations, and links to source material. 
            They show that I can handle challenging issues, adapt to new technologies, and lead projects successfully.
          </p>
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
              image="./project-icon/peso.png"
              image2="./project-icon/peso-page.png"
              title="P E S O"
              desc="It is an online employment platform that lists employers, openings, and announcements."
              href=""
            />
            <ProjectsInfoCard
              image="./project-icon/soon.png"
              image2=""
              title="Coming soon"
              desc=""
              href=""
            />
          </div>
        </Flex>
      </PageContainer>

      <PageContainer title={false}>
      {/* W O R K E X P E R I E N C E . */}
        <Flex style={boxStyle} justify={"center"} align={"flex-start"} vertical>
          <div
            style={{
              fontSize: "40px",
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
              image="./company-icon/gp-next-solution-inc.png"
              title="Software Engineer"
              date="Nov 2021 - Jan 2023"
              href="https://web.facebook.com/gpnext2020/?_rdc=1&_rdr"
            />
            <WorkInfoCard
              image="./company-icon/lloyd-laboratoties-inc.jpeg"
              title="Junior Programmer"
              date="June 2023 - Dec 2023"
              href="https://lloydlab.com/"
            />
          </div>
        </Flex>
      </PageContainer>

    </>
  )
}
