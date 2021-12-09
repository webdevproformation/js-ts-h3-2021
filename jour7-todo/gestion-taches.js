window.addEventListener("DOMContentLoaded"  , async() => {

    const reponse = await fetch("http://localhost:3000/todos" )

    const todos = await reponse.json(); 
    document.querySelector(".js-list-tache").innerHTML = genererFormsTaches(todos);
    document.querySelector(".js-list-tache").addEventListener("click" , e => {
        e.preventDefault();
        if(e.target.className.includes("btn")){
            const form = e.target.parentNode;
            const data = {
                id : form.id.value,
                name : form.name.value,
                status : form.status.value == "0" ? false : true
            }
            console.log(data);

            // PUT => update
            // DELETE => suppr
        }
    })
})

function genererFormsTaches(data){
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