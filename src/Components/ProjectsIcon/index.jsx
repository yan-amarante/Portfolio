function ProjectsIcon({ color, width, height }) {


    return (

        <svg width={width} height={height} viewBox="0 0 49 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="40" rx="3" fill="#B3B3B3" />
            <rect x="4" width="40" height="40" rx="3" fill="#DBDBDB" />
            <rect x="9" width="40" height="40" rx="3" fill={color} />
            <rect x="12.375" y="9.875" width="17.75" height="12.125" rx="2.5" stroke="black" />
            <rect x="35" y="11.875" width="10.625" height="1.25" rx="0.625" fill="black" />
            <rect x="35" y="11.875" width="10.625" height="1.25" rx="0.625" fill="black" />
            <rect x="35" y="11.875" width="10.625" height="1.25" rx="0.625" fill="black" />
            <rect x="35" y="18.125" width="10.625" height="1.25" rx="0.625" fill="black" />
            <rect x="35" y="18.125" width="10.625" height="1.25" rx="0.625" fill="black" />
            <rect x="35" y="18.125" width="10.625" height="1.25" rx="0.625" fill="black" />
            <rect x="35" y="15" width="10.625" height="1.25" rx="0.625" fill="black" />
            <rect x="35" y="15" width="10.625" height="1.25" rx="0.625" fill="black" />
            <rect x="35" y="15" width="10.625" height="1.25" rx="0.625" fill="black" />
            <rect x="9" y="6" width="40" height="1" fill="black" />
            <path d="M12.75 20.5L15.9375 13.125L19.0625 18.4375L23.125 15L25.9375 18.4375L30.3125 15.3125" stroke="black" />
            <circle cx="15" cy="33.125" r="2.625" stroke="black" />
            <circle cx="28.75" cy="33.125" r="2.625" stroke="black" />
            <circle cx="42.5" cy="33.125" r="2.625" stroke="black" />
        </svg>

    )


}


export default ProjectsIcon