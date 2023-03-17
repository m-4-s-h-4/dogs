'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

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

const dogBreeds: DogBreed[] = require('./data.json').dogBreeds;

const DogBreeds = () => {
  const [selectedBreed, setSelectedBreed] = useState<string>("");
  const [photoUrl, setPhotoUrl] = useState<string>("");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      window.location.reload();
    }, 3000); // 3 sec but doesnt work 

    return () => clearTimeout(timeoutId);
  }, []);

  const handleBreedSelection = (breed: string, photo: string) => {
    setSelectedBreed(breed);
    setPhotoUrl(photo);
  };

  return (
    <div>
      {dogBreeds.map((dogBreed: DogBreed, index: number) => (
        <div key={index}>
          <Link href={`/dog/${dogBreed.breed}`}>
            <div>
              <img src={dogBreed.photo} alt={dogBreed.breed} onClick={() => handleBreedSelection(dogBreed.breed, dogBreed.photo)} />
              <p>{dogBreed.breed}</p>
            </div>
          </Link>
        </div>
      ))}
      
      {selectedBreed && photoUrl && (
        <div>
          <img src={photoUrl} alt={selectedBreed} />
          <p>{selectedBreed}</p>
        </div>
      )}
    </div>
  );
};

export default DogBreeds;
