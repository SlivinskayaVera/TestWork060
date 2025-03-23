import React from 'react';
import style from './SelectorList.module.scss';
import { ICity } from '@/app/commonTypes/types';

interface SelectorListProps {
  data: ICity[];
  onClick: (city: ICity) => Promise<void>;
}

export const SelectorList = ({ data, onClick }: SelectorListProps) => {
  return (
    <div className={style.selectorWithDropdown__wrapper}>
      <div className={style.selectorWithDropdown__body}>
        {data.map((option) => {
          return (
            <div className={style.selectorWithDropdown__item} key={option.id} onClick={() => onClick(option)}>
              <span className={style.selectorWithDropdown__item__title}>{option.name}, </span>
              <span className={style.selectorWithDropdown__item__country}>{option.country}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
