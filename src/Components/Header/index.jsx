import "./styles.css"
import { PageContext } from "../../Context/pageContext"
import { useContext } from 'react'
import LandingPageIcon from "../LandingPageIcon/index"
import SkillsIcon from "../SkillsIcon/index"
import ProjectsIcon from "../ProjectsIcon/index"
import PortfolioLogo from "../PortfolioLogo"

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
            setPage({ ...page, [currentPage]: { isActive: false, isFullscreen: currentObject.isFullscreen, isClosed: false }})
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
                    <LandingPageIcon className="icon-svg-header landing-page-header" />
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
        </header>
    )
}

export default Header