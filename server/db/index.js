import client from './client';

export const addTravel = async (newTravel) => {
  try {
    const insertRes = await client.db('Travel').collection('travel').insertOne(newTravel);
    return insertRes;
  } catch (err) {
    throw new Error(err);
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

export const showTravels = async (email) => {
  try {
    const showRes = await client.db('Travel').collection('travel').find({ email }).toArray();
    return showRes;
  } catch (err) {
    console.log(err);
  }
};
