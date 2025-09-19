import React, { useEffect, useState } from 'react'

export default function Profile() {
    const [profileData, setProfileData] = useState([]);
    
      useEffect(() => {
        console.log("hello");
        getProfileData();
      }, []);
    
      async function getProfileData() {
        const url = "http://localhost:3000/profile";
        let res = await fetch(url);
    
        res = await res.json();
        setProfileData(res);
      }
    
  return (
   <div
      className={`max-w-[1400px] mx-auto flex flex-col py-20 px-4`}
    >
        <p className='text-2xl'>
      Profile
        </p>

      <div className='my-5'>
            {
                profileData.map((item)=>(
                    <>
                    <div key={item.id} className='flex gap-3'>
                        <p>{item.name}</p>
                        <p>{item.tech}</p>
                        <p>{item.age}</p>
                    </div>
                    </>
                ))
            }
      </div>
    </div>
  )
}
