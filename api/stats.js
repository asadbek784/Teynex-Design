
const {getIndex,json}=require("./_lib");
module.exports=(req,res)=>{
 const i=getIndex(), repos={};
 for(const r of i) repos[r.repo]=(repos[r.repo]||0)+1;
 json(res,{total_files:i.length,unique_sha256:new Set(i.map(x=>x.sha256)).size,repositories:repos});
};
