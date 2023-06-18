import React from 'react';
import {Link} from "react-router-dom";
import s from "./Breadcrump.module.css"


export type BreadcrumpType = {
  id: number
  title: string
  link: string
}

type Props = {
  navigation: BreadcrumpType[]
}

export const Breadcrump = ({navigation = []}: Props) => {

  return (
    <div className={s.main}>
      {
        navigation.map(({id, title, link}, i) => i + 1 !== navigation.length ?
          <Link key={id} to={link}>
            <h3>
              <b>{title}</b>
              <span>{"/"}</span>
            </h3>
          </Link> :
          <h3 key={id}>
            <b>{title}</b>
          </h3>)
      }
    </div>
  );
};