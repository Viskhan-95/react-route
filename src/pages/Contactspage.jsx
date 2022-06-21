
import { Map, YMaps, Placemark } from "react-yandex-maps"
import styles from './styles.module.css'

import React from 'react';

const Contactspage = () => {
  return (
      <YMaps>
        <div className={styles.map_conteiner}>
          <Map width={"100%"} height={"77vh"} defaultState={{ center: [55.75, 37.57], zoom: 9 }}/>
        </div>
      </YMaps>
  );
};

export default Contactspage;