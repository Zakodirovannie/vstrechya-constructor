import styles from './ExhibitionsPage.module.scss';
import Footer from '../../components/Footer/Footer.jsx'
import NavBar from "../../components/NavigationBar/NavBar";
import ExhibitionsList from "../../components/Exhibitions-components/Exhibitions/ExhibitionsList";
import React, {useEffect, useState} from "react";
import {getExhibitionDetails, getExhibitions} from "../../api/api.auth";
import {useNavigate} from "react-router-dom";

function ExhibitionsPage({user = '0'}) {
  const navigate = useNavigate();
  const [collections, setCollections] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getExhibitions(user)
        for(let i = 0; i < response.length; i++) {
          await getExhibitionDetails(response[i].id)
              .then(res => res.data[0].image_url)
              .then(res => response[i].image_url = res)
              .catch(e => console.log(e));
        }
        setCollections(response)
      } catch (e) {
        console.log(e)
      }
    }
    fetchData();
  }, []);

  return <>
    <NavBar />
    <div className={styles.main}>
      <section className={styles.section1}>
        <span className={styles.spacer}></span>
        <div className={styles.flex_col}>
          <h1 className={styles.title}>
            Каталог выставок <br/>
            <button onClick={() => navigate('/')}>Создать коллекцию</button>
          </h1>
          <ExhibitionsList exhibitions={collections}/>
        </div>
      </section>
    </div>
    <Footer/>
  </>
}


export default ExhibitionsPage;
