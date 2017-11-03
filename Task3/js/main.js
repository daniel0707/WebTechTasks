

const inputs = document.querySelectorAll('input');

const checkAttribute = (elements, attr, func) => {
    let checkOK = true;
    elements.forEach((element) => {
        if (element.hasAttribute('required')) {
            if(checkOK == true){
                checkOK = func(element);
            }else{
                func(element);
            }
        }
        if(element.hasAttribute('pattern')){
            if(checkOK == true){
                checkOK = checkPattern(element);
            }else{
                checkPattern(element);
            }
        }
    });
    return checkOK;
};

const checkEmpty = (element) => {
    if(element.value ===''){
        //empty input
        element.setAttribute('style','border: red solid 1px');
        return false;
    }else{
        element.removeAttribute('style');
        return true;
    }
};

const checkPattern = (element) => {
    const pattern = new RegExp(element.getAttribute('pattern'),'i');
    const value = element.value;
    if(pattern.test(value)){
       //correct format
        element.removeAttribute('style');
        return true;
    }
    else{
        element.setAttribute('style','background: yellow');
        return false;
    }
};

const form =  document.querySelector('form');

form.addEventListener('submit',(evt)=>{
   evt.preventDefault();
   if(checkAttribute(inputs,'required',checkEmpty)){
       evt.sub();
   }
});