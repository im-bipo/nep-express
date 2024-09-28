'use client'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import Tourist from './Tourist'
import GuideForm from './GuideForm'
import Vender from './Vender'
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs'

const Guest = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index: React.SetStateAction<number>) => {
    setToggleState(index);
  };
  const router=useRouter()
  return (
<>
<div>
{toggleState !== 1 && toggleState !== 2 && toggleState !== 3 && (
        <div className="bg-gray-100 rounded-md my-10 w-5/12 py-10 mx-auto">
          <div className="py-5 text-center  font-medium">Join as</div>
          <div className="flex gap-4 justify-center items-center pt-10 pb-14">
            <Button
              className="text-md font-medium bg-red-500 py-2 px-8 rounded-md text-white"
              onClick={() => toggleTab(1)}
            >
              GUIDE
            </Button>
            <Button
              className="text-md font-medium bg-red-500 py-2 px-8 rounded-md text-white"
              onClick={() => toggleTab(2)}
            >
              Tourist
            </Button>
            <Button
              className="text-md font-medium bg-red-500 py-2 px-8 rounded-md text-white"
              onClick={() => toggleTab(3)}
            >
              Vender
            </Button>
          </div>
        </div>
      )}

      <div>
        {toggleState === 1 && (
          <>
            <div className='flex justify-center pt-8'>
          <Button className=" w-fit px-4 mx-auto"><LogoutLink>Log out</LogoutLink></Button>
                          </div>
            <div><GuideForm/></div>

          </>
        )}

        {toggleState === 2 && (
          <>
            <div>
              <Tourist/>
              <Button className="w-fit px-4 mx-auto"><LogoutLink>Log out</LogoutLink></Button>
            </div>
          </>
        )}

{toggleState === 3 && (
          <>
            <div>
             <Vender/>
<Button className="w-fit px-4 mx-auto"><LogoutLink>Log out</LogoutLink></Button>
            </div>
          </>
        )}
      </div>

</div>

</>
  )
}

export default Guest