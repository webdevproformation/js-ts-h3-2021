window.addEventListener("DOMContentLoaded"  , async() => {

    const reponse = await fetch("http://localhost:3000/todos" )
    const todos = await reponse.json(); 
    
    document.querySelector(".js-list-tache").innerHTML = genererFormsTaches(todos);

    // gestion du nombre de tâches en cours 
    document.querySelector(".js-compteur").innerHTML = todos.filter( todo => todo.status === false ).length; 


    // écouter quand on clique dans la zone js-list-tache
    document.querySelector(".js-list-tache").addEventListener("click" , async e => {
        e.preventDefault();
        if(e.target.className.includes("btn")){
            const form = e.target.parentNode;
            const action = e.target.value ;
            const id = form.id.value
            if(action == "modifier"){
                const data = {
                    id : id,
                    name : form.name.value,
                    status : form.status.value == "0" ? false : true
                }
                const options = { method : "PUT" , body : JSON.stringify(data) , headers : {'Content-Type': 'application/json'} }
                await fetch("http://localhost:3000/todos/"+id , options)
            }else if(action == "supprimer"){
                const options = {method : "DELETE"}
                await fetch("http://localhost:3000/todos/"+id , options);
            }
        }
    })
})

function genererFormsTaches(data){

    if(data.length === 0) return "<p>Veuillez ajouter des tâches</p>";

    return data.map( d => {
        return `<form class="d-flex my-3">
        <input type="hidden" name="id" class="form-input" value="${d.id}">
        <input type="text" name="name" class="form-input" value="${d.name}">
        <select name="status" class="form-select mx-3">
            <option value="0" ${d.status == false ? "selected" : ""}>encours</option>
            <option value="1"  ${d.status == true ? "selected" : ""}>finie</option>
        </select>
        <input type="submit" class="btn btn-primary mx-3" value="modifier">
        <input type="submit" class="btn btn-danger" value="supprimer">
    </form>`
    } ).join("")
}