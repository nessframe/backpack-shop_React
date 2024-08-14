import LogoIcon from "../../../assets/LogoSvg";
import styles from './LogoHeader.module.scss';

function LogoHeader() {
    return(
        <div className={styles.LogoHeader}>
            <LogoIcon/><span style={{fontWeight: '500'}}>pack</span>
        </div>
    )
}

export default LogoHeader