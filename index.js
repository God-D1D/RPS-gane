function rockfunction(){
    document.getElementsByClassName("img1")[0].src="images/rock.JPG"

    var randomNum = Math.floor((Math.random()* 3)+1);
    var user="rock"
    if(randomNum==3){
        document.getElementsByClassName("img2")[0].src="images/scissors.PNG";
        document.querySelector("h1").innerHTML="user Wins"
    }

    else if(randomNum==2){
        document.getElementsByClassName("img2")[0].src="images/rock.JPG"
        document.querySelector("h1").innerHTML="tie"
    }

    else if(randomNum==1){
        document.getElementsByClassName("img2")[0].src="images/paper.JFIF";
        document.querySelector("h1").innerHTML="Computer wins"

    }

}

function paperfunction(){
    document.getElementsByClassName("img1")[0].src="images/paper.JFIF"
    var user="paper"
    var randomNum = Math.floor((Math.random()* 3)+1);
    skibidi=="paper"
    if(randomNum==3){
        document.getElementsByClassName("img2")[0].src="images/scissors.PNG";
        document.querySelector("h1").innerHTML="Computer wins"
    }

    else if(randomNum==2){
        document.getElementsByClassName("img2")[0].src="images/rock.JPG";
        document.querySelector("h1").innerHTML="user Wins"
    }

}

function scissorsfunction(){
    document.getElementsByClassName("img1")[0].src="images/scissors.PNG"
    var user="scissors"

    var randomNum = Math.floor((Math.random()* 3)+1);
    skibidi=="scissors"
    if(randomNum==3){
        document.getElementsByClassName("img2")[0].src="images/scissors.PNG";
        document.querySelector("h1").innerHTML="tie"
    }

    else if(randomNum==2){
        document.getElementsByClassName("img2")[0].src="images/rock.JPG";
        document.querySelector("h1").innerHTML="Computer wins"
    }

    else if(randomNum==1){
        document.getElementsByClassName("img2")[0].src="images/paper.JFIF";
        document.querySelector("h1").innerHTML="user Wins"
    }
}



