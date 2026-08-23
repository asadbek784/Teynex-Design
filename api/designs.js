
const {getIndex,json}=require("./_lib");
module.exports=(req,res)=>{
 const q=req.query||{}, page=Math.max(Number(q.page)||1,1), limit=Math.min(Math.max(Number(q.limit)||50,1),100);
 let a=getIndex();
 if(q.repo) a=a.filter(x=>x.repo===String(q.repo));
 if(q.kind) a=a.filter(x=>x.kind===String(q.kind));
 if(q.tag) a=a.filter(x=>x.tags.includes(String(q.tag).toLowerCase()));
 const total=a.length, start=(page-1)*limit;
 json(res,{page,limit,total,results:a.slice(start,start+limit)});
};
