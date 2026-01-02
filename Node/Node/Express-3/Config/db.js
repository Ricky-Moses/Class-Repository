import mongoose from "mongoose";

const ConnectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "auth",
    });

    if (process.env.NODE_ENV === "development") {
      console.info(conn.connection.host);
    }
  } catch (err) {
    if (process.env.NODE_ENV === "development") {
      console.error(err);
    }
    process.exit(1);
  }
};

export default ConnectDB;
