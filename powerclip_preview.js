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

function createSlide(n){
        //sub content holder
        $subContentHolder = document.createElement('section')
        $subContentHolder.setAttribute('data-action',`action${slideNumberIndi}`)
        //creat delete slide button
        $newDeleteButton = document.createElement('button')
        $newDeleteButton.setAttribute('type','button')
        $newDeleteButton.textContent = 'remove'
        //slide button
        $newSlideButton  = document.createElement('button')
        $newSlideButton.setAttribute('type','menu')
        $newSlideButton.classList.add('collapsible')
        $newSlideButton.textContent = `Slide ${slideNumber}`
        //create slide content
        $newSlideContent = document.createElement('div')
       // $newSlideContent.textContent = "good boy"
        //create content
            //bgColor icon
        $setBgColor = document.createElement('input')
        $setBgColor.setAttribute('type','color')
        $setBgColor.setAttribute('value','#3C107E')
        $setBgColor.setAttribute('oninput','addBgColor(value)')
        $setBgColor.setAttribute('title','background color')
            //color icon
            $setColor = document.createElement('input')
            $setColor.setAttribute('type','color')
            $setColor.setAttribute('value','#8685C7')
            $setColor.setAttribute('oninput','addColor(value)')
            $setColor.setAttribute('title','color text')
            //font icon
            $setFont = document.createElement('input')
            $setFont.setAttribute('type','number')
            $setFont.setAttribute('value','20')
            $setFont.setAttribute('min','5')
            $setFont.setAttribute('oninput','fontSize(value)')
            $setFont.setAttribute('title','tetx size')
            //trans4rm X
            $setX = document.createElement('input')
            $setX.setAttribute('type','number')
            $setX.setAttribute('value','0')
            $setX.setAttribute('oninput','setX(value)')
            $setX.setAttribute('title','transform X')
            //setY
            $setY = document.createElement('input')
            $setY.setAttribute('type','number')
            $setY.setAttribute('value','0')
            $setY.setAttribute('oninput','setY(value)')
            $setY.setAttribute('title','transform Y')
            // text area
          //  $textarea = document.createElement('textarea')
          //  $textarea.setAttribute('placeholder','text')
            
            //template object
            $templateObj = document.createElement('span')
            $templateObj.setAttribute('id', `tempObj${slideNumber}`)
            $templateObj.setAttribute('contenteditable','true')
            $templateObj.textContent = `template Obj ${slideNumber}`

console.log(document.getElementById('tempObj1'))

        //appending childs
        $newSlideButton.appendChild($newDeleteButton)
        $subContentHolder.appendChild($newSlideButton)
        $newSlideContent.appendChild($setBgColor)
        $newSlideContent.appendChild($setColor)
        $newSlideContent.appendChild($setFont) 
        $newSlideContent.appendChild($setX)
        $newSlideContent.appendChild($setY)
        //$newSlideContent.appendChild($textarea)
        $subContentHolder.appendChild($newSlideContent)
        $contentBody.appendChild($subContentHolder)

        $preview.appendChild($templateObj)

}
function removeSlide(n){
    slideNumber--
    slideNumberIndi--
}
createSlide()
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

