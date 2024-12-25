import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import Component1 from './lec2412/component1';
import Table from './lec2412/Table';

//1. class base imlentions
//2. functional imlentions

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Table/>
  </StrictMode>
);
