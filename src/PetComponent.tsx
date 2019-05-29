import React from 'react';

interface IProps{
  name: string;
  animal: string;
  breed: string;
}

const PetComponent = ({name, animal, breed} : IProps) => {
  return (
    <div className="pet">
      <h3>{name}</h3>
      <h4>{animal} - {breed}</h4>
    </div>
  );
}

export default PetComponent;