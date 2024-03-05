import "./styles.css"

import { PageContext } from "../../Context/pageContext"

import { useContext } from 'react'

import LandingPageIcon from "../LandingPageIcon/index"

import SkillsIcon from "../SkillsIcon/index"

import ProjectsIcon from "../ProjectsIcon/index"


function Header() {

    const { page, setPage } = useContext(PageContext)


    function changeWindow(currentPage, currentObject) {

        if (!currentObject.isActive) {

            const object = {}

            Object.keys(page).forEach((key) => {

                if (currentPage === key) {

                    object[key] = { isActive: true, isFullscreen: currentObject.isFullscreen, isClosed: false }

                }
                else if (currentPage !== key) {

                    object[key] = { isActive: false, isFullscreen: currentObject.isFullscreen, isClosed: true }

                }

            })

            
            setPage(object)

        } else if (currentObject.isActive) {

            setPage({ ...page, [currentPage]: { isActive: false, isFullscreen: currentObject.isFullscreen, isClosed: false } })

        }

    }

    function verifyOutlineState(currentPage) {

        if (currentPage.isActive) return "outline-active"

        else if (!currentPage.isClosed && !currentPage.isActive) return "outline-not_closed"

        else if (currentPage.isClosed) return "outline-closed"

    }




    function verifyIconState(currentPage) {

        if (currentPage.isActive) return "icon-header icon-header-active"

        else if (currentPage.isClosed || !currentPage.isActive) return "icon-header icon-header-not_active"

    }


    return (

        <header className='container-header'>
            <nav className='navigation-container'>
                <PortfolioLogo className="icon-svg-header icon-portfolio" />
                <section onClick={() => changeWindow("landing", page.landing)} className={verifyIconState(page.landing)}>
                    <LandingPageIcon className="icon-svg-header" color="white" />
                    <div className={verifyOutlineState(page.landing)}></div>
                </section>
                <section onClick={() => changeWindow("skills", page.skills)} className={verifyIconState(page.skills)}>
                    <SkillsIcon className="icon-svg-header" color="white" />
                    <div className={verifyOutlineState(page.skills)}></div>
                </section>
                <section onClick={() => changeWindow("projects", page.projects)} className={verifyIconState(page.projects)}>
                    <ProjectsIcon className="icon-svg-header" color="white" />
                    <div className={verifyOutlineState(page.projects)}></div>
                </section>
            </nav>
            <h2 className='title-header'>Yan Amarante</h2>
        </header>

    )

}


function PortfolioLogo({ className }) {

    return (
        <svg className={className} viewBox="0 0 28 45" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.2734 24.6401L15.398 22.8361L26.6104 42.2565L23.4858 44.0605L12.2734 24.6401Z" fill="#9DA9C6" />
            <path d="M11.9404 23.856L15.5484 23.856V37.5662H11.9404V23.856Z" fill="black" />
            <path d="M15.5827 22.5483L15.5827 26.1562L1.87254 26.1562V22.5483L15.5827 22.5483Z" fill="#B6BED4" />
            <path d="M20.2045 8.70273L20.2045 12.3107L6.4943 12.3107V8.70273L20.2045 8.70273Z" fill="#B6BED4" />
            <path d="M11.9404 23.856L15.5484 23.856V44.0605H11.9404V23.856Z" fill="#CED4E3" />
            <path d="M0.39502 1.48685H4.00296V44.0605H0.39502V1.48685Z" fill="#E7E9F1" />
            <path d="M23.4858 1.48685H27.0938V44.0605H23.4858V1.48685Z" fill="#E7E9F1" />
            <path d="M0.394971 1.48684L4.00297 1.48685L15.5483 23.8561L12.3895 25.2396L0.394971 1.48684Z" fill="#CED4E3" />
            <path d="M27.0938 1.48686L23.4858 1.48684L12.117 23.8561L15.2758 25.2396L27.0938 1.48686Z" fill="#CED4E3" />
        </svg>

    )
}


export default Header