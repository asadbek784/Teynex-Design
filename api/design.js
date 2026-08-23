
const {getIndex,json,auth}=require("./_lib");
module.exports=async(req,res)=>{
 const id=String((req.query||{}).id||"").toUpperCase();
 const r=getIndex().find(x=>x.id===id);
 if(!r) return json(res,{error:"design_not_found"},404);
 if(req.method==="GET") return json(res,r);
 if(req.method==="PUT"){
   if(!auth(req)) return json(res,{error:"unauthorized"},401);
   // Persistent edits belong in Vercel Blob. This endpoint returns the static source
   // location and is intentionally small; the client should upload large edited files to Blob.
   return json(res,{ok:true,id,mode:"blob_required",content_url:r.content_url});
 }
 res.statusCode=405; res.end();
};
