

let MultielementCreater=(e)=>{
   let element=document.createRange().createContextualFragment(e)

  return element;
}
 export {MultielementCreater}

