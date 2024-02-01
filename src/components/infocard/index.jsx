import {
    Card,
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
                    width: 60,
                    height: 60,
                    lineHeight: "22px",
                    backgroundSize: "100%",
                    textAlign: "center",
                    padding: "8px 16px 16px 12px",
                    color: "#FFF",
                    fontWeight: "bold"
                }}
            >
                <Image src={image} style={{borderRadius: 2,}}/>
            </div>

            <div
                style={{
                    fontSize: "20px",
                    color: token.colorText,
                    paddingBottom: 8
                }}
            >
                <a href={href} target="_blank" rel="noreferrer" style={{color: token.colorText,}} >
                    {title}
                </a>
            </div>

        </div>

        <div
            style={{
                display: "flex",
                alignItems: "center",
                fontSize: "14px",
                color: token.colorTextSecondary,
                textAlign: "justify",
                lineHeight: "22px",
                marginBottom: 8,
            }}
        >
            {desc}
        </div>

    </div>

  )

}

export const ProjectsInfoCard = ({ title, date, href, image, image2, desc }) => {

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
                flex: 1,
            }}
        >
  
            <div
                style={{
                    display: "flex",
                    gap: "4px",
                    alignItems: "center",
                }}
            >
  
                <div
                    style={{
                        width: 80,
                        height: 80,
                        lineHeight: "22px",
                        backgroundSize: "100%",
                        padding: "8px 16px 16px 12px",
                    }}
                >
                    <Image src={image} style={{borderRadius: 2,}}/>
                </div>
    
                <div
                    style={{
                        fontSize: "20px",
                        color: token.colorText,
                        paddingBottom: 8,
                        marginTop: 10
                    }}
                >
                    <a href={href} target="_blank" rel="noreferrer" style={{color: token.colorText,}} >
                        {title}
                    </a>

                    <div
                        style={{
                            fontSize: "14px",
                            color: token.colorTextSecondary,
                            textAlign: "justify",
                            lineHeight: "28px",
                            marginBottom: 8
                        }}
                    >
                        {date}
                    </div>

                </div>

            </div>
            
            <div
                style={{
                    display: "flex",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "274px auto",
                    marginBottom: 32,
                }}
            >
                <Image src={image2} style={{borderRadius: 2,}}/>
            </div>

            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "14px",
                    color: token.colorTextSecondary,
                    textAlign: "justify",
                    lineHeight: "22px",
                    marginBottom: 8,
                }}
            >
                {desc}
            </div>
            
        </div>
    )

}
  

export const WorkInfoCard = ({ title, date, href, image, desc }) => {

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
                flex: 1,
            }}
        >
  
            <div
                style={{
                    display: "flex",
                    gap: "4px",
                    alignItems: "center",
                }}
            >
  
                <div
                    style={{
                        width: 80,
                        height: 80,
                        lineHeight: "22px",
                        backgroundSize: "100%",
                        padding: "8px 16px 16px 12px",
                    }}
                >
                    <Image src={image} style={{borderRadius: 2,}}/>
                </div>
    
                <div
                    style={{
                        fontSize: "20px",
                        color: token.colorText,
                        paddingBottom: 8,
                        marginTop: 10
                    }}
                >
                    <a href={href} target="_blank" rel="noreferrer" style={{color: token.colorText,}} >
                        {title}
                    </a>

                    <div
                        style={{
                            fontSize: "14px",
                            color: token.colorTextSecondary,
                            textAlign: "justify",
                            lineHeight: "28px",
                            marginBottom: 8
                        }}
                    >
                        {date}
                    </div>

                </div>

            </div>

            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "14px",
                    color: token.colorTextSecondary,
                    textAlign: "justify",
                    lineHeight: "22px",
                    marginBottom: 8,
                }}
            >
                {desc}
            </div>
            
        </div>
    )

}
  