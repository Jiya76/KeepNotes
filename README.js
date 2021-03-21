# KeepNotes
 Ideas are a terrible thing to waste, so write them down 
!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NotesAPP</title>
</head>
<body>
    <div id="MyNotes">
        <div class="container">
            <div id="header">
            <h1>MY NOTES APP</h1>
            <button id="dark">light</button>
            <button id="light">dark</button>
            </div>
            <div class="card">
                <p style="font-style: italic;">To add click on add note and to delete a note click on delete</p>
                <div>
                    <div>
                        <textarea id="addTxt" rows="5"></textarea>
                    </div>
                    <br>
                    <button class="btn" id="addBtn">Add Note</button>
                    <br><br>
                </div>
            </div>
            <hr>
            <h1>Your Notes</h1>
            <hr>
            <div id="notes"> </div>
        </div>
    </div>
</body>
<!-- styling for notes app -->
<style>
body{
    font-family: monospace;
    background-color: rgb(22, 22, 22);
    color: rgb(231, 231, 231);
}
#header {
    width: 70vw;
    display: inline;
}
#dark, #light{
    float: right;
    margin: 5px;
}
#addTxt{
    width: 70vw;
    border-radius: 5px;
}
.container{
    width: 70vw;
    margin: auto;
}
#notes{
    width: 70vw;
    margin: auto;
    display: flex;
    display: block;
    display: flex;
    flex-wrap: wrap;
    overflow: auto;
    height: 50vh;
    
    
}
#notes div{
    display: block;
    flex-grow: 1;
    text-align: left;
    

}
button{
    color: rgb(236, 236, 236);
    background-color: rgb(101, 101, 101);
    border: none;
    border-radius: 12px;
    transition: 0.4s;
}
button:hover{
    color: rgb(101, 101, 101);
    background-color: rgb(236, 236, 236);
}
</style>

<!-- javascript for notes app -->

<script>

console.log("hello , welcome to my notes app")
let addBtn=document.getElementById('addBtn')
addBtn.addEventListener("click",function(e){

    let addTxt = document.getElementById('addTxt')
    let notes = localStorage.getItem("notes")
    if(notes==null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes)
    }
    notesObj.push(addTxt.value)
    localStorage.setItem("notes", JSON.stringify(notesObj))
    addTxt.value="";
    console.log(notesObj);
    showNotes();
})

function showNotes(){
    let notes = localStorage.getItem("notes")
    if(notes==null)
    {
        notesObj = [];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function(element, index){
        html += 
                `<div style="width: 18rem;">
                    <div>
                        <h5>Note ${index + 1}</h5>
                        <p> ${element}</p>
                        <button id="${index}"onclick="deleteNote(this.id)" class="btn">delete</button>
                    </div>
                </div>
                `;
    });
    let notesElem = document.getElementById('notes')
    if(notes.length != 0)
    {
        notesElem.innerHTML = html;
    }
    else{
        notesElem.innerHTML = `nothing to show use "add note" section to add notes `;
    }
}

function deleteNote(index){
    console.log(index)
    let notes = localStorage.getItem("notes")
    if(notes == null)
    notesObj = [];
    else
    notesObj = JSON.parse(notes);

    notesObj.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(notesObj))
    showNotes();
}
let dark = document.getElementById("dark");
let light = document.getElementById("light");

dark.addEventListener("click",function(){
    document.querySelector('body').style.background="rgb(231, 231, 231)";
    document.querySelector('body').style.color="rgb(22, 22, 22)";
})
light.addEventListener("click",function(){
    document.querySelector('body').style.color="rgb(231, 231, 231)";
    document.querySelector('body').style.background="rgb(22, 22, 22)";
})
showNotes();
</script>
</html>
