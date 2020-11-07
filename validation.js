const inputs = document.querySelectorAll('input');

const patterns ={
  telephone:/^[0-9]{11}$/
}


function validate(field, regex){
  regex.test(field.value);
}


inputs.forEach((item) =>{
  item.addEventListener('keyup', (e)=>{
    //console.log(e.target.attributes.name.value);
    validate(e.target, patterns['telephone'])
  })
})