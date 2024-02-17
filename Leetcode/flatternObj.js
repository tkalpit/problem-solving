let ob = {
    Company: "GeeksforGeeks",
    Address: "Noida",
    contact: +91 - 999999999,
    mentor: {
      HTML: "GFG",
      CSS: "GFG",
      JavaScript: "GFG"
    }
  };
  
  function flatternObj(ob) {
  let updatedObj = {};
    Object.keys(ob).forEach((key) => {
    
      if (typeof ob[key] === 'object') {
        const temp = flatternObj(ob[key]);
        for(let j in temp) {
            updatedObj[key+'.'+j] = temp[j];
        }
      } else {
          updatedObj[key] = ob[key];
      }
    })
    return updatedObj;
  }
  
  console.log(flatternObj(ob));
  
//   OUTPUT:
//   {
//     Address: "Noida",
//     Company: "GeeksforGeeks",
//     contact: -999999908,
//     mentor.CSS: "GFG",
//     mentor.HTML: "GFG",
//     mentor.JavaScript: "GFG"
//   }