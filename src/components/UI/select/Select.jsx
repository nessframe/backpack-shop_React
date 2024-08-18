import styles from './Select.module.scss'

function Select({defaultOption, options, text, setSelect}) {


    return(
        <div className={styles.select}>
            <p>{text}</p>
            <select 
                onChange={event => setSelect(event.target.value)}
            >
                <option value={defaultOption}>{defaultOption}</option>

                {options.map(option => 
                    <option key={option.value} value={option.value}>
                        {option.name}
                    </option>
                )}
            </select>
        </div>
    )
}

export default Select