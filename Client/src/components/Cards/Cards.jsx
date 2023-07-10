import Card from '../Card/Card';
import React from 'react';
import styles from './Cards.module.css'
import { mapDispatchToProps } from '../Card/Card';

export default function Cards({characters,close}) {
   return (
   <div className={styles.cardContainer}>
      {characters.map(character => {
         return <Card character={character} close={close} key={character.id} />
      })}
   </div>
   );
}
