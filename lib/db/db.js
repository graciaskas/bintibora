import mongoose, { mongo } from "mongoose";

const { DB_PASSWORD = "Thedon96", DB_USER = "gracias" } = process.env;

const URI = `mongodb://${DB_USER}:${DB_PASSWORD}@localhost:27017/coccafatlas?authSource=admin`;

//const URI = `mongodb://mongo:27017/coccafatlas?directConnection=true&retryWrites=true&w=majority`;

// const localURI = `mongodb://gracias:Thedon96@localhost:27017/bintibora?authSource=admin`;

// db.createUser({
//   user: "gracias",
//   pwd: "Thedon96",
//   roles: ["userAdminAnyDatabase", "dbAdminAnyDatabase", "readWriteAnyDatabase"],
// });

const options = {
  autoIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connectDB = async () => {
  try {
    await mongoose.connect(URI, options);
    console.log("Database connected");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
