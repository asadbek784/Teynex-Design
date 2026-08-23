
const {getIndex,json,score}=require("./_lib");
module.exports=(req,res)=>{
 const q=String((req.query||{}).q||"").trim();
 if(!q) return json(res,{query:"",results:[]});
 const limit=Math.min(Math.max(Number((req.query||{}).limit)||20,1),100);
 const results=getIndex().map(r=>({...r,_score:score(r,q)})).filter(r=>r._score>0)
   .sort((a,b)=>b._score-a._score || a.id.localeCompare(b.id)).slice(0,limit)
   .map(({_score,...r})=>r);
 json(res,{query:q,count:results.length,results});
};
