import {ClientSession} from "mongoose"
import db from "../../databaseConfig/mongoConfig"
// import 
export default class BaseMongoDao<InputT, OutputT> {
    model : any

    constructor(model: any){
        this.model = model
    }

    public findById = async (id : string) : Promise<OutputT> => {
        let result = await this.model.findById(id)
        return result
    }

    public create = async(input : InputT): Promise<OutputT> => {
        let result = await this.model.create(input)
        return result
    }

    // public startMongoTransaction = () : ClientSession =>  {
    //     return db.startTransaction()
    // }

    // public getAllPaginated = (limit : number, offset : number, sort: {field : string, order: string} = null, filter : null): Promise<{ rows: OutputT[]; count: number }> => {
    //     let orderArr: Array<Array<string>> = [];
    // }

    
}