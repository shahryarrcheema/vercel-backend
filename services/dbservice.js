const mongo = require('mongoose')
const url = process.env.DB_URL; 


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