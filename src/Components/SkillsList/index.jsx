function SkillsList({ data, currentStack }) {

    function createListItems() {

        if (data !== null) return renderListItems()

    }

    function renderListItems() {

        return data.map((skill) => {

            //if (skill.label === currentStack) {

                return (

                    <li key={skill.id} className="skills-list-item">
                        <img className="skills-list-image" src={skill.image} />
                        <h2 className="skills-list-text">{skill.name}</h2>
                    </li>

                )

            //}

        })

    }


    return (

        <ul className="skills-list">
            {createListItems()}
        </ul>

    )

}


export default SkillsList