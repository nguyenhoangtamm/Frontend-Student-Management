import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '@/assets/styles/admin/sidebar.module.css';
import { FaTachometerAlt, FaFileAlt, FaChartBar, FaUniversity, FaCog, FaSignOutAlt } from 'react-icons/fa';

const navOptions = [
    { icon: <FaTachometerAlt />, alt: "dashboard", label: "Dashboard" },
    { icon: <FaFileAlt />, alt: "student", label: "Student" },
    { icon: <FaChartBar />, alt: "report", label: "Reports" },

    { icon: <FaCog />, alt: "settings", label: "Settings" },
    { icon: <FaSignOutAlt />, alt: "logout", label: "Logout" },
    { icon: <FaUniversity />, alt: "hostel", label: "Nhà trọ" },
    { icon: <FaChartBar />, alt: "statistics", label: "Báo cáo thống kê" }
];

const SideBarComponent: React.FC = () => {
    return (
        <div className={styles.navcontainer}>
            <nav className={styles.nav}>
                <div className={styles.navUpperOptions}>
                    {navOptions.map((option, index) => (
                        <div key={index} className={`${styles.navOption} ${styles[`option${index + 1}`]}`}>
                            {/* <Image src={option.src} className={styles.navImage} alt={option.alt} /> */}
                            {option.icon}
                            <h5>{option.label}</h5>
                        </div>
                    ))}
                </div>
            </nav>
        </div>
    );
};

export default SideBarComponent;
