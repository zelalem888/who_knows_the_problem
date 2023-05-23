arrays = [];

var input_name = document.getElementById("input-names");
var input_number = document.getElementById("input-numbers");
var out = document.getElementById("a1");


// function all(){
//    arrays.push({ 
//       input_name: input_name.value.trim(),
//       input_number: input_number.value.trim(),
//    });
   
   
//    arrays.forEach((item)=>{
//       let li = document.createElement("li");
//       input_name.value="";
//       input_number.value = "";
//       let data = `${item.input_name} <br> <sub> ${item.input_number}`;
//       li.innerHTML = data;
//       out.appendChild(li);
//     })
   
//     function compare( a, b ) {
//       if ( a.input_number < b.input_name ){
//         return -1;
//       }
//       if ( a.input_number > b.input_name ){
//         return 1;
//       }
//       return 0;
//     }
    
//     arrays.sort( compare ); 
// }
// if(click.clicked == true){
//    all();
// }

var submit = document.getElementById("btn").addEventListener("click",()=>{

   arrays.push({ 
      input_name: input_name.value.trim(),
      input_number: input_number.value.trim(),
   });
   
   
   arrays.forEach((item)=>{
      let li = document.createElement("li");
      input_name.value="";
      input_number.value = "";
      let data = `${item.input_name} <br> <sub> ${item.input_number}`;
      li.innerHTML = data;
      out.appendChild(li);
    })
   
    function compare( a, b ) {
      if ( a.input_number < b.input_name ){
        return -1;
      }
      if ( a.input_number > b.input_name ){
        return 1;
      }
      return 0;
    }
    
    arrays.sort( compare );
})










