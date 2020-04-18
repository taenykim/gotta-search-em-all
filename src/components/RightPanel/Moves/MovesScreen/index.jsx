import React from 'react';
import Container from './styles';
import { padTexts } from '../../../../helpers';
import { TypeBadge } from '../../../shared';

const MovesScreen = ({ moveInfo }) => {
  console.log(moveInfo);
  const {
    name,
    learndAt,
    accuracy,
    damageClass,
    power,
    pp,
    type,
    effectChance,
    effectDescription,
    learnMethod,
    moveDescription,
  } = moveInfo;

  console.log('learned at', learndAt);

  return (
    <Container>
      <div className="flex">
        <div className="move-left">
          <div className="move-name">{name}</div>
          <p>{padTexts('Accuracy', accuracy, '.', 20)}</p>
          <p>{padTexts('Power', power, '.', 20)}</p>
          <p>{padTexts('pp', pp, '.', 20)}</p>
        </div>
        <div className="move-right">
          <TypeBadge
            name={type}
            style={{
              fontSize: '0.75rem',
              width: '120px',
            }}
          >
            {type}
          </TypeBadge>
          <p>{padTexts('Class:', damageClass, '.', 20)}</p>
          <p>{padTexts('Learned At:', learndAt, '.', 20)}</p>
          <p>{padTexts('Method:', learnMethod, '.', 20)}</p>
        </div>
      </div>
      <div className="move-description">
        <p>Description: {moveDescription}</p>
        <hr/> 
        <p>Effect chance: {effectChance}</p>
        <p>Description: {effectDescription}</p>
      </div>
    </Container>
  );
};

export default MovesScreen;
