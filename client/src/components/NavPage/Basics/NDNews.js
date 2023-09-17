import React from 'react'
import "./style.css";
import Menu from "./Menuapi";
import MenuCard from "./MenuCard";
const NDNews = () => {

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
                <button className="btn-group__item" onClick={()=>filterItem("earthquake")}>Earthquake</button>
                <button className="btn-group__item" onClick={()=>filterItem("cyclone")}>Cyclones</button>
                <button className="btn-group__item" onClick={()=>filterItem("tsunami")}>Tsunami</button>
                <button className="btn-group__item" onClick={()=>filterItem("flood")}>Floods</button>
                
            </div>
        </nav>
        <MenuCard menuData={menuData}/>
    </div>
  )
}

export default NDNews
