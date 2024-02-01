import React from "react"

import { PageContainer } from "@ant-design/pro-components"

import {
  theme
} from "antd"

import {
  InfoCard
} from "../components"

export const ProjectsPage = () => {

  const { token } = theme.useToken();

  return (
    <PageContainer title={false}>
      <div
        style={{
          fontSize: "20px",
          color: token.colorTextHeading
        }}
      >
        CASE STUDIES
      </div>

      <div
        style={{
          fontSize: "35px",
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
          width: "100%"
        }}
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis sapiente ipsum dolorum dicta eaque cumque inventore molestias, beatae ea quaerat alias accusamus voluptas autem! Alias odit voluptates in totam vitae dignissimos minus eaque culpa unde tempore dolore aperiam obcaecati voluptatum aliquam corrupti, suscipit accusamus! Odit unde veniam dolorum ipsum doloribus.
      </p>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 16
        }}
      >
        <InfoCard
          image="./logo192.png"
          href=""
          title="Project 1"
          desc="Description"
        />
        <InfoCard
          image="./logo192.png"
          title="Project 2"
          href=""
          desc="Description"
        />
      </div>
    </PageContainer>
  )
}

export const WorkexpsPage = () => {

  const { token } = theme.useToken();

  return (
    <PageContainer title={false}>
      <div
        style={{
          fontSize: "20px",
          color: token.colorTextHeading
        }}
      >
        WHAT I'VE DONE SO FAR
      </div>

      <div
        style={{
          fontSize: "35px",
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
          width: "100%"
        }}
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis sapiente ipsum dolorum dicta eaque cumque inventore molestias, beatae ea quaerat alias accusamus voluptas autem! Alias odit voluptates in totam vitae dignissimos minus eaque culpa unde tempore dolore aperiam obcaecati voluptatum aliquam corrupti, suscipit accusamus! Odit unde veniam dolorum ipsum doloribus.
      </p>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 16
        }}
      >
        <InfoCard
          image="./logo192.png"
          title="Software Engineer"
          desc="Description"
        />
        <InfoCard
          image="./logo192.png"
          title="Junior Programmer"
          desc="Description"
        />
      </div>
    </PageContainer>
  )
}

export const MainPage = () => {

  const { token } = theme.useToken();

  return (
    <>
      <PageContainer title={false}>
        {/* M A I N . */}
        <div
          style={{
            backgroundPosition: "100% -30%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "274px auto",
            backgroundImage:
              "url('./logo192.png')"
          }}
        >
          <div
            style={{
              fontSize: "70px",
              fontWeight: "bold",
              color: token.colorTextHeading
            }}
          >
            JUSTINE M.
          </div>

          <div
            style={{
              fontSize: "30px",
              color: token.colorTextHeading
            }}
          >
            Description
          </div>

        </div>
      </PageContainer>

      <PageContainer title={false}>
        {/* O V E R V I E W . */}
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
            fontSize: "35px",
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
            width: "100%"
          }}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis sapiente ipsum dolorum dicta eaque cumque inventore molestias, beatae ea quaerat alias accusamus voluptas autem! Alias odit voluptates in totam vitae dignissimos minus eaque culpa unde tempore dolore aperiam obcaecati voluptatum aliquam corrupti, suscipit accusamus! Odit unde veniam dolorum ipsum doloribus.
        </p>
        
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 16
          }}
        >
          <InfoCard
            image="./logo192.png"
            href=""
            title="Frontend Developer"
            desc="Description"
          />
          <InfoCard
            image="./logo192.png"
            title="Backend Developer"
            href=""
            desc="Description"
          />
        </div>
      </PageContainer>
      
      <PageContainer title={false}>
        {/* T E C H N O L O G I E S . */}
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
            fontSize: "35px",
            fontWeight: "bold",
            color: token.colorTextHeading
          }}
        >
          T E C H N O L O G I E S .
        </div>

        <p
          style={{
            fontSize: "14px",
            color: token.colorTextSecondary,
            lineHeight: "22px",
            marginTop: 16,
            marginBottom: 32,
            width: "100%"
          }}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis sapiente ipsum dolorum dicta eaque cumque inventore molestias, beatae ea quaerat alias accusamus voluptas autem! Alias odit voluptates in totam vitae dignissimos minus eaque culpa unde tempore dolore aperiam obcaecati voluptatum aliquam corrupti, suscipit accusamus! Odit unde veniam dolorum ipsum doloribus.
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 16
          }}
        >
          <InfoCard
            image="./dev-icon/react-js.png"
            href=""
            title="ReactJs"
            desc="Description"
          />
          <InfoCard
            image="./dev-icon/node-js.png"
            title="Node.js"
            href=""
            desc="Description"
          />
          <InfoCard
            image="./dev-icon/ts.png"
            href=""
            title="TypeScript"
            desc="Description"
          />
          <InfoCard
            image="./dev-icon/js.png"
            href=""
            title="JavaScript"
            desc="Description"
          />
        </div>
      </PageContainer>

        <ProjectsPage/> {/* P R O J E C T S . */}
        <WorkexpsPage/> {/* W O R K E X P E R I E N C E . */}

    </>
  )
}