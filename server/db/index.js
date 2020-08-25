import client from './client';

export const addTravel = async (newTravel) => {
  try {
    const insertRes = await client.db('Travel').collection('travel').insertOne(newTravel);
    return insertRes;
  } catch (err) {
    console.log(err);
  }
};

export const deleteAllTravels = async () => {
  try {
    const delRes = await client.db('Travel').collection('travel').remove();
    return delRes;
  } catch (err) {
    console.log(err);
  }
};

export const loginTravel = async () => {
  try {
    const findRes = await client.db('Travel').collection('travel').find();
    return findRes;
  } catch (err) {
    console.log(err);
  }
};
