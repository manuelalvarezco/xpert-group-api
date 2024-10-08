import 'dotenv/config';

import mongoose from 'mongoose';

const dbConect = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_CDN}`);
    console.log('Base de datos online');
  } catch (error) {
    console.error(error);
    console.log('Error al conectarse a la base de datos');
  }
};

async function dbConnection() {
  await dbConect();
}

export default dbConnection;
