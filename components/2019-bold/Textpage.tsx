import "../../styles/Index.css";
import { FC } from 'react';
import { Footer } from '../workshop-site/Footer';

export const Textpage:FC<{ title: string }> = ({ title, children }) => {
  return <>
    <div className="about text page">
      <h1>{title}</h1>  
      {children}
    </div>
    <Footer additional="white"/>
  </>
}
