import "./styles.css"


function List({ content }) {

    function renderItems(array){

        return array.map((item) => {
                
            return item

        })
        
    }

    function renderContent() {

        return content.map((nestedArray) => {

            return <li> {renderItems(nestedArray)} </li>

        })

    }

    
    return (

        <ul className="list">
            {renderContent()}
        </ul>

    )

}


export default List