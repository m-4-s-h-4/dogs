import React, { useState } from 'react';
import styles from './RandomDogButton.module.css';

interface DogBreed {
  breed: string;
  breedType: string;
  origin: string;
  popularity: string;
  temperament: string[];
  hypoallergenic: string;
  intelligence: number;
  photo: string;
}

const dogBreeds: DogBreed[] = require('../data.json').dogBreeds;

const RandomDogButton = () => {
  const [randomBreed, setRandomBreed] = useState<DogBreed | null>(null);

  const handleButtonClick = () => {
    const randomIndex = Math.floor(Math.random() * dogBreeds.length);
    setRandomBreed(dogBreeds[randomIndex]);
  };

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={handleButtonClick}>Show me a random dog breed</button>
      {randomBreed && (
        <div className={styles['breed-container']}>
          <img src={randomBreed.photo} alt={randomBreed.breed} />
          <h2>{randomBreed.breed}</h2>
          <p>Breed type: {randomBreed.breedType}</p>
          <p>Origin: {randomBreed.origin}</p>
          <p>Popularity: {randomBreed.popularity}</p>
          <p>Temperament: {randomBreed.temperament.join(', ')}</p>
          <p>Hypoallergenic: {randomBreed.hypoallergenic}</p>
          <p>Intelligence: {randomBreed.intelligence}</p>
        </div>
      )}
    </div>
  );
};

export default RandomDogButton;
