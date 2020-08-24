import client from './client';

export const addTravel = async (newTravel) => {
  try {
    return await client.db('Travel').collection('travel').insertOne(newTravel);
  } catch (err) {
    console.log(err);
  }
};

export default addTravel;
