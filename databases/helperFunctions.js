const capitalFirstLetterOnly = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

exports.sqlConditionString = function(query){
  let queryKeys = Object.keys(query);
  let conditions = "";
  let started = false;
  for(let i = 0; i < queryKeys.length; i += 1){
    const searchValue = query[queryKeys[i]];
    const tableColumn = capitalFirstLetterOnly(queryKeys[i]);
    const currentString = `UPPER("${tableColumn}") LIKE UPPER('%${searchValue}%')`;
    if(!started){
      conditions = ` WHERE ${currentString}`;
      started = true;
    } else{
      conditions = `${conditions} AND ${currentString}`; 
    }
  }
  return conditions;
};

exports.sqlUpdateString = function(query){
  let queryKeys = Object.keys(query);
  let updates = "";
  let started = false;
  for(let i = 0; i < queryKeys.length; i += 1){
    const currentKey = capitalFirstLetterOnly(queryKeys[i]);
    const currentString = `${currentKey}='${query[currentKey]}'`;
    if(!started){
      updates = currentString;
      started = true;
    } else{
      updates = `${updates}, ${currentString}`; 
    }
  }
  return updates;
}; 

exports.queryHadAnError = function(err, res){
  if(err) {
    res.status(500).send({message: `Request Failed: ${err}`});
    return true;
  }
  return false;
}; 

exports.newsEventAndDateExist = function(date, event, res){
  if(!date){
    res.status(400).send({message: "Date is missing!"});
    return false;
  } 
  if(!event){
    res.status(400).send({message: "Event is missing!"});
    return false;
  }
  return true;
};