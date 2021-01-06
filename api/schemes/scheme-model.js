// scheme-model
const db = require('../../data/db-config')


const find =()=>{
    return db('schemes')

}

// find schemes
const findById = id=>{
return db('schemes').where('id',id).first()
}

//find steps based on schemeID
const findSteps = schemesId =>{

    return db('schemes as s')
        .innerJoin('steps','s.id','steps.scheme_id')
        .where('s.id',schemesId)
        .select('steps.id','steps.step_number','s.scheme_name','steps.instructions')
}

//add scheme
const add = schemData =>{
    return db('schemes').insert(schemData)
}

//add steps
const addStep = (stepData,id)=>{

    return db('steps')
    .innerJoin('schemes as s','s.id','steps.scheme_id')
    .insert(stepData)
    .where('steps.scheme_id',id)
}

//update scheme
const update=(updated,id)=>{
    return db('schemes').update(updated).where('id',id)
}

//remove scheme
const remove = id=>{
    return db('schemes').where('id',id).del()
}

module.exports = {find,findById,findSteps,add,addStep,update,remove}
