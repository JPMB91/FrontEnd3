import { useEffect, useState } from "react"


export const ChangeTitle = () => {
  const [title, setTitle] = useState(
    "Nuevo titulo"
    );

  useEffect(() => {
    document.title = title;
  
  }, [title])
  

  return (
    <div/>
  )
}
