import { FC} from 'react';
import Img from "../../public/img/page_not_1.jpg"

const PageNotFound : FC = function()  {
  return (
    <div className='h-screen w-screen'>
        <img  src={Img} alt='page not found'  className='w-screen h-screen'/>
    </div>
  )
}

export default PageNotFound