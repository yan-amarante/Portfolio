import DiagonalResizeHitbox from "../ResizeHitboxes/DiagonalResizeHitbox/index"

import HorizontalResizeHitbox from "../ResizeHitboxes/HorizontalResizeHitbox/index"

import VerticalResizeHitbox from "../ResizeHitboxes/VerticalResizeHitbox/index"


function Resize({ window }) {

    return (
        <>
            <DiagonalResizeHitbox positionY="top" positionX="left" headerRef={window} />
            <HorizontalResizeHitbox positionX="left" headerRef={window} />
            <HorizontalResizeHitbox positionX="right" headerRef={window} />
            <VerticalResizeHitbox positionY="top" headerRef={window} />
            <VerticalResizeHitbox positionY="bottom" headerRef={window} />
            <DiagonalResizeHitbox positionY="top" positionX="right" headerRef={window} />
            <DiagonalResizeHitbox positionY="bottom" positionX="left" headerRef={window} />
            <DiagonalResizeHitbox positionY="bottom" positionX="right" headerRef={window} />
        </>
    )
}


export default Resize