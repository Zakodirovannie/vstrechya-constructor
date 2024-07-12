import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./ExhibitionsList.module.scss";

const ExhibitionsList = ({ exhibitions }) => {
    const navigate = useNavigate();

    useEffect(() => {

    }, [])

    return (
        <div className={styles.grid}>
            {exhibitions.map((item, index) => (
                <div className={styles.item} key={index} onClick={() => navigate(`${item.id}`)}>
                    <img
                        className={styles.image2}
                        src={item.image_url}
                        alt={`Коллекция пользователя`}
                    />
                    <h4 className={styles.highlight}>{item.name}</h4>
                </div>
            ))}
        </div>
    );
};

export default ExhibitionsList;
