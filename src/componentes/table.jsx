import React from "react";

function Table({data, onDelete}) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Mail</th>
                </tr>
            </thead>
        <tbody>
            {data.map((item, index) => (
                <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.mail}</td>
                    <td><button onClick={() => onDelete(item.id)}>Eliminar</button></td>
             
                </tr>
               ))}
        </tbody>

    </table>
    
    );
}

export default Table