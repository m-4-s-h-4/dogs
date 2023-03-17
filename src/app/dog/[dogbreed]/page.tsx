'use client';

import { useEffect, useState } from 'react';
import RandomDogButton from '../../components/RandomDogButton';

const dogBreeds = require('../../data.json').dogBreeds;

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

const DogBreedPage = () => {
  const [dogBreed, setDogBreed] = useState<DogBreed | null>(null);

  useEffect(() => {
    const slug = window.location.pathname.split('/').pop() || "";
    const foundDogBreed: DogBreed | undefined = dogBreeds.find((dogBreed: DogBreed) => dogBreed.breed === slug);
    setDogBreed(foundDogBreed || null);
  }, []);

  return (
    <div className="page-container">
      <RandomDogButton />
      <div className="breed-container">
        <div className="placeholder" style={{ backgroundImage: `url(${dogBreed?.photo})` }} />
        <div className="breed-info">
          {dogBreed ? (
            <>
              <h1>{dogBreed.breed}</h1>
              <p>Breed type: {dogBreed.breedType}</p>
              <p>Origin: {dogBreed.origin}</p>
              <p>Popularity: {dogBreed.popularity}</p>
              <p>Temperament: {dogBreed.temperament.join(", ")}</p>
              <p>Hypoallergenic: {dogBreed.hypoallergenic}</p>
              <p>Intelligence: {dogBreed.intelligence}</p>
            </>
          ) : (
            <h1>Click the button to try it out and then Refresh</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default DogBreedPage;
