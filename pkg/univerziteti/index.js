const mongoose = require ("mongoose")

const universitySchema = mongoose.Schema({
    name: String,
    adress: String,
    faculty:{
        name: String,
        adress: String,  
    }
   
});

const University = mongoose.model ("universities", universitySchema)

const createUiversity = async (university) => {
    try{
    const universityCreated = new University(university);
    return await universityCreated.save();
    }catch(err){
        throw err;
    }
};

const removeUniversity = async (universityId) => {
    try{
return await University.deleteOne({_id:universityId})
    }catch(err){
        throw err;
    }
}

const updateUniversity = async (id, university) => {
    return await University.updateOne({_id:id, university}) 
  };

const getAllUniversities = async () => {
return await University.find({})
}


module.exports = {
    createUiversity,
    removeUniversity,
    updateUniversity,
    getAllUniversities
}