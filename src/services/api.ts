import axios from 'axios';
import { IStarships } from '../interfaces'

export const swapiApi = axios.create({
  baseURL: 'https://swapi.dev/api',
});

export const getAllStartships = async ():Promise<IStarships[]> => {
  const {data: starships} = await swapiApi.get('/starships');

  return starships.results;
} 

export const getStartshipsByMgltRange = async (mglt: number ) =>{
  const starshipsReturn = await getAllStartships();
  
  function defineUnitsTime(consumables: string){
    if(consumables.includes('year')){
      return 8064
    }
    if(consumables.includes('month')){
      return 672
    }
    if(consumables.includes('week')){
      return 168
    }
    if(consumables.includes('day')){
      return 24
    }
    return 0;
  }
  const starships:IStarships[] = [];
  
  starshipsReturn.map((starship : IStarships) => {
    const stops =  Math.floor(
      mglt /
      parseInt(starship.MGLT) /
      (starship.consumables.match(/\d+/)[0] * defineUnitsTime(starship.consumables))
      )

    return starships.push({ ...starship, stops })

  })

  return starships
}