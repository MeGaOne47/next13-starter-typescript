'use client'
import Form from 'react-bootstrap/Form';
import Link from 'next/link'

function SelectLayout() {
  return (
    <Form.Select aria-label="Default select example">
      <option>Open this select menu</option>
      <option value="1">
            <Link href={"/facebook"} className='nav-link'> 
              Facebook 
            </Link></option>
      <option value="2">
            <Link href={"/tiktok"} className='nav-link'> 
              Tiktok 
            </Link></option>
      <option value="3">
            <Link href={"/youtube"} className='nav-link'> 
              Youtube 
            </Link></option>
        <option value="4">
            <Link href={"/twitter"} className='nav-link'> 
              Twitter 
            </Link></option>
    </Form.Select>
  );
}

export default SelectLayout;




