import { useState, useEffect } from "react"

import MinimizeIcon from "../../MinimizeIcon/index"

import FullscreenIcon from "../../FullscreenIcon/index"

import CloseIcon from "../../CloseIcon/index"


function WindowHeader({ icon, name,window, className }) {

    const [headerPressed, setHeaderPressed] = useState(false)

    const [position, setPosition] = useState({ x: 0, y: 0 })


    useEffect(() => {

        moveWindow()

    }, [position])


    function moveWindow() {

        if (window.current) {

            window.current.style.transform = `translate(${position.x}px, ${position.y}px)`

        }

    }

    function onMouseMove(event) {

        if (headerPressed) {

            setPosition({

                x: position.x + event.movementX,
                y: position.y + event.movementY

            })

        }

    }

    return (
        <header
            ref={window}
            onMouseMove={onMouseMove}
            onMouseDown={() => setHeaderPressed(true)}
            onMouseUp={() => setHeaderPressed(false)}
            className={`window-header ${className}`}>
            <section className='window_header-infos'>
                {icon}
                <h5 className='name-window'>{name}</h5>
            </section>
            <section className='window-controls'>
                <MinimizeIcon currentPage="landing" />
                <FullscreenIcon currentPage="landing" />
                <CloseIcon currentPage="landing" />
            </section>
        </header>
    )
}


export default WindowHeader