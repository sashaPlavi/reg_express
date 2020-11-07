const inputs = document.querySelectorAll('input');

const patterns ={
  telephone:/^[0-9]{11}$/
}


function validate(field, regex){
if(  regex.test(field.value) ){
  field.className='valid';
}else{
  field.className='invalid';
};
}


inputs.forEach((item) =>{
  item.addEventListener('keyup', (e)=>{
    //console.log(e.target.attributes.name.value);
    validate(e.target, patterns[e.target.attributes.name.value])
  })
})