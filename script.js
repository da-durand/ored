var p = document.getElementsByTagName("p");
var button = document.getElementsByTagName("button");

var a = document.getElementsByTagName("a");

var h1 = document.getElementsByTagName("h1");
var h2 = document.getElementsByTagName("h2");
var h3 = document.getElementsByTagName("h3");

var other = document.getElementsByClassName("ored");

var oRedList = [p, button, a, other, h1, h2, h3];

for (let k = 0; k < oRedList.length; k++) {
    for (let j = 0; j < oRedList[k].length; j++) {

        var list = [];

        for (let i = 0; i < oRedList[k][j].innerHTML.length; i++) {
            if (oRedList[k][j].innerHTML[i] == "<"){
                var tempword = "";
                tempword += oRedList[k][j].innerHTML[i];
                while (oRedList[k][j].innerHTML[i] != ">"){
                    i++;
                    tempword += oRedList[k][j].innerHTML[i];
                }
                console.log(tempword);
                list.push(tempword);
            }
            else{
                list.push(oRedList[k][j].innerHTML[i]);
            }
        }

        oRedList[k][j].innerHTML = "";


        for (let i = 0; i < list.length; i++) {
            if (list[i] == "o") {
                list[i] = "<span class=red>" + list[i] + "</span>";
            }
            if (list[i] == "O") {
                list[i] = "<span class=red>" + list[i] + "</span>";
            }
            oRedList[k][j].innerHTML += list[i];
        }

    }
}