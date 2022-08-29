import { useState, useEffect } from "react";
import { Button, Sheet } from "@mui/joy";

export const Header = () => {

  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    console.log('is open is...', isOpen)
  }, [isOpen]);

  return (
    <Sheet>
      <h1>This is a Header</h1>
      <Button onClick={(state) => setIsOpen(!state)}></Button>
    </Sheet>
  )
}