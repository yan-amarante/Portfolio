function LandingPageIcon({ color, className }) {


    return (

        <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="38" height="38" rx="2" stroke={color} stroke-width="2" />
            <rect x="3.625" y="9.875" width="17.75" height="12.125" rx="2.5" stroke={color} />
            <rect x="26.25" y="11.875" width="10.625" height="1.25" rx="0.625" fill={color} />
            <rect x="26.25" y="18.125" width="10.625" height="1.25" rx="0.625" fill={color} />
            <rect x="26.25" y="15" width="10.625" height="1.25" rx="0.625" fill={color} />
            <rect x="1.25" y="6.25" width="37.5" height="1.25" fill={color} />
            <path d="M4 20.5L7.1875 13.125L10.3125 18.4375L14.375 15L17.1875 18.4375L21.5625 15.3125" stroke={color} />
            <circle cx="6.25" cy="33.125" r="2.625" stroke={color} />
            <circle cx="20" cy="33.125" r="2.625" stroke={color} />
            <circle cx="33.75" cy="33.125" r="2.625" stroke={color} />
        </svg>

    )


}

export default LandingPageIcon