import Form from "../UI/form/Form"
import Select from "../UI/select/Select"
import styles from "./Filter.module.scss"

function Filter() {

    return(
        <div 
            className={`${styles.filter} 
            container`}>
            <Form 
                    placeHolder={'search...'}
                    inputColor={'#cbd7da'}
                    buttonValue={'search'}
            />
            <div>
                <Select 
                    text={'price'}
                    defaultOption={'all'}
                    options={[
                        {value: '500_1000', name: '500-1000'},
                        {value: '1000_2000', name: '1000-2000'},
                    ]}
                />
                <Select 
                    text={'sort'}
                    defaultOption={'new in'}

                    options={[
                        {value: 'alphabet', name: 'alphabet'},
                        {value: 'cheapest', name: 'cheapest'},
                        {value: 'expensive', name: 'expensive'},
                    ]}
                />
            </div>
        </div>
    )
}

export default Filter