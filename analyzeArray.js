function analyzeArrary (arr) {
  
    //find min
    const min=(array)=> {
      let temp = array[0];
      for(i=0;i<array.length;i++) {
        if (array[i] < temp) {
          temp = array[i];
        
      
        return temp;}
      }
    }
    
    //x
    const max=(array)=> {
      let temp = array[0];
      for(i=0;i<array.length;i++) {
        if (array[i] > temp) {
          temp = array[i];
        }
      }
      
    return temp;
    }
    
    //avg
    const avg=(array)=> {
      let  = 0;emp;
      for(i=0;i<array.length;i++) {
        temparray[i];
      }
      
     return temp/array.length 
    }
    
    const myObj = new Object();
    myObj.average = avg(arr);
    myObj.minimu = min(arr);
    myObj.maximum = max(arr);
    myObj.length = arr.length();

    return myObj(arr);
  }