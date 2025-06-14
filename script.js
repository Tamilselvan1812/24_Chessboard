  let board = document.querySelector(".Chessboard")        //selecting chessboard

        for (let row = 0; row<8; row++) {                       //for 8 rows
            for (let col = 0; col < 8; col++) {                  //for 8 columns //nested loop
                 

                let box = document.createElement("div")          //<div></div>
                box.setAttribute("id", "box")                    // <div id="box"></div>
                 
                                                                 // % = modules,it will give reminder
                if((row+col)%2==0){                              // row = 1,column = 1,2,3,4,5,6,7,8
                    box.setAttribute("class", "white-box");      // row = 2,column = 1,2,3,4,5,6,7,8 
                }else{                                           // row = 3,column = 1,2,3,4,5,6,7,8 
                    box.setAttribute("class", "black-box");      // row = 4,column = 1,2,3,4,5,6,7,8 
                }                                                // row = 5,column = 1,2,3,4,5,6,7,8 
                                                                 // row = 6,column = 1,2,3,4,5,6,7,8 
                                                                 // row = 7,column = 1,2,3,4,5,6,7,8 
                board.appendChild(box)                           // row = 8,column = 1,2,3,4,5,6,7,8 
            }
        
        }