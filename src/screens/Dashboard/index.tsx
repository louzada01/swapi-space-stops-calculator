/* eslint-disable camelcase */
import React, { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import RDroidImage from '../../assets/r-unitdroids.gif'

import { getStartshipsByMgltRange } from '../../services/api';

import { Container , Title, Subtitle, Form, Starships, Error, Img } from './styles';

import { IStarships } from '../../interfaces'
const Dashboard: React.FC = () => {
  const [mglt, setMglt] = useState<Number | any>();
  const [inputError, setInputError] = useState('');
  const [loading, setLoading] = useState(false);
  const [starships, setStarships] = useState<IStarships[]>([]);


  const handleCauculateMglt = async (
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault();
    if (!mglt) {
      setInputError('MGLT value is required');
      return;
    }
    setInputError('')
    setLoading(true)
    const starshipsByMglt: any = await getStartshipsByMgltRange(mglt);
    setStarships(starshipsByMglt)
    console.log('45 - ', starshipsByMglt);

    setLoading(false)
  };

  return (
    <Container>
      <Img src={RDroidImage} alt="Image droid gif"/>
      <Title>Droid Cauculator</Title>
      <Subtitle>Space stops calculator</Subtitle>
      <Form hasError={!!inputError} onSubmit={handleCauculateMglt}>
        <input
          value={mglt}
          onChange={(e) => setMglt(parseInt(e.target.value) || 0)}
          placeholder="Input number in MGLT."
        />
        <button type="submit">{loading ? 'LOADING...' : 'SEND'}</button>
      </Form>
      {inputError && <Error>{inputError}</Error>}

      <Starships>
        {
        starships.map((nav:IStarships) => (
          <Link key={nav.name} to={nav.url}>
            <div>
              <strong>Name: {nav.name}</strong>
              <p>Number of stops: {nav.stops}</p>
            </div>
          </Link>
        ))
        }
      </Starships>
    </ Container>
  );
};

export default Dashboard;
