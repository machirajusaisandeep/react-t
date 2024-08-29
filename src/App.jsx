import Accordion from "./components/Accordion";
import ListItem from "./components/ListItem";
import "./styles.css";

import Folder from "./icons/ic_folder.svg";
import List from "./icons/ic_list.svg";
import Space from "./icons/ic_space.svg";
import data from "./data";


export default function App() {

  const iconMap={
    list: <img src={List} alt="list "/>,
    space: <img src={Space} alt="space"/>,
    folder: <img src={Folder} alt="folder"/>,
  }

  const renderChildren=(children)=>{
      return <>
      {
        children.map((child)=>{
          return renderByType(child)
        })
      }
      </>
  }
  

  const renderByType=(data)=>{
    const collectionType=data.collection_type;
   
    switch(collectionType){
      case "space":
        case "folder":
          const children=renderChildren(data.children)
        return <Accordion startIcon={iconMap[collectionType]} {...data}>{children}</Accordion>

      case "list":
        default:
        return <ListItem startIcon={iconMap[collectionType]} {...data} />
    }
  }
  
  return (
    <div className="App">
      <p>Frontend Interview Assignment</p>
      {
        data? 
        
        data.map((space)=>{
          return renderByType(space)
        }) 
        
        :null
      }
    </div>
  );
}
