import "./styles.css"

import FrontEndIcon from "../Icons/SkillsNavIcons/FrontEndIcon/index"

import BackEndIcon from "../Icons/SkillsNavIcons/BackEndIcon/index"

import TestIcon from "../Icons/SkillsNavIcons/TestsIcon/index"


function SkillsNav({ currentStack, updateStack }) {

    function changeStatck(stack) {

        if (stack !== currentStack) updateStack(stack)

    }

    function updateBottomBorder(stack) {

        if (stack === currentStack) return "bottom-border-active"

        else return "bottom-border-disabled"

    }

    function updateIconColor(stack) {

        if (stack === currentStack) return "icon-color-active"

        else return "icon-color-disabled"

    }


    return (

        <nav className="nav-skills-window">
            <ul className="nav-list-skills-window">
                <li onClick={() => changeStatck("frontEnd")} className={`nav-list-items ${updateBottomBorder("frontEnd")}`}>
                    <FrontEndIcon className={`nav-list-icon ${updateIconColor("frontEnd")}`} />
                    <h3 className="nav-list-text">Front-end</h3>
                </li>
                <li onClick={() => changeStatck("backEnd")} className={`nav-list-items ${updateBottomBorder("backEnd")}`}>
                    <BackEndIcon className={`nav-list-icon ${updateIconColor("backEnd")}`} />
                    <h3 className="nav-list-text">Back-end</h3>
                </li>
                <li onClick={() => changeStatck("test")} className={`nav-list-items ${updateBottomBorder("test")}`}>
                    <TestIcon className={`nav-list-icon ${updateIconColor("test")}`} />
                    <h3 className="nav-list-text">Testes</h3>
                </li>
            </ul>
        </nav>

    )

}


export default SkillsNav