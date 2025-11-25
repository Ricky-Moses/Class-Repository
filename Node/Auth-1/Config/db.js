import mongoose from "mongoose";

const ConnectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      dbName: "user", // Optional
    });
    console.info(
      `Server connected mongodb successfully ${conn.connection.host}`
    );
  } catch (err) {
    console.error(err.message);
  }
};

export default ConnectDB;
