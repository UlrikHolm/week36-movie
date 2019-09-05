console.log('hello from new project');
const persons = ["Henrik","Helge","Hans","Holger"];
const root = document.getElementById('root');
const btn1 = document.getElementById('btn1');
const input1 = document.getElementById('input1');
btn1.onclick = function(){
    const inputValue = input1.value;
    const url = 'http://localhost:8080/jpareststarter/api/movies/' + inputValue;    
    //const p = persons.map(function(el){return '<li>' + el + '</li>'});
    //const p = persons.map(el=>'<li>'+ el + '</li>');
    //console.log('Jeg blev klikket');
    //root.innerHTML = '<ul>' + p.join(""); + '</ul>'

    fetch(url)
    .then(function(response){return response.json();})
    .then(function(data){
        if (data === null){
            root.innerHTML = "Kunne ikke finde film";
        } else
        
        root.innerHTML = "<table><tr><th>Title</th><th>Director</th><th>Year</th></tr><tr><td>"+data.title+"</td>\n\
        <td>"+data.director+"</td><td>"+data.year+"</td></tr></table>";
    });
};

