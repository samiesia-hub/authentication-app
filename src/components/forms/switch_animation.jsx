import { useState } from 'react'

function Switch_button({ components , message }) {
    const [switch_com, setSwitch_com] = useState(false)
    
    const switchcom = () => {
        setSwitch_com(!switch_com)
    }

    return(
        <div className="flex flex-col gap-4 items-center min-w-80">
            {switch_com ? components[1] : components[0]}
            <button 
                onClick={switchcom}
                className='text-neutral-950 px-6 py-2 rounded hover:text-neutral-500 transition-colors duration-200'
            >
                {switch_com ? message[1] : message[0]}
            </button>
        </div>
    )
}

export default Switch_button