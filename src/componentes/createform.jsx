import React, {useState} from "react";


function CreateForm({onSumbit}){
const [fromData, setFromData] = useState[
    nombre: "",
    mail: ""
    ];

const handleChange = (e) => {
    const{name, value} = e.target;
    setFromData{{
        ...fromData,
        name: [value],
    }}
}

const handleSumbit = (e) => {
    e.preventDefault();
    onSumbit(fromData);
    setFromData{{nombre: "", mail: ""}};
};

return(
    <form onSumbit = {handleSumbit}>
    <div>
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" name = "nombre" value = {FormData.nombre} onChange={ handleChange} />
    </div>

    <div>
        <label htmlFor="mail">Mail:</label>
        <input type="text" mail = "mail" value = {FormData.mail} onChange={handleChange} />
    </div>
    <button type="sumbit">Enviar</button>
    </form>
)
}

export default CreateForm;
