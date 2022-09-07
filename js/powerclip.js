//power clip 1.0

//set function for the mode buttons
function setMode(mode){
    for(let i=0; i<2; i++){
        document.querySelector('.slide_content').style.display = 'none'
        document.querySelector('.lw3_content').style.display = 'none'
    }
    document.querySelector(`.${mode}_content`).style.display = 'block'
    document.querySelector(`.mode_${mode}`).classList.add('mode_button_active')
    console.log(mode)
}
console.log(33)