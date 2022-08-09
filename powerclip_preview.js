$textarea = document.getElementById('textarea')
$preview = document.querySelector('.preview')
//console.log($preview.textContent.length)
//$textarea.innerHTML = "2333"
//for (i = 0; i < $textarea.textContent.length; i++){
//    $preview.textContent = $textarea.textContent
//}
//...live preview
//.....add bg color,,,,
function addBgColor(e){
    let obj = document.querySelector(`#tempObj${slideNumber}`)
    obj.style.backgroundColor = e
}
//,,,add color function
function addColor(e){
    let obj = document.querySelector(`#tempObj${slideNumber}`)
    obj.style.color = e
}
//......change font size
function fontSize (e){
    let obj = document.querySelector(`#tempObj${slideNumber}`)
    obj.style.fontSize = e+"px";
}
function setX (e){
    let obj = document.querySelector(`#tempObj${slideNumber}`)
    obj.style.transform = `translateX(${e}px)`;
   // (()=>{
   //     let style = window.getComputedStyle(obj)
   //     let matrix = new WebKitCSSMatrix(style.transform)
   //     console.log('translateX: ', matrix.m41)
   // })()
}
function setY (e){
    let obj = document.querySelector(`#tempObj${slideNumber}`)
    obj.style.transform = `translateY(${e}px)`;
}
//....switch button....
function activate(id){
    $checkbox = document.querySelector('.checkbox')
    $pptCon = document.querySelector('.properties_container')
    if($checkbox.checked === true){
        $pptCon.classList.add('display_transition_reverse')
        $pptCon.classList.remove('display_transition')

        
        $previewPane = document.createElement('span')
        //$previewPane.textContent = "wertt"
        $preview.appendChild($previewPane)

        function output (e) {
            $previewPane.textContent = e.target.value;
        }
        $textarea.addEventListener('keyup', output)

    }else{
        $pptCon.classList.add('display_transition')
        $pptCon.classList.remove('display_transition_reverse')

        $preview.removeChild($previewPane)
    }
}
$contentBody = document.querySelector('.body ')
$contentBodyChildren = $contentBody.children
let slideNumber = 1
let slideNumberIndi = 1


            //template object
           // $templateObj = document.createElement('span')
           // $templateObj.setAttribute('id', `tempObj${slideNumber}`)
           // $templateObj.setAttribute('contenteditable','true')
           // $templateObj.textContent = `template Obj ${slideNumber}`




function removeSlide(n){
    slideNumber--
    slideNumberIndi--
}
//createSlide()
function addSlide(){
    slideNumber++
    slideNumberIndi++
    createSlide(slideNumber)
    ok()
    glad()
}
    //...deleting slides
   function ok() {
       //$section = document.getElementById('section')
        for(let search of $contentBody.children){
        search.addEventListener('click', e=>{
        if(e.target.matches('button [type=button]')){
            search.remove()

        } 
    })
    }}ok()
    



//$collapsible = document.querySelector("button")
//for(i=0; i<2; i++){
    function glad(){
    for(let check of $contentBody.children){
        for(let per of check.children){
            console.log(per.firstElementChild)
        }
        console.log(check)
        $collapsible = check.children[0]
        $collapsible.addEventListener('click', ()=>{
            $collapsible.classList.toggle("active")
            $content = $collapsible.nextElementSibling;
            if($content.style.maxHeight){
                $content.style.maxHeight = null
            }else{
                $content.style.maxHeight = $content.scrollHeight + "px";
            }
        })
    }
}glad()
//}
//console.log($collapsible)





//$subContentHolder = document.querySelector('section')
$subContentChild = $subContentHolder.children
console.log($subContentHolder.children.length)

//for (i = 0; i < $subContentChild.length; i++){
//    console.log($subContentChild[i])
//  $subContentChild[i].addEventListener('click', ()=>{
//        //$subContentChild[i].classList.toggle("active");
//        $content = $subContentChild[i].nextElementSibling;
//        console.log($content)
//        if($content.style.maxHeight){
//            $content.style.maxHeight = null
//        }else{
//            $content.style.maxHeight = $content.scrollHeight + "px"
//        }
//    })
//}
//

