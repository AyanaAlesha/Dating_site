//all users 
var  users = [{
    name: 'Abriana',
    gender: 'F',
    hobby: "reading",
    avatar: "avatar1.jpg"
},
{
    name: "Taylor",
    gender: 'F',
    hobby: "party",
    avatar: "girl2.png"
},
{
    name: "Brittney",
    gender: 'F',
    hobby: "ice-skating",
    avatar: "girl3.png"
},
{
    name: "Erica",
    gender: 'F',
    hobby: "singing",
    avatar: "girl4.jpg"
},
{
    name: "Amy",
    gender: 'F',
    hobby: "music",
    avatar:"girl5.jpg"
}, 
{
    name: "Matthew",
    gender: 'M',
    hobby: "Horseback riding",
    avatar: "boy1.jpg"
},
{
    name: "John",
    gender: "M",
    hobby: "sports",
    avatar: "boy2.jpg"

},
{
    name: "Bobby",
    gender: 'M',
    hobby: "video games",
    avatar: "boy3.jpg"

},
{
    name: "Patrick",
    gender: 'M',
    hobby: "read books",
    avatar: "boy4.png"
},
{
    name: "Satin",
    gender: "M",
    hobby: "eating",
    avatar: "boy5.jpg"
}

]




window .addEventListener('load', function(){
    
    function search(){
        //get hobby
        var hobbyField = document.getElementById("hobby").value;
        
        console.log(hobbyField);
        //get gender
        var genderField = document.getElementById("gender");
        var s = genderField.selectedIndex; 
        let gender = genderField.options[s].value;
        var resultsHtml = '';
        for(var i = 0; i < users.length; i++){ //checks gender 

            if(gender === "A" || gender === users[i].gender ){//checks hobbies
                if(hobbyField === "" || hobbyField === users[i].hobby){
                    resultsHtml += '<div class="person-row">\
                    <img src="' + users[i].avatar + '" />\
                    <div class="person-info">\
                    <div>' + users[i].name + '</div>\
                    <div>' + users[i].hobby + '</div></div>\
                        <button id="friendBtn"> Add as friend </button></div> ';
            } 
        }
        }  
        
       
    
    
        results = document.getElementById("results");
        results.innerHTML = resultsHtml; 
    }
    var searchBtn = document.getElementById("searchBtn");
    searchBtn.addEventListener("click", search);
})
