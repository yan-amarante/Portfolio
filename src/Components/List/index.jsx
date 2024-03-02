import "./styles.css"


function List({ content, hasNestedArray }) {

    function renderItems(array) {

        return array.map((item) => {

            return item

        })

    }

    function renderContent() {

        return content.map((nestedArray) => {

            return <li> {renderItems(nestedArray)} </li>

        })

    }

    function renderProjects() {

        if (content !== undefined) {

            return content.map((item) => {
                return <li className="projects-container">
                    <section className="project-screenshots">
                        <img className="screenshot" src={item.screenshots[0]} alt="" />
                        <section className="project-infos ">
                            <section className="project-infos-background container-row project-title">
                                <img className="teste" src={item.logo} />
                                <h2 className="text-medium-size">{item.titulo}</h2>
                            </section>
                            <section className="project-infos-background project-description">
                                <p className="text-medium-size">{item.descricao}</p>
                                <section className="container-row">
                                    <section className="container-row">
                                        <GithubIcon />
                                        <ProjectLinkIcon projectLink={item.link} />
                                    </section>
                                    <section className="container-row">
                                        <img className="teste" src={item.tecnologias[0].image} />
                                        <img className="teste" src={item.tecnologias[1].image} />
                                    </section>
                                </section>
                            </section>
                        </section>
                    </section>
                </li>
            })

        }

    }


    return (
        <>
            {hasNestedArray ? renderContent() : renderProjects()}
        </>
    )

}

function GithubIcon() {
    return (
        <svg className="teste" width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_182_645)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 0C8.53765 0 11 2.52446 11 5.63911C11 8.13006 9.4259 10.2432 7.24185 10.9895C6.963 11.0451 6.864 10.869 6.864 10.7188C6.864 10.5329 6.8706 9.92574 6.8706 9.17114C6.8706 8.64534 6.6946 8.30217 6.49715 8.12727C7.722 7.98757 9.009 7.51067 9.009 5.34477C9.009 4.72878 8.7956 4.2261 8.4425 3.8312C8.4997 3.68875 8.68835 3.11517 8.3886 2.33857C8.3886 2.33857 7.9277 2.18747 6.87775 2.91677C6.4383 2.79192 5.9675 2.7291 5.5 2.7269C5.0325 2.7291 4.56225 2.79192 4.12335 2.91677C3.0723 2.18747 2.6103 2.33857 2.6103 2.33857C2.31165 3.11517 2.5003 3.68875 2.55695 3.8312C2.2055 4.2261 1.99045 4.72878 1.99045 5.34477C1.99045 7.50517 3.2747 7.98939 4.49625 8.13183C4.33895 8.27264 4.1965 8.52102 4.147 8.88567C3.8335 9.02977 3.0371 9.27916 2.5465 8.41731C2.5465 8.41731 2.25555 7.87549 1.70335 7.83589C1.70335 7.83589 1.1671 7.82876 1.66595 8.17856C1.66595 8.17856 2.0262 8.35181 2.27645 9.00356C2.27645 9.00356 2.5993 10.01 4.1294 9.66904C4.13215 10.1404 4.1371 10.5846 4.1371 10.7188C4.1371 10.8679 4.0359 11.0423 3.76145 10.9901C1.57575 10.2448 0 8.13061 0 5.63911C0 2.52446 2.4629 0 5.5 0Z" fill="white" />
            </g>
            <defs>
                <clipPath id="clip0_182_645">
                    <rect width="11" height="11" fill="white" />
                </clipPath>
            </defs>
        </svg>

    )
}

function ProjectLinkIcon({ projectLink }) {
    return (
        <a href={projectLink} target="_blank">
            <svg className="teste" width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.49999 2.41794C5.50007 2.28882 5.53651 2.16234 5.60513 2.05296C5.67375 1.94359 5.77178 1.85576 5.88801 1.79951C6.00423 1.74326 6.13394 1.72088 6.26229 1.73493C6.39064 1.74898 6.51244 1.79888 6.61374 1.87894L10.2905 4.78912C10.3718 4.85349 10.4375 4.93541 10.4826 5.02875C10.5278 5.12209 10.5512 5.22444 10.5512 5.32812C10.5512 5.43181 10.5278 5.53416 10.4826 5.6275C10.4375 5.72084 10.3718 5.80276 10.2905 5.86712L6.61443 8.77731C6.51313 8.85757 6.39127 8.90765 6.26281 8.9218C6.13435 8.93596 6.0045 8.91362 5.88816 8.85735C5.77181 8.80108 5.67368 8.71316 5.60503 8.60367C5.53637 8.49418 5.49997 8.36755 5.49999 8.23831V7.17612C4.97749 7.14656 4.47974 7.17819 3.95037 7.326C3.26699 7.51781 2.49425 7.91519 1.54 8.69412C1.43279 8.78297 1.30097 8.8369 1.16224 8.8487C1.0235 8.8605 0.884478 8.82959 0.763808 8.76012C0.63575 8.68645 0.536048 8.57202 0.480599 8.43508C0.425151 8.29814 0.417149 8.14658 0.45787 8.00456C0.743183 6.97331 1.43756 5.84512 2.38837 4.97131C3.22437 4.20337 4.29274 3.60319 5.49999 3.46637V2.41794ZM6.53124 3.12881V3.95381C6.53124 4.09056 6.47692 4.22172 6.38022 4.31841C6.28352 4.41511 6.15237 4.46944 6.01562 4.46944C4.92524 4.46944 3.90774 4.97681 3.08618 5.731C2.64657 6.13581 2.26794 6.6022 1.96212 7.11562C2.56575 6.73612 3.12743 6.48587 3.67262 6.33325C4.52993 6.09262 5.30681 6.10637 6.07199 6.19094C6.19816 6.20481 6.31478 6.26474 6.39952 6.35925C6.48426 6.45375 6.53116 6.57619 6.53124 6.70312V7.52812L9.31012 5.32812L6.53124 3.12881Z" fill="white" />
            </svg>
        </a>
    )
}

export default List