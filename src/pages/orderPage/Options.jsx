import React from 'react'

function Options({name}) {
    const nameOption =`${name} option`;
    return (
        <form>
            <div>
            <input type="checkbox" id={nameOption}/>
            <label htmlFor={nameOption}>{name}</label>
            </div>
        </form>
    )
}

export default Options
