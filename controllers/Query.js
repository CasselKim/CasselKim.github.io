const DDB = require('../models/DDB.js')
module.exports = async(req,res)=>{
    res.render('post',{
        DDB
    });
}