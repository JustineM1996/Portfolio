import './infocard-scss/index.js'

import {
    Image,
    theme,
    Tooltip
} from "antd"

import React from "react"

export const OverviewInfoCard = ({ title, sub_title, image }) => {

    const { useToken } = theme
    const { token } = useToken()

    const style = {
        backgroundColor: token.colorBgContainer,
        boxShadow: token.boxShadow,
        color: token.colorTextSecondary,
    }
    
    return (
        <Tooltip className='tooltip-overview' placement="bottom" title={sub_title}>
            <div style={style} className='infocard-overview-page'>
                <div className='group-overview-page'>
                    <div className='overview-image'>
                        <Image src={image} style={{borderRadius: 2,}} />
                    </div>
                    <div className='overview-title'>
                        {title}
                    </div>
                </div>
            </div>
        </Tooltip>
    )
}

export const TechnologyInfoCard = ({ title, sub_title, image }) => {

    const { useToken } = theme
    const { token } = useToken()

    const style = {
        backgroundColor: token.colorBgContainer,
        boxShadow: token.boxShadow,
        color: token.colorTextSecondary,
    }
    
    return (
        <Tooltip className='tooltip-technology' placement="bottom" title={sub_title}>
            <div style={style} className='infocard-technology-page'>
                <div className='group-technology-page'>
                    <div className='technology-image'>
                        <Image src={image} style={{borderRadius: 2,}} />
                    </div>
                    <div className='technology-title'>
                        {title}
                    </div>
                </div>
            </div>
        </Tooltip>
    )
}

export const ProjectsInfoCard = ({ title, image, sub_image, desc, href }) => {

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
                <Image src={sub_image} style={{borderRadius: 2,}}/>
            </div>
            <div className='project-description'>
                {desc}
            </div>
        </div>
    )
}
  
export const WorkInfoCard = ({ title, image, date, href }) => {

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


export const FooterInfoCard = ({ title, image, href }) => {

    const { useToken } = theme
    const { token } = useToken()

    const style = {
        backgroundColor: token.colorBgContainer,
        boxShadow: token.boxShadow,
        color: token.colorTextSecondary,
    }

    return (
        <Tooltip className='tooltip-footer' placement="bottom" title={title}>
            <a href={href} target="_blank" rel="noreferrer" style={{color: token.colorText,}} >
                <div style={style} className='infocard-footer-page'>
                    <div className='group-footer-page'>
                        <div className='footer-image'>
                            <Image src={image} preview={false}/>
                        </div>
                        <div className='footer-title'>
                            {title}
                        </div>
                    </div>
                </div>
            </a>
        </Tooltip>
    )
}