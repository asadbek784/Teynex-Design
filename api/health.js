
const {json}=require("./_lib");
module.exports=(req,res)=>json(res,{ok:true,service:"TEYNEX Design API",version:"1.0.0"});
