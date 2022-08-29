import { useState, useEffect } from "react";
import { Button } from "@mui/joy";

export const Header = () => {

  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    console.log('is open is...', isOpen)
  }, [isOpen]);

  return (
    <div>
      <h1>This is a Header</h1>
      <Button onClick={(state) => setIsOpen(!state)}></Button>
    </div>
  )
}