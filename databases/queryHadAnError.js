exports.queryHadAnError = function(err, res){
  if(err) {
    res.status(500).send({message: `Request Failed: ${err}`});
    return true;
  }
  return false;
}