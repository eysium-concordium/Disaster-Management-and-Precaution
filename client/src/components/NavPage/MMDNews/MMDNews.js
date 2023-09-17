import React from 'react'
import "./style.css";
import Menu from "./Menuapi";
import MenuCard from "./MenuCard";
const MMDNews = () => {

    const [menuData, setMenuData]= React.useState(Menu);
    
    const filterItem = (category) =>{
     const updatedList = Menu.filter((curElem)=>{
        return curElem.category === category;
     });
     setMenuData(updatedList);   
    }

  return (
    <div className="div1">
        <nav className="navbar">
            <div className="btn-group">
                <button className="btn-group__item" onClick={()=>setMenuData(Menu)}>All</button>
                <button className="btn-group__item" onClick={()=>filterItem("gas_leak")}>Gas Leak</button>
                <button className="btn-group__item" onClick={()=>filterItem("train_accident")}>Train Accident</button>
                <button className="btn-group__item" onClick={()=>filterItem("building_collapse")}>Building Collapse</button>
                
            </div>
        </nav>
        <MenuCard menuData={menuData}/>
    </div>
  )
}

export default MMDNews
