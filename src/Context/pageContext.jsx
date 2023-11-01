import { createContext, useState } from "react";

export const PageContext = createContext();

export const PageProvider = ({ children }) => {
    const [page, setPage] = useState({
        "landing": {
            isActive: true,
            isFullscreen: false,
            isClosed: false
        },
        "skills": {
            isActive: false,
            isFullscreen: false,
            isClosed: true
        },
        "projects": {
            isActive: false,
            isFullscreen: false,
            isClosed: true
        }
    })
    return (
        <PageContext.Provider value={{ page, setPage }}>{children}</PageContext.Provider>
    )
}