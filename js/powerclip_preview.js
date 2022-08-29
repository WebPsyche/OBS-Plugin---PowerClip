//PowerClip
$slides = document.querySelectorAll('section')
$collapsibles = document.querySelectorAll('.collapsible')
$collapsibleContent = document.querySelectorAll(".collapsibleContent")

    //setting class templates for all slides
    class slides {
        slideInfo = {
            slideName:"Slide",
            slideAnimationClass:"basic",
            previewDisplay:"none",
            videoDisplay:""
        }
        header = {
            headerText:"Header",
            headerTextAlign: "",
            headerTextItalics:"",
            headerTextBold:"",
            headerTextUnderline:"",
            headerTextColor:"",
            headerTextBackgroundColor:"",
            headerFont:"",
            headerFontSize:"",
            headerPositionX: "",
            headerPositionY:""
        }
        body = {
            bodyText:"Text",
            bodyTextAlign: "",
            bodyTextItalics:"",
            bodyTextBold:"",
            bodyTextUnderline:"",
            bodyTextColor:"",
            bodyTextBackgroundColor:"",
            bodyFont:"",
            bodyFontSize:"",
            bodyPositionX:"",
            bodyPositionY:""
        }
        background = {
            backgroudAnimationClass: "",
            backgroundColor:"",
            backgroundDisplay:""
        }
    }
    //setgting array for all slides
$allSlides = [
    $slide1 = new slides,
    $slide2 = new slides,
    $slide3 = new slides,
    $slide4 = new slides
    ]   
    console.log($slide1)

    //for looper i functions for all slides

for(let i=0;i<$slides.length;i++){
    //set slides name numerically
    $collapsibles[i].textContent = `Slide ${i+1}`
    //set collapsibles
    $collapsibles[i].addEventListener('click', ()=>{
        $collapsibles[i].classList.toggle("active")
        $content = $collapsibleContent[i]
       
        if($content.style.maxHeight){
            $content.style.maxHeight = null
        }else{
            $content.style.maxHeight = $content.scrollHeight + "px";
        } 
    })
    //for rename button
    
    $setSlideName = document.querySelectorAll('.rename')
    $setSlideName[i].addEventListener('click',()=>{
    
        //$setSlideName[i].classList.toggle('showBoxShadow')
        //$collapsibles[i].setAttribute('contenteditable','true')
        $allSlides[i].slideInfo.slideName = $collapsibles[i].textContent
        //console.log(event.data)
    })
    
        //set preview button
        $previewbtn = document.querySelectorAll('.previewbtn')
        $previewbtn[i].addEventListener('click',()=>{
            if($previewbtn[i].classList.contains('previewOn')){
                $previewbtn[i].classList.remove('previewOn')
                $allSlides[i].slideInfo.previewDisplay = "none";
            }else{
                for(let e=0;e<$previewbtn.length;e++){
                    $previewbtn[e].classList.remove('previewOn')
                    $allSlides[e].slideInfo.previewDisplay = "none";
                    //console.log($allSlides[e].preview.previewDisplay)
                }
                $previewbtn[i].classList.toggle('previewOn')
                $allSlides[i].slideInfo.previewDisplay = "block";
                console.log($allSlides[i].slideInfo.previewDisplay)
            }
            
        })
        const slideVideo = new BroadcastChannel('show_video')
       // const hideVideo = new BroadcastChannel('hide_video')
    
        //set live video button
        $vidShows = document.querySelectorAll('.vidShow')
        $vidOn = document.querySelectorAll('#vidOn')
        $vidOff = document.querySelectorAll('#vidOff')
        $vidShows[i].addEventListener('click',()=>{
           //for(let e=0;e<$vidShows.length;e++){
           // $vidShows[e].classList.remove('showBoxShadow')
           //}
           // $vidShows[i].classList.toggle('showBoxShadow')
           if($vidShows[i].classList.contains('showBoxShadow')){
                $vidShows[i].classList.remove('showBoxShadow')
                slideVideo.postMessage('off')
           }else{
                for(let e=0;e<$vidShows.length;e++){
                $vidShows[e].classList.remove('showBoxShadow')
                //slideVideo.postMessage('off')
                }
                $vidShows[i].classList.toggle('showBoxShadow')
                slideVideo.postMessage($allSlides[i])
            
            
           }
        })

        //set text animation function
        //animation one
        $setTextAnimationOneBtns = document.querySelectorAll('.setTextAnimation1')
        $setTextAnimationOneBtns[i].addEventListener('click',()=>{
            $allSlides[i].slideInfo.slideAnimationClass = 'basic';
            //localStorage.setItem(`Slide${i+1}.body.textAnimationClass`,'basic')
            console.log( $allSlides[i])
        })
        //animation two 
        $setTextAnimationTwoBtns = document.querySelectorAll('.setTextAnimation2')
        $setTextAnimationTwoBtns[i].addEventListener('click',()=>{
            $allSlides[i].slideInfo.slideAnimationClass = 'welcome';
            console.log( $allSlides[i])
        })
        //backgroundColor
        $backgroundColor = document.querySelector('.backgroundColor')
        $backgroundColor.addEventListener('input',(event)=>{
            $allSlides[i].background.backgroundColor = event.target.value
            $backgroundColor.style.backgroundColor = event.target.value
        })
        //set background Animation
        //background animation one
        $setBackgroundAnimationOneBtns = document.querySelectorAll('.BackgroundAnimation1')
        $setBackgroundAnimationOneBtns[i].addEventListener('click',()=>{
            $allSlides[i].background.backgroudAnimationClass = 'saturn';
            console.log( $allSlides[i])
        })
        //background animation two
        $setBackgroundAnimationTwoBtns = document.querySelectorAll('.BackgroundAnimation2')
        $setBackgroundAnimationTwoBtns[i].addEventListener('click',()=>{
            $allSlides[i].background.bodyTextAlign = 'symphony';
            console.log( $allSlides[i])
        })
        
        //alignment
            //alignment left
        $alignHeaderTextLeft = document.querySelectorAll('.alignHeaderTextLeft')
        $alignHeaderTextLeft[i].addEventListener('click',()=>{
            $allSlides[i].header.headerTextAlign = 'left';
            console.log( $allSlides[i])
        })
             //alignment center
             $alignHeaderTextCenter = document.querySelectorAll('.alignHeaderTextCenter')
             $alignHeaderTextCenter[i].addEventListener('click',()=>{
                 $allSlides[i].header.headerTextAlign = 'center';
                 console.log( $allSlides[i])
             })
                  //alignment right
        $alignHeaderTextRight = document.querySelectorAll('.alignHeaderTextRight')
        $alignHeaderTextRight[i].addEventListener('click',()=>{
            $allSlides[i].header.headerTextAlign = 'right';
            console.log( $allSlides[i])
        })
            //header text position
                //header text postion left
        $headerTextPositionLeftX = document.querySelectorAll('.headerTextPositionLeftX')
        $headerTextPositionLeftX[i].addEventListener('click',()=>{
            $allSlides[i].header.headerPositionX = '';
            console.log( $allSlides[i])
        })
        //header text positon right
        $headerTextPositionRightX = document.querySelectorAll('.headerTextPositionRightX')
        $headerTextPositionRightX[i].addEventListener('click',()=>{
            $allSlides[i].header.headerPositionX = '';
            console.log( $allSlides[i])
        })
        //header text position up
         $headerTextPositionUpY = document.querySelectorAll('.headerTextPositionUpY')
         $headerTextPositionUpY[i].addEventListener('click',()=>{
             $allSlides[i].header.headerPositionY = '';
             console.log( $allSlides[i])
         })
         //header text position down
         $headerTextPositionUpY = document.querySelectorAll('.headerTextPositionUpY')
         $headerTextPositionUpY[i].addEventListener('click',()=>{
             $allSlides[i].header.headerPositionY = '';
             console.log( $allSlides[i])
         })
            
         //header text font style
         //header text bold
         let headerBold = false
         $headerTextBold = document.querySelectorAll('.headerTextBold')
         $headerTextBold[i].addEventListener('click',()=>{
            $headerTextBold[i].classList.toggle('buttonIndicator')
            if(headerBold===false){
                $allSlides[i].header.headerTextBold = "bold"
                headerBold = true
            }else{
                $allSlides[i].header.headerTextBold = "normal"
            }
                
                 //console.log( $allSlides[i])
         })
         //header text italics
         let headerItalic = false 
         $headerTextItalics = document.querySelectorAll('.headerTextItalics')
         $headerTextItalics[i].addEventListener('click',()=>{
            $headerTextItalics[i].classList.toggle('buttonIndicator')
            if(headerItalic===false){
                $allSlides[i].header.headerTextItalics = 'italic';
                headerItalic = true
            }else{
                $allSlides[i].header.headerTextItalics = 'normal';
                headerItalic = false
            }
            
             console.log( $allSlides[i])
         })
         //header text underline
         let headerUnderline = false
         $headerTextUnderline = document.querySelectorAll('.headerTextUnderline')
         $headerTextUnderline[i].addEventListener('click',()=>{
            $headerTextUnderline[i].classList.toggle('buttonIndicator')
            if(headerUnderline===false){
                $allSlides[i].header.headerTextUnderline = 'underline';
                headerUnderline = true
            }else{
                $allSlides[i].header.headerTextUnderline = 'none';
                headerUnderline = false
            }
            
             console.log( $allSlides[i])
         })

         //header text font size
          //header text font size increase
         let headerFontSize = 10
         $headerTextFontSizeIncrease = document.querySelectorAll('.headerTextFontSizeIncrease')
         $headerTextFontSizeIncrease[i].addEventListener('click',()=>{
            headerFontSize++
             $allSlides[i].header.headerFontSize = headerFontSize
             console.log( $allSlides[i])
         })
           //header text font size decrease
           $headerTextFontSizeDecrease = document.querySelectorAll('.headerTextFontSizeDecrease')
           $headerTextFontSizeDecrease[i].addEventListener('click',()=>{
              headerFontSize--
               $allSlides[i].header.headerFontSize = headerFontSize
               console.log( $allSlides[i])
           })

           //align body text
            //align body text left
           $alignBodyTextLeft = document.querySelectorAll('.alignBodyTextLeft')
           $alignBodyTextLeft[i].addEventListener('click',()=>{
               $allSlides[i].body.bodyTextAlign = 'left';
               console.log( $allSlides[i])
           })
            //align body text center
            $alignBodyTextCenter = document.querySelectorAll('.alignBodyTextCenter')
            $alignBodyTextCenter[i].addEventListener('click',()=>{
                $allSlides[i].body.bodyTextAlign = 'center';
                console.log( $allSlides[i])
            })
             //align body text right
           $alignBodyTextRight = document.querySelectorAll('.alignBodyTextRight')
           $alignBodyTextRight[i].addEventListener('click',()=>{
               $allSlides[i].body.bodyTextAlign = 'right';
               console.log( $allSlides[i])
           })

            // body text position
            //body position left
            let bodyTextPositionX = 0
            $bodyTextPositionLeftX = document.querySelectorAll('.bodyTextPositionLeftX')
            $bodyTextPositionLeftX[i].addEventListener('click',()=>{
                bodyTextPositionX--
                $allSlides[i].body.bodyPositionX = bodyTextPositionX;
                console.log( $allSlides[i])
            })
            //body position right
            $bodyTextPositionRightX = document.querySelectorAll('.bodyTextPositionRightX')
            $bodyTextPositionRightX[i].addEventListener('click',()=>{
                bodyTextPositionX++
                $allSlides[i].body.bodyPositionX = bodyTextPositionX;
                console.log( $allSlides[i])
            })
            $bodyTextPositionRightX[i].addEventListener('mousedown',()=>{
                bodyTextPositionX++
                $allSlides[i].body.bodyPositionX = bodyTextPositionX;
                console.log( $allSlides[i])
            })
            //body position up
                let bodyTextPositionY = 0
            $bodyTextPositionUpY = document.querySelectorAll('.bodyTextPositionUpY')
            $bodyTextPositionUpY[i].addEventListener('click',()=>{
                bodyTextPositionY--
                $allSlides[i].body.bodyPositionY = bodyTextPositionY;
                console.log( $allSlides[i])
            })
            $bodyTextPositionUpY[i].addEventListener('mousedown',()=>{
                bodyTextPositionY--
                $allSlides[i].body.bodyPositionY = bodyTextPositionY;
                console.log( $allSlides[i])
            })
            //body position doen
            $bodyTextPositionDownY = document.querySelectorAll('.bodyTextPositionDownY')
            $bodyTextPositionDownY[i].addEventListener('click',()=>{
                bodyTextPositionY++
                $allSlides[i].body.bodyPositionY = bodyTextPositionY;
                console.log( $allSlides[i])
            })

            //body text font style
            //body text bold
            let textBold  = false
            $bodyTextBold = document.querySelectorAll('.bodyTextBold')
            $bodyTextBold[i].addEventListener('click',()=>{
                $bodyTextBold[i].classList.toggle('buttonIndicator')
               
               if(textBold===false){
                $allSlides[i].body.bodyTextBold = "bold";
                textBold = true
               }else{
                    $allSlides[i].body.bodyTextBold = "normal";
                    textBold = false
               }
               // console.log( $allSlides[i])
            })
             //body text italics
             let textItalics = false
             $bodyTextItalics = document.querySelectorAll('.bodyTextItalics')
             $bodyTextItalics[i].addEventListener('click',()=>{
                $bodyTextItalics[i].classList.toggle('buttonIndicator')
                if(textItalics===false){
                    $allSlides[i].body.bodyTextItalics = 'italic';
                    textItalics = true
                }else {
                    $allSlides[i].body.bodyTextItalics = 'normal';
                    textItalics = false
                }
                
                 //console.log( $allSlides[i])
             })
              //body text underline
              let textUnderline = false
            $bodyTextUnderline = document.querySelectorAll('.bodyTextUnderline')
            $bodyTextUnderline[i].addEventListener('click',()=>{
            $bodyTextUnderline[i].classList.toggle('buttonIndicator')
                if(textUnderline===false){
                    $allSlides[i].body.bodyTextUnderline = 'underline';
                    textUnderline = true
                }else{
                    $allSlides[i].body.bodyTextUnderline = 'none'
                    textUnderline = false
                }
              // console.log( $allSlides[i])
            })
            
            //body text fontsize 
             //body text font size increase
             let bodyText = 5
             $bodyTextFontSizeIncrease = document.querySelectorAll('.bodyTextFontSizeIncrease')
             $bodyTextFontSizeIncrease[i].addEventListener('click',()=>{
                bodyText++
                 $allSlides[i].body.bodyFontSize = bodyText
                 console.log( $allSlides[i])
             })
              //body text font size decrease
              $bodyTextFontSizeDecrease = document.querySelectorAll('.bodyTextFontSizeDecrease')
              $bodyTextFontSizeDecrease[i].addEventListener('click',()=>{
                bodyText--
                  $allSlides[i].body.bodyFontSize = bodyText;
                  console.log( $allSlides[i])
              })

               //header and body font
                  //header font
             $fontHeader = document.querySelectorAll('.fontHeader')
             $fontHeader[i].addEventListener('change',(event)=>{
                 $allSlides[i].header.HeaderFont = event.target.value;
                 console.log( $allSlides[i])
             })
             //body font
             $fontBody = document.querySelectorAll('.fontBody')
             $fontBody[i].addEventListener('change',(event)=>{
                 $allSlides[i].body.bodyFont = event.target.value;
                 console.log( $allSlides[i])
                 console.log(event.target.value)
             })
             //header colors
             //header text color
             
             $headerTextColor = document.querySelectorAll('.headerTextColor')
             $headerTextColor[i].addEventListener('input',(event)=>{
                 $allSlides[i].header.headerTextColor = event.target.value;
                 $headerTextColor[i].style.backgroundColor = event.target.value
                // $headerTextInput[i].style.color = event.target.value
             })
           
              //header text backgroundcolor
              $headerTextBackgroundColor = document.querySelectorAll('.headerTextBackgroundColor')
              $headerTextBackgroundColor[i].addEventListener('input',(event)=>{
                  $allSlides[i].header.headerTextBackgroundColor = event.target.value;
                  $headerTextBackgroundColor[i].style.backgroundColor = event.target.value
                  //$headerTextInput[i].style.backgroundColor = event.target.value
              })
              //body colors
               //body text color
             $bodyTextColor = document.querySelectorAll('.bodyTextColor')
             $bodyTextColor[i].addEventListener('input',(event)=>{
                 $allSlides[i].body.bodyTextColor = event.target.value;
                 $bodyTextColor[i].style.backgroundColor = event.target.value
                 //$bodyTextInput[i].style.color = event.target.value
             })
              //body text backgroundcolor
              $bodyTextBackgroundColor = document.querySelectorAll('.bodyTextBackgroundColor')
              $bodyTextBackgroundColor[i].addEventListener('change',(event)=>{
                  $allSlides[i].body.bodyTextBackgroundColor = event.target.value;
                 $bodyTextBackgroundColor[i].style.backgroundColor = event.target.value
                 // $bodyTextInput[i].style.backgroundColor = event.target.value
              })
              //header text input
              $headerTextInput = document.querySelectorAll('.headerTextInput')
              $headerTextInput[i].addEventListener('input',(event)=>{
                  $allSlides[i].header.headerText = event.target.value;
                   })
               //body text input
               $bodyTextInput = document.querySelectorAll('.bodyTextInput')
               $bodyTextInput[i].addEventListener('input',(event)=>{
                   $allSlides[i].body.bodyText = event.target.value;
               })

        //>>>memory panel >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
               //memory Panel
        $memory1Btns = document.querySelectorAll('.memory1')
               $memory1Btns[i].addEventListener('click',()=>{
                 _headerText = $headerTextInput[i]
                 _bodyText = $bodyTextInput[i]
               // console.log(_headerText)
                var m1headerText = localStorage.getItem(`m1headerText${i}`)
                var m1bodyText = localStorage.getItem(`m1bodyText${i}`)
                
                if(_headerText.value===""&&_bodyText.value===""){
                    if(m1headerText||m1bodyText){
                        _headerText.value = m1headerText
                        _bodyText.value = m1bodyText 
                    }else{
                        alert('no text!')
                    }
                }else{
                    if(m1headerText||m1bodyText){
                        _headerText.value = m1headerText
                        _bodyText.value = m1bodyText 
                    }else{
                        localStorage.setItem(`m1headerText${i}`,_headerText.value)
                        localStorage.setItem(`m1bodyText${i}`,_bodyText.value)
                    }
                }
                })
            //memory panel 2
        $memory2Btns = document.querySelectorAll('.memory2')
        $memory2Btns[i].addEventListener('click',()=>{
            _headerText = $headerTextInput[i]
            _bodyText = $bodyTextInput[i]
          // console.log(_headerText)
           var m2headerText = localStorage.getItem(`m2headerText${i}`)
           var m2bodyText = localStorage.getItem(`m2bodyText${i}`)
           
           if(_headerText.value===""&&_bodyText.value===""){
               if(m2headerText||m2bodyText){
                   _headerText.value = m2headerText
                   _bodyText.value = m2bodyText 
               }else{
                   alert('no text!')
               }
           }else{
               if(m2headerText||m2bodyText){
                   _headerText.value = m2headerText
                   _bodyText.value = m2bodyText 
               }else{
                   localStorage.setItem(`m2headerText${i}`,_headerText.value)
                   localStorage.setItem(`m2bodyText${i}`,_bodyText.value)
               }
           }
           })
           //memory panel 3
        $memory3Btns = document.querySelectorAll('.memory3')
        $memory3Btns[i].addEventListener('click',()=>{
            _headerText = $headerTextInput[i]
            _bodyText = $bodyTextInput[i]
          // console.log(_headerText)
           var m3headerText = localStorage.getItem(`m3headerText${i}`)
           var m3bodyText = localStorage.getItem(`m3bodyText${i}`)
           
           if(_headerText.value===""&&_bodyText.value===""){
               if(m3headerText||m3bodyText){
                   _headerText.value = m3headerText
                   _bodyText.value = m3bodyText 
               }else{
                   alert('no text!')
               }
           }else{
               if(m3headerText||m3bodyText){
                   _headerText.value = m3headerText
                   _bodyText.value = m3bodyText 
               }else{
                   localStorage.setItem(`m3headerText${i}`,_headerText.value)
                   localStorage.setItem(`m3bodyText${i}`,_bodyText.value)
               }
           }
           })
           //memory panel four
        $memory4Btns = document.querySelectorAll('.memory4')
        $memory4Btns[i].addEventListener('click',()=>{
            _headerText = $headerTextInput[i]
            _bodyText = $bodyTextInput[i]
          // console.log(_headerText)
           var m4headerText = localStorage.getItem(`m4headerText${i}`)
           var m4bodyText = localStorage.getItem(`m4bodyText${i}`)
           
           if(_headerText.value===""&&_bodyText.value===""){
               if(m4headerText||m4bodyText){
                   _headerText.value = m4headerText
                   _bodyText.value = m4bodyText 
               }else{
                   alert('no text!')
               }
           }else{
               if(m4headerText||m4bodyText){
                   _headerText.value = m4headerText
                   _bodyText.value = m4bodyText 
               }else{
                   localStorage.setItem(`m4headerText${i}`,_headerText.value)
                   localStorage.setItem(`m4bodyText${i}`,_bodyText.value)
               }
           }
           })
           //memory panel five
        $memory5Btns = document.querySelectorAll('.memory5')
        $memory5Btns[i].addEventListener('click',()=>{
            _headerText = $headerTextInput[i]
            _bodyText = $bodyTextInput[i]
          // console.log(_headerText)
           var m5headerText = localStorage.getItem(`m5headerText${i}`)
           var m5bodyText = localStorage.getItem(`m5bodyText${i}`)
           
           if(_headerText.value===""&&_bodyText.value===""){
               if(m5headerText||m5bodyText){
                   _headerText.value = m5headerText
                   _bodyText.value = m5bodyText 
               }else{
                   alert('no text!')
               }
           }else{
               if(m5headerText||m5bodyText){
                   _headerText.value = m5headerText
                   _bodyText.value = m5bodyText 
               }else{
                   localStorage.setItem(`m5headerText${i}`,_headerText.value)
                   localStorage.setItem(`m5bodyText${i}`,_bodyText.value)
               }
           }
           })
           //memory panel six
        $memory6Btns = document.querySelectorAll('.memory6')
        $memory6Btns[i].addEventListener('click',()=>{
            _headerText = $headerTextInput[i]
            _bodyText = $bodyTextInput[i]
          // console.log(_headerText)
           var m6headerText = localStorage.getItem(`m6headerText${i}`)
           var m6bodyText = localStorage.getItem(`m6bodyText${i}`)
           
           if(_headerText.value===""&&_bodyText.value===""){
               if(m6headerText||m6bodyText){
                   _headerText.value = m6headerText
                   _bodyText.value = m6bodyText 
               }else{
                   alert('no text!')
               }
           }else{
               if(m6headerText||m6bodyText){
                   _headerText.value = m6headerText
                   _bodyText.value = m6bodyText 
               }else{
                   localStorage.setItem(`m6headerText${i}`,_headerText.value)
                   localStorage.setItem(`m6bodyText${i}`,_bodyText.value)
               }
           }
           })
           //memory panel seven
        $memory7Btns = document.querySelectorAll('.memory7')
        $memory7Btns[i].addEventListener('click',()=>{
            _headerText = $headerTextInput[i]
            _bodyText = $bodyTextInput[i]
          // console.log(_headerText)
           var m7headerText = localStorage.getItem(`m7headerText${i}`)
           var m7bodyText = localStorage.getItem(`m7bodyText${i}`)
           
           if(_headerText.value===""&&_bodyText.value===""){
               if(m7headerText||m7bodyText){
                   _headerText.value = m7headerText
                   _bodyText.value = m7bodyText 
               }else{
                   alert('no text!')
               }
           }else{
               if(m7headerText||m7bodyText){
                   _headerText.value = m7headerText
                   _bodyText.value = m7bodyText 
               }else{
                   localStorage.setItem(`m7headerText${i}`,_headerText.value)
                   localStorage.setItem(`m7bodyText${i}`,_bodyText.value)
               }
           }
           })
           //memory panel eight
        $memory8Btns = document.querySelectorAll('.memory8')
        $memory8Btns[i].addEventListener('click',()=>{
            _headerText = $headerTextInput[i]
            _bodyText = $bodyTextInput[i]
          // console.log(_headerText)
           var m8headerText = localStorage.getItem(`m8headerText${i}`)
           var m8bodyText = localStorage.getItem(`m8bodyText${i}`)
           
           if(_headerText.value===""&&_bodyText.value===""){
               if(m8headerText||m8bodyText){
                   _headerText.value = m8headerText
                   _bodyText.value = m8bodyText 
               }else{
                   alert('no text!')
               }
           }else{
               if(m8headerText||m8bodyText){
                   _headerText.value = m8headerText
                   _bodyText.value = m8bodyText 
               }else{
                   localStorage.setItem(`m8headerText${i}`,_headerText.value)
                   localStorage.setItem(`m8bodyText${i}`,_bodyText.value)
               }
           }
           })
           //memory panel nine
        $memory9Btns = document.querySelectorAll('.memory9')
        $memory9Btns[i].addEventListener('click',()=>{
            _headerText = $headerTextInput[i]
            _bodyText = $bodyTextInput[i]
          // console.log(_headerText)
           var m9headerText = localStorage.getItem(`m9headerText${i}`)
           var m9bodyText = localStorage.getItem(`m9bodyText${i}`)
           
           if(_headerText.value===""&&_bodyText.value===""){
               if(m9headerText||m9bodyText){
                   _headerText.value = m9headerText
                   _bodyText.value = m9bodyText 
               }else{
                   alert('no text!')
               }
           }else{
               if(m9headerText||m9bodyText){
                   _headerText.value = m9headerText
                   _bodyText.value = m9bodyText 
               }else{
                   localStorage.setItem(`m9headerText${i}`,_headerText.value)
                   localStorage.setItem(`m9bodyText${i}`,_bodyText.value)
               }
           }
           })
           //memory panel ten
        $memory10Btns = document.querySelectorAll('.memory10')
        $memory10Btns[i].addEventListener('click',()=>{
            _headerText = $headerTextInput[i]
            _bodyText = $bodyTextInput[i]
          // console.log(_headerText)
           var m10headerText = localStorage.getItem(`m10headerText${i}`)
           var m10bodyText = localStorage.getItem(`m10bodyText${i}`)
           
           if(_headerText.value===""&&_bodyText.value===""){
               if(m10headerText||m10bodyText){
                   _headerText.value = m10headerText
                   _bodyText.value = m10bodyText 
               }else{
                   alert('no text!')
               }
           }else{
               if(m10headerText||m10bodyText){
                   _headerText.value = m10headerText
                   _bodyText.value = m10bodyText 
               }else{
                   localStorage.setItem(`m10headerText${i}`,_headerText.value)
                   localStorage.setItem(`m10bodyText${i}`,_bodyText.value)
               }
           }
           })
           //memory panes per slides
           $mp = document.querySelectorAll('#mp1')

           
       setInterval(()=>{
        localStorage.setItem("allSlides",JSON.stringify($allSlides))
       },100)  
        //set slide information to localstorage
        
        //$allSlides[i].addEventListener('onchange',()=>{
          
      
      
        
    }



 

   
   




//opening animation
//function openAndCloseAnimations(openOrClose){
//    var openAnimationPresets = document.querySelector('.animationContainer') 
//    openAnimationPresets.style.display = openOrClose
//}


//setting local storage

