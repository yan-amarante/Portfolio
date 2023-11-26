import "./styles.css"


import { useRef, useState } from "react"


function VerticalResizeHitbox({ positionY, headerRef }) {

    const [resizePressed, setResizePressed] = useState(false)


    const resizeHitbox = useRef(null)


    function resizeWindow(event) {

        if (resizePressed) {

            resizeHitbox.current.style.height = "10px"

            if (positionY === "top") {

                resizeHitbox.current.style[positionY] = `${(event.clientY - headerRef.current.getBoundingClientRect()[positionY]) - 5}px`


                if (event.movementY >= 1) headerRef.current.style.height = `${headerRef.current.getBoundingClientRect().height - event.movementY}px`

                if (event.movementY <= -1) headerRef.current.style.height = `${headerRef.current.getBoundingClientRect().height - event.movementY}px`

            }
            if (positionY == "bottom") {

                resizeHitbox.current.style[positionY] = `${-(event.clientY - headerRef.current.getBoundingClientRect()[positionY]) - 5}px`


                if (event.movementY >= 1) headerRef.current.style.height = `${headerRef.current.getBoundingClientRect().height + event.movementY}px`

                if (event.movementY <= -1) headerRef.current.style.height = `${headerRef.current.getBoundingClientRect().height + event.movementY}px`

            }

        } else if (!resizePressed) {

            resizeHitbox.current.style.height = "10px"

            resizeHitbox.current.style[positionY] = "0"

        }

    }

    return (
        <div
            ref={resizeHitbox}
            className={`vertical-hitbox-size ${positionY}`}
            onMouseDown={() => setResizePressed(true)}
            onMouseUp={() => setResizePressed(false)}
            onMouseMove={resizeWindow}
        >
        </div>
    )

}


export default VerticalResizeHitbox