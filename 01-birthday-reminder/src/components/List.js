import React from "react";

const List = ({ people }) => {
  // Props people
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article key={id} className="person">
            <img src={image} alt={name} />
            <div>{name}</div>
            <p>{age} years</p>
          </article>
        );
      })}
    </>
  );
};
export default List;
