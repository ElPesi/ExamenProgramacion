import React from "react";

function Filter ({search, setSearch, people, setFilteredPeople}){

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearch(value);
        if (value === ''){
            setFilteredPeople(people);
        } else{
            setFilteredPeople(people)
                people.filter((person) => 
                person.nombre.toLowerCase().startsWith(value.toLowerCase())||
                person.mail.toLowerCase().startsWith(value.toLowerCase())
                ) 
            };
        }
    }
    return (

        <input 
        type="search"
        value = {search}
        onChange={handleSearch}
        placeholder="Buscar usuarios.."
        className="search-bar"
        />

    );

export default Filter;