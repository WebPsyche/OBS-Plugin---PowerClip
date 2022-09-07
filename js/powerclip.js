//power clip 1.0

//set function for the mode buttons
function setMode(mode){
    for(let i=0; i<1; i++){
        document.querySelector('.slide_content').style.display = 'none'
        document.querySelector('.lw3_content').style.display = 'none'
        document.querySelector('.mode_slide').classList.remove('modeActive')
        document.querySelector('.mode_lw3').classList.remove('modeActive')
    }
    document.querySelector(`.${mode}_content`).style.display = 'block'
    document.querySelector(`.mode_${mode}`).classList.add('modeActive')

}

console.log(33)