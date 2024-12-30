import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import StateMerge from './lec2412/statement3';

//1. class base imlentions
//2. functional imlentions

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StateMerge/>
  </StrictMode>
);
