import "./styles.css"

import { useRef, useState } from "react"


function HorizontalResizeHitbox({ positionX, headerRef }) {

    const [resizePressed, setResizePressed] = useState(false)


    const resizeHitbox = useRef(null)


    function resizeWindow(event) {

        if (resizePressed) {

            resizeHitbox.current.style.width = "20px"

            if (positionX === "left") {

                resizeHitbox.current.style[positionX] = `${(event.clientX - headerRef.current.getBoundingClientRect()[positionX]) - 10}px`


                if (event.movementX >= 1) headerRef.current.style.width = `${headerRef.current.getBoundingClientRect().width - event.movementX}px`

                if (event.movementX <= -1) headerRef.current.style.width = `${headerRef.current.getBoundingClientRect().width - event.movementX}px`

            }
            if (positionX == "right") {

                resizeHitbox.current.style[positionX] = `${-(event.clientX - headerRef.current.getBoundingClientRect()[positionX]) - 10}px`


                if (event.movementX >= 1) headerRef.current.style.width = `${headerRef.current.getBoundingClientRect().width + event.movementX}px`

                if (event.movementX <= -1) headerRef.current.style.width = `${headerRef.current.getBoundingClientRect().width + event.movementX}px`

            }

        } else if (!resizePressed) {

            resizeHitbox.current.style.width = "10px"

            resizeHitbox.current.style[positionX] = "0"

        }

    }

    return (
        <div
            ref={resizeHitbox}
            className={`horizontal-hitbox-size ${positionX}`}
            onMouseDown={() => setResizePressed(true)}
            onMouseUp={() => setResizePressed(false)}
            onMouseMove={resizeWindow}
        >
        </div>
    )

}


export default HorizontalResizeHitbox