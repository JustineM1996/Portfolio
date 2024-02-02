import {
    Image,
    theme
} from "antd"

import React from "react"

export const TechnologyInfoCard = ({ title, href, image }) => {

    const { useToken } = theme
    const { token } = useToken()

    return (

        <div
            style={{
                backgroundColor: token.colorBgContainer,
                boxShadow: token.boxShadow,
                borderRadius: "5px",
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
                    gap: "8px",
                    alignItems: "center",
                    marginTop: 10
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
                    <Image src={image}/>
                </div>

                <div
                    style={{
                        fontSize: "18px",
                        color: token.colorText,
                        paddingBottom: 8
                    }}
                >
                    <a href={href} target="_blank" rel="noreferrer" style={{color: token.colorText,}} >
                        {title}
                    </a>
                </div>

            </div>

        </div>

    )

}

export const ProjectsInfoCard = ({ title, href, image, image2, desc }) => {

    const { useToken } = theme
    const { token } = useToken()
  
    return (

        <div
            style={{
                backgroundColor: token.colorBgContainer,
                boxShadow: token.boxShadow,
                borderRadius: "8px",
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
                    gap: "8px",
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
                        fontSize: "18px",
                        color: token.colorText,
                        paddingBottom: 8,
                        marginTop: 10
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
  
export const WorkInfoCard = ({ title, date, href, image }) => {

    const { useToken } = theme
    const { token } = useToken()
  
    return (

        <div
            style={{
                backgroundColor: token.colorBgContainer,
                boxShadow: token.boxShadow,
                borderRadius: "8px",
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
                    marginTop: 10
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

        </div>

    )

}


export const FooterInfoCard = ({ title, href, image }) => {

    const { useToken } = theme
    const { token } = useToken()

    return (

        <div
            style={{
                backgroundColor: false,
                boxShadow: token.boxShadow,
                borderRadius: "5px",
                color: token.colorTextSecondary,
                minWidth: "330px",
                flex: 1,
            }}
        >
        
            <div
                style={{
                    display: "flex",
                    gap: "8px",
                    alignItems: "center",
                    marginTop: 10
                }}
            >

                <div
                    style={{
                        width: 60,
                        height: 60,
                        lineHeight: "22px",
                        backgroundSize: "100%",
                        padding: "8px 16px 16px 12px",
                        marginTop: 10
                    }}
                >
                    <Image src={image}/>
                </div>

                <div
                    style={{
                        fontSize: "18px",
                        color: token.colorText,
                        paddingBottom: 8,
                        marginTop: 10
                    }}
                >
                    <a href={href} target="_blank" rel="noreferrer" style={{color: token.colorText,}} >
                        {title}
                    </a>
                </div>
                
            </div>

        </div>

    )

}