const 
{
    createUiversity,
    removeUniversity,
    updateUniversity,
    getAllUniversities
} = require ("../pkg/university")

const createNewUniversity = async (req, res) => {
    try{        
        await createNewUniversity(req.body)
        return res.status(201).send(req.body)
    }catch(err) {
        console.log(err)
        return res.status(500).send("Internal server error")
    }

}

const deleteOneUniversity = async (req, res) => {
    try{
        await removeUniversity(req.params.id)
        return res.status(201).send("university delete")
    }catch(err){
        return res.status(500).send("Internal server error")
    }
}

const updateOneUniversity = async(req, res) => {
    try{
        await updateUniversity(req.params.id, req.body)
        return res.status(204).send("")
    } catch(err) {
        console.log(err)
        return res.status(500).send("Internal server error")

    }
}

const getAllUniversitiesApi = async(req,res) =>{
    try{
     const universities = await getAllUniversities();
    return res.status(200).send(universities)
    } catch(err){
        console.log(err)
        return res.status(500).send("Internal server error")
    }
};

module.exports = {
    getAllUniversitiesApi,
    updateOneUniversity,
    createNewUniversity,
    deleteOneUniversity
}