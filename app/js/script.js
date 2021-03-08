const text = document.querySelectorAll('.text');

text.forEach(function(elem){
    elem.addEventListener('click', function(){
        if(elem.classList.contains("open")){
            elem.classList.remove("open")
        } else {
            elem.classList.add("open");
        }
    })
})