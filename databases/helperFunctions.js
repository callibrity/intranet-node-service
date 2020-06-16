const capitalFirstLetterOnly = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

exports.sqlConditionString = function(query){
  let queryKeys = Object.keys(query);
  let sqlConditions = "";
  queryKeys.forEach((queryKey) => {
    const searchValue = query[queryKey];
    const tableColumn = capitalFirstLetterOnly(queryKey);
    const conditionString = `UPPER("${tableColumn}") LIKE UPPER('%${searchValue}%')`;
    if(sqlConditions === ""){
      sqlConditions = ` WHERE ${conditionString}`;
    } else{
      sqlConditions = `${sqlConditions} AND ${conditionString}`; 
    }
  });
  return sqlConditions;
};

exports.sqlUpdateString = function(query){
  let queryKeys = Object.keys(query);
  let sqlUpdate = "";
  queryKeys.forEach((queryKey) => {
    const updateValue = query[queryKey];
    const tableColumn = capitalFirstLetterOnly(queryKey);
    const updateString = `"${tableColumn}"='${updateValue}'`;
    if(sqlUpdate === ""){
      sqlUpdate = updateString;
    } else{
      sqlUpdate = `${sqlUpdate}, ${updateString}`; 
    }
  });
  return sqlUpdate;
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