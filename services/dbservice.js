const mongo = require('mongoose')
const url = "mongodb://127.0.0.1:27017/crud"


mongo.connect(url)

const readRecord = async(Schema)=>{
    const dbRes=await Schema.find();
    return dbRes
}

const createRecord = async(data,Schema)=>{
    const dbRes=await new Schema(data).save();
    return dbRes
}

const updateRecord = async(id,data,Schema)=>{
    const dbRes=await Schema.findByIdAndUpdate(id,data,{new:true})
    return dbRes
}

const removeRecord = async(id,Schema)=>{
    const dbRes=await Schema.findByIdAndDelete(id)
    return dbRes
}

module.exports={
    readRecord,
    createRecord,
    updateRecord,
    removeRecord
}