function SkillsList({ data, currentStack }) {

    function createListItems() {

        return data[currentStack].map((skill) => {

            return (

                <li key={skill.id} className="skills-list-item">
                    {skill.icon}
                    <h2 className="skills-list-text">{skill.name}</h2>
                </li>

            )

        })

    }


    return (

        <section>
            <ul className="skills-list">
                {createListItems()}
            </ul>
        </section>

    )

}


export default SkillsList