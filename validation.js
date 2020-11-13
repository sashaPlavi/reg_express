const inputs = document.querySelectorAll('input');

const patterns ={
  telephone:/^[0-9]{11}$/,
  username:/^[a-z\d]{5,12}$/i,
  password:/^[\w@-]{8,12}$/,
  slug:/^[a-z0-9-]{8,20}$/,
  email:/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
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