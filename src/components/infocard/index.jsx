import './infocard-scss/index.js'

import {
    Image,
    theme
} from "antd"

import React from "react"


export const TechnologyInfoCard = ({ title, href, image }) => {

    const { useToken } = theme
    const { token } = useToken()

    const style = {
        backgroundColor: token.colorBgContainer,
        boxShadow: token.boxShadow,
        color: token.colorTextSecondary,
    }
    
    return (
        <div style={style} className='infocard-technology-page'>
            <div className='group-technology-page'>
                <div className='technology-image'>
                    <Image src={image} />
                </div>
                <div className='technology-title'>
                    {title}
                </div>
            </div>
        </div>
    )
}

export const ProjectsInfoCard = ({ title, href, image, image2, desc }) => {

    const { useToken } = theme
    const { token } = useToken()
    
    const style = {
        backgroundColor: token.colorBgContainer,
        boxShadow: token.boxShadow,
        color: token.colorTextSecondary,
    }
    
    return (
        <div style={style} className='infocard-project-page'>
            <div className='group-project-page'>
                <div className='project-image'>
                    <Image src={image} style={{borderRadius: 2,}}/>
                </div>
                <div className='project-title'>
                    <a href={href} target="_blank" rel="noreferrer" style={{color: token.colorText,}} >
                        {title}
                    </a>
                </div>
            </div>
            <div className='project-image-1'>
                <Image src={image2} style={{borderRadius: 2,}}/>
            </div>
            <div className='project-description'>
                {desc}
            </div>
        </div>
    )
}
  
export const WorkInfoCard = ({ title, date, href, image }) => {

    const { useToken } = theme
    const { token } = useToken()

    const style = {
        backgroundColor: token.colorBgContainer,
        boxShadow: token.boxShadow,
        color: token.colorTextSecondary,
    }
    
    return (
        <div style={style} className='infocard-work-experience-page'>
            <div className='group-work-experience-page'>
                <div className='work-experience-image'>
                    <Image src={image} style={{borderRadius: 2,}}/>
                </div>
                <div className='work-experience-title'>
                    <a href={href} target="_blank" rel="noreferrer" style={{color: token.colorText,}} >
                        {title}
                    </a>
                    <div className='work-experience-date' >
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

    const style = {
        backgroundColor: token.colorBgContainer,
        boxShadow: token.boxShadow,
        color: token.colorTextSecondary,
    }

    return (
        <div style={style} className='infocard-footer-page'>
            <div className='group-footer-page'>
                <a href={href} target="_blank" rel="noreferrer" style={{color: token.colorText,}} >
                    <div className='footer-image'>
                        <Image src={image} preview={false}/>
                    </div>
                </a>
                <div className='footer-title'>
                    {title}
                </div>
            </div>
        </div>
    )
}