import React from "react"

import { PageContainer } from "@ant-design/pro-components"

import {
  theme,
  Flex
} from "antd"

import {
  InfoCard,
  WorkInfoCard,
} from "../components"

export const MainPage = () => {

  const { token } = theme.useToken();

  const boxStyle = {
    height: '100vh',
    width: "100%",
  };

  return (
    <>

      <PageContainer title={false}>
      {/* M A I N . */}
        <Flex style={boxStyle} justify={"center"} align={"flex-start"} vertical>
          <div
            style={{
              width: "100%",
              backgroundPosition: "100% -30%",
              backgroundRepeat: "no-repeat",
              backgroundSize: "274px auto",
              backgroundImage:
                "url('./cta-image.webp')"
            }}
          >
            <div
              style={{
                fontSize: "50px",
                fontWeight: "bold",
                color: token.colorTextHeading
              }}
            >
              HI, I'M
            </div>
            <div
              style={{
                fontSize: "60px",
                fontWeight: "bold",
                marginTop: -20,
                color: token.colorTextHeading
              }}
            >
              JUSTINE M.
            </div>
            <div
              style={{
                fontSize: "20px",
                width: "50%",
                color: token.colorTextHeading
              }}
            >
              Software Engineer {"</>, <_"}
            </div>
          </div>
        </Flex>
      </PageContainer>

      <PageContainer title={false}>
      {/* O V E R V I E W . */}
        <Flex style={boxStyle} justify={"center"} align={"flex-start"} vertical>
          <div
            style={{
              fontSize: "20px",
              color: token.colorTextHeading
            }}
          >
            INTRODUCTION
          </div>
          <div
            style={{
              fontSize: "30px",
              fontWeight: "bold",
              color: token.colorTextHeading
            }}
          >
            O V E R V I E W .
          </div>
          <p
            style={{
              fontSize: "14px",
              color: token.colorTextSecondary,
              lineHeight: "22px",
              marginTop: 16,
              marginBottom: 32,
              width: "80%"
            }}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis sapiente ipsum dolorum dicta eaque cumque inventore molestias, beatae ea quaerat alias accusamus voluptas autem! Alias odit voluptates in totam vitae dignissimos minus eaque culpa unde tempore dolore aperiam obcaecati voluptatum aliquam corrupti, suscipit accusamus! Odit unde veniam dolorum ipsum doloribus.
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 16,
              width: "100%"
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
              color: token.colorTextHeading
            }}
          >
            MY SKILLS
          </div>
          <div
            style={{
              fontSize: "30px",
              fontWeight: "bold",
              color: token.colorTextHeading
            }}
          >
            T E C H N O L O G I E S .
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 16,
              marginTop: 20,
              width: "100%"
            }}
          >
            <InfoCard
              image="./dev-icon/react-js.png"
              title="ReactJs"
              desc="is a front-end JavaScript library that is free and open-source and is used to create user interfaces using components."
              href="https://react.dev/"
            />
            <InfoCard
              image="./dev-icon/node-js.png"
              title="Node.js"
              desc="Node.js is an event-driven, asynchronous JavaScript runtime that's meant to help create network apps that scale."
              href="https://nodejs.org/en"
            />
            <InfoCard
              image="./dev-icon/ts.png"
              title="TypeScript"
              desc="To facilitate a more seamless interface with your editor, TypeScript extends JavaScript with new syntax. Find mistakes in your editor early on."
              href="https://www.typescriptlang.org/"
            />
            <InfoCard
              image="./dev-icon/js.png"
              title="JavaScript"
              desc="is a programming language that lets you do pretty much anything, including manipulate multimedia, animate graphics, and generate dynamically changing content."
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
              fontSize: "30px",
              fontWeight: "bold",
              color: token.colorTextHeading
            }}
          >
            P R O J E C T S .
          </div>
          <p
            style={{
              fontSize: "14px",
              color: token.colorTextSecondary,
              lineHeight: "22px",
              marginTop: 16,
              marginBottom: 32,
              width: "80%"
            }}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis sapiente ipsum dolorum dicta eaque cumque inventore molestias, beatae ea quaerat alias accusamus voluptas autem! Alias odit voluptates in totam vitae dignissimos minus eaque culpa unde tempore dolore aperiam obcaecati voluptatum aliquam corrupti, suscipit accusamus! Odit unde veniam dolorum ipsum doloribus.
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 16,
              width: "100%"
            }}
          >
            <InfoCard
              image="./project-icon/peso.png"
              title="P E S O"
              desc="Description"
              href=""
            />
            <InfoCard
              image="./soon.png"
              title="Coming soon"
              desc="Description"
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
              fontSize: "30px",
              fontWeight: "bold",
              color: token.colorTextHeading
            }}
          >
            W O R K E X P E R I E N C E .
          </div>
          <p
            style={{
              fontSize: "14px",
              color: token.colorTextSecondary,
              lineHeight: "22px",
              marginTop: 16,
              marginBottom: 32,
              width: "80%"
            }}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis sapiente ipsum dolorum dicta eaque cumque inventore molestias, beatae ea quaerat alias accusamus voluptas autem! Alias odit voluptates in totam vitae dignissimos minus eaque culpa unde tempore dolore aperiam obcaecati voluptatum aliquam corrupti, suscipit accusamus! Odit unde veniam dolorum ipsum doloribus.
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 16,
              width: "100%"
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