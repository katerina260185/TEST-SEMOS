const mongoose = require ("mongoose")

const academiaSchema = mongoose.Schema({
    name:String,
    course: {
        name: String,
    }
});

const course = mongoose.model ("academies", academiaSchema)

const create = async (course) => {
    try{
    const curseCreated = new (course);
    return await curseCreated.save();
    }catch(err){
        throw err;
    }
};



module.exports = {
    create,
}