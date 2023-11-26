import "./styles.css"

import { useState, useRef } from "react"



function DiagonalResizeHitbox({ headerRef, positionY, positionX }) {

    const [resizePressed, setResizePressed] = useState(false)


    const resizeHitbox = useRef(null)


    function resizeWindow(event) {

        if (resizePressed) {

            resizeHitbox.current.style.width = "100px"

            resizeHitbox.current.style.height = "100px"


            if (createPositionString() === "top-left") {

                resizeHitbox.current.style[positionX] = `${(event.clientX - headerRef.current.getBoundingClientRect()[positionX]) - 50}px`

                resizeHitbox.current.style[positionY] = `${(event.clientY - headerRef.current.getBoundingClientRect()[positionY]) - 50}px`


                if (event.movementX >= 1) headerRef.current.style.width = `${headerRef.current.getBoundingClientRect().width - event.movementX}px`

                if (event.movementX <= -1) headerRef.current.style.width = `${headerRef.current.getBoundingClientRect().width - event.movementX}px`

                if (event.movementY >= 1) headerRef.current.style.height = `${headerRef.current.getBoundingClientRect().height - event.movementY}px`

                if (event.movementY <= -1) headerRef.current.style.height = `${headerRef.current.getBoundingClientRect().height - event.movementY}px`

            }

            if (createPositionString() === "top-right") {

                resizeHitbox.current.style[positionX] = `${-(event.clientX - headerRef.current.getBoundingClientRect()[positionX]) - 50}px`

                resizeHitbox.current.style[positionY] = `${(event.clientY - headerRef.current.getBoundingClientRect()[positionY]) - 50}px`


                if (event.movementX >= 1) headerRef.current.style.width = `${headerRef.current.getBoundingClientRect().width + event.movementX}px`

                if (event.movementX <= -1) headerRef.current.style.width = `${headerRef.current.getBoundingClientRect().width + event.movementX}px`

                if (event.movementY >= 1) headerRef.current.style.height = `${headerRef.current.getBoundingClientRect().height - event.movementY}px`

                if (event.movementY <= -1) headerRef.current.style.height = `${headerRef.current.getBoundingClientRect().height - event.movementY}px`

            }

            if (createPositionString() === "bottom-left") {

                resizeHitbox.current.style[positionX] = `${(event.clientX - headerRef.current.getBoundingClientRect()[positionX]) - 50}px`

                resizeHitbox.current.style[positionY] = `${-(event.clientY - headerRef.current.getBoundingClientRect()[positionY]) - 50}px`

                if (event.movementX >= 1) headerRef.current.style.width = `${headerRef.current.getBoundingClientRect().width - event.movementX}px`

                if (event.movementX <= -1) headerRef.current.style.width = `${headerRef.current.getBoundingClientRect().width - event.movementX}px`

                if (event.movementY >= 1) headerRef.current.style.height = `${headerRef.current.getBoundingClientRect().height + event.movementY}px`

                if (event.movementY <= -1) headerRef.current.style.height = `${headerRef.current.getBoundingClientRect().height + event.movementY}px`

            }

            if (createPositionString() === "bottom-right") {

                resizeHitbox.current.style[positionX] = `${-(event.clientX - headerRef.current.getBoundingClientRect()[positionX]) - 50}px`

                resizeHitbox.current.style[positionY] = `${-(event.clientY - headerRef.current.getBoundingClientRect()[positionY]) - 50}px`

                if (event.movementX >= 1) headerRef.current.style.width = `${headerRef.current.getBoundingClientRect().width + event.movementX}px`

                if (event.movementX <= -1) headerRef.current.style.width = `${headerRef.current.getBoundingClientRect().width + event.movementX}px`

                if (event.movementY >= 1) headerRef.current.style.height = `${headerRef.current.getBoundingClientRect().height + event.movementY}px`

                if (event.movementY <= -1) headerRef.current.style.height = `${headerRef.current.getBoundingClientRect().height + event.movementY}px`

            }


        } else if (!resizePressed) {

            resizeHitbox.current.style.width = "10px"

            resizeHitbox.current.style.height = "10px"

            resizeHitbox.current.style[positionX] = "0"

            resizeHitbox.current.style[positionY] = "0"

        }

    }

    function createPositionString() {

        return positionY + "-" + positionX

    }

    return (
        <div
            ref={resizeHitbox}
            onMouseDown={() => setResizePressed(true)}
            onMouseUp={() => setResizePressed(false)}
            onMouseMove={resizeWindow}
            className={`diagonal-hitbox-size ${createPositionString()}`}>
        </div>
    )
}


export default DiagonalResizeHitbox