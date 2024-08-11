document.getElementById('owl').addEventListener('click' , function(e){
    console.log(e);
    e.stopPropagation()
    // it stop bubbling..
} , false)

// event propogation 
// if we have set msg in LI and <ul> both then it is following the bubble it goes from bottom to top 
// that means if we clicked on listitem then first li func and ater that ul will show message.

// type of event-listeners , timestamps, defaultPrevanted
// target, toElement , srcElement, currentTarget
// clientX, clientY, screenX , screenY
// altkey, ctrlkey, shiftkey, keyCode

// addAttcahment()

