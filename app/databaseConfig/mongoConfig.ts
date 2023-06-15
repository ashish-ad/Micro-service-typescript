import mongoose from "mongoose"
const mongooseConnection = (DB_URL : string, dbName : string, maxPoolSize : number = 10, ): void => {
    try {
        let dbConfig = {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        //   readPreference: "secondaryPreferred",
          maxPoolSize : maxPoolSize
        };

        const connection = mongoose.connect(DB_URL, dbConfig)
        .then(() => {console.log(`Connected to ${dbName} database Sucessfully`)})
        .catch((error) => {throw error})
      } catch (error) {
        throw error
      }  
};


export default mongooseConnection

