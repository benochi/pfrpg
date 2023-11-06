import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout';
import Link from 'next/link';
import { Race, Class, StatModifiers } from '../../types/types';
import racesData from '../../data/races.json';
import classesData from '../../data/classes.json';
import Image from 'next/image';
import CharacterAnimations from '../../animations/CharacterAnimations';

const baseStats: StatModifiers = {
  STR: 75,
  STA: 75,
  DEX: 75,
  WIS: 75,
  INT: 75,
  CHA: 75
};

const highlightColor = 'bg-blue-600';

const CreateCharacter: React.FC = () => {
  const [races, setRaces] = useState<Race[]>([]);
  const [classes, setClasses] = useState<Class[]>([]);
  const [selectedRace, setSelectedRace] = useState<Race | null>(null);
  const [selectedClass, setSelectedClass] = useState<Class | null>(null);
  const [stats, setStats] = useState<StatModifiers>(baseStats);
  const [characterName, setCharacterName] = useState('');
  const [gender, setGender] = useState<string>('male');


  useEffect(() => {
    setRaces(racesData as Race[]);
    setClasses(classesData as Class[]);
  }, []);

  useEffect(() => {
    let newStats = { ...baseStats };
  
    if (selectedRace) {
      newStats = {
        STR: newStats.STR + selectedRace.statModifiers.STR,
        STA: newStats.STA + selectedRace.statModifiers.STA,
        DEX: newStats.DEX + selectedRace.statModifiers.DEX,
        WIS: newStats.WIS + selectedRace.statModifiers.WIS,
        INT: newStats.INT + selectedRace.statModifiers.INT,
        CHA: newStats.CHA + selectedRace.statModifiers.CHA,
      };
    }
  
    if (selectedClass) {
      newStats = {
        STR: newStats.STR + selectedClass.statModifiers.STR,
        STA: newStats.STA + selectedClass.statModifiers.STA,
        DEX: newStats.DEX + selectedClass.statModifiers.DEX,
        WIS: newStats.WIS + selectedClass.statModifiers.WIS,
        INT: newStats.INT + selectedClass.statModifiers.INT,
        CHA: newStats.CHA + selectedClass.statModifiers.CHA,
      };
    }
    setStats(newStats);
  }, [selectedRace, selectedClass]);

  const handleRaceSelect = (race: Race) => {
    setSelectedRace(race);
  };

  const handleClassSelect = (cls: Class) => {
    setSelectedClass(cls);
  };

  const handleCharacterNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCharacterName(event.target.value);
  };

  const getImagePath = () => {
    if (selectedRace && selectedClass && gender) {
      return `/images/characters/${gender}/${selectedRace.name.toLowerCase()}_${selectedClass.name.toLowerCase()}.png`;
    }
    return '/images/characters/default.png';
  };

  return (
    <Layout>
        <div className="animation-container relative z-10" style={{ height: '100vh' }}>
        {selectedClass && (
          <CharacterAnimations className={selectedClass.name} />
        )}
      <div className="container mx-auto px-4 z-10 relative">
        <h1 className="text-2xl font-bold text-center my-4">Create Your Character</h1>
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="lg:w-1/4 w-full overflow-auto">
            <h2 className="text-xl font-bold">Races</h2>
            <ul>
              {races.map((race, index) => (
                <li 
                  key={index}
                  className={`my-2 cursor-pointer ${selectedRace?.name === race.name ? highlightColor : ''}`}
                  onClick={() => handleRaceSelect(race)}
                >
                  {race.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:w-1/4 w-full overflow-auto">
            <h2 className="text-xl font-bold">Classes</h2>
            <ul>
              {classes.map((cls, index) => (
                <li
                  key={index}
                  className={`my-2 cursor-pointer ${selectedClass?.name === cls.name ? highlightColor : ''}`}
                  onClick={() => handleClassSelect(cls)}
                >
                  {cls.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:w-1/2 w-full flex justify-center items-center">
            <div className="border-4 border-white">
              <Image
                src={getImagePath()}
                alt="Character Image"
                width={200} 
                height={200}
                priority
              />
            </div>
          </div>
        </div>
        <div className="mt-4">
          <h2 className="text-xl font-bold">Character Gender</h2>
          <div className="flex gap-4 justify-center items-center">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="gender"
                value="male"
                checked={gender === 'male'}
                onChange={(e) => setGender(e.target.value)}
                className="accent-cobalt"
              />
              <span>Male</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="gender"
                value="female"
                checked={gender === 'female'}
                onChange={(e) => setGender(e.target.value)}
                className="accent-cobalt"
              />
              <span>Female</span>
            </label>
          </div>
        </div>
        <div className="mt-4">
          <h2 className="text-xl font-bold">Character Stats</h2>
          <div className="flex flex-wrap justify-between p-4 border border-white rounded">
            <span>STR: {stats.STR}</span>
            <span>STA: {stats.STA}</span>
            <span>DEX: {stats.DEX}</span>
            <span>WIS: {stats.WIS}</span>
            <span>INT: {stats.INT}</span>
            <span>CHA: {stats.CHA}</span>
          </div>
          <div className="my-4">
            <label htmlFor="characterName" className="block text-sm font-medium text-white">
              Character Name
            </label>
            <input
              type="text"
              id="characterName"
              value={characterName}
              onChange={handleCharacterNameChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm text-black px-2"
              placeholder="Enter your character's name"
            />
          </div>
          {characterName && selectedRace && selectedClass && (
            <div className="text-center my-4">
              <p className="text-white">
                {characterName} the {selectedRace.name} {selectedClass.name}
              </p>
            </div>
          )}
          <Link href="/character/confirm" passHref>
            <button className="bg-cobalt hover:bg-cobalt-dark text-white font-bold py-2 px-4 rounded-lg border-4 border-white transition ease-in duration-200 transform hover:-translate-y-1 hover:scale-110">
              CREATE CHARACTER
            </button>
          </Link>
        </div>
      </div>
      </div>
    </Layout>
  );
}  

export default CreateCharacter;
