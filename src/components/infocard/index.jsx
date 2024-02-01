import {
    Image,
    theme 
} from "antd"

import React from "react"

export const InfoCard = ({ title, href, desc, image }) => {

  const { useToken } = theme
  const { token } = useToken()

  return (
    <div
        style={{
            backgroundColor: token.colorBgContainer,
            boxShadow: token.boxShadow,
            borderRadius: "8px",
            fontSize: "14px",
            color: token.colorTextSecondary,
            lineHeight: "22px",
            padding: "16px 19px",
            minWidth: "220px",
            flex: 1
        }}
    >

        <div
            style={{
                display: "flex",
                gap: "4px",
                alignItems: "center"
            }}
        >

            <div
                style={{
                    width: 48,
                    height: 48,
                    lineHeight: "22px",
                    backgroundSize: "100%",
                    textAlign: "center",
                    padding: "8px 16px 16px 12px",
                    color: "#FFF",
                    fontWeight: "bold"
                }}
            >
                <Image src={image}/>
            </div>

            <div
                style={{
                    fontSize: "16px",
                    color: token.colorText,
                    paddingBottom: 8
                }}
            >
                {title}
            </div>

        </div>

        <div
            style={{
                fontSize: "14px",
                color: token.colorTextSecondary,
                textAlign: "justify",
                lineHeight: "22px",
                marginBottom: 8
            }}
        >
            {desc}
        </div>

        <a href={href} target="_blank" rel="noreferrer">
           {/* Link {">"} */}
        </a>

    </div>
  )
}
