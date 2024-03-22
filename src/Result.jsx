import React from 'react'

const Result = ({setText,word, phonetics, meaning}) => {
    console.log(meaning,"kk")
  return (
    <div className='flex justify-center mx-auto font-semibold text-xl'>
         <div className=' text-start    flex justify-center p-12' >
        <div className='bg-blue-500 '>
              <div>

           <p className='text-start p-2'>{
           meaning && meaning.map((mean,index)=>((
                    <>
                        <p>
                           <p  className=' font-serif text-2xl font-bold text-gray-100'>{mean.partOfSpeech}</p> 
                           <div>
                                <h3>Meaning </h3>
                                {
                            mean && mean.definitions.map((def,index)=>(
                                <>
                                    <p className=' ' key={index}>{def.definition} </p>
                                </>
                            ))


                        } 
                           </div>

                           <div>
                                <h3>synonyms </h3>
{
                            mean && mean.synonyms.map((syno,index)=>(
                                <>
                                    <p className='font-bold ' key={index} > {syno}</p>  
                                
                                </>
                            ))
                        } 
                           </div>

                        </p>
                    </>
                
                )
            ))
        }
</p> 

        </div>
    
          {/* <p className='text-3xl font-medium'>English Dictionary</p>
          <br />
          <textarea name="" id=""  cols="40" rows="15" className='border resize-none'  />
           <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`justify-center mx-auto text-center 0  bg-white h-6 p-1 cursor-pointer}`}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
          </svg> */}
         
        </div>
      </div>
        {/* <div>

           <p className=''>{
           meaning && meaning.map((mean,index)=>((
                    <>
                        <p>
                           <p>{mean.partOfSpeech}</p> 
                           <div>
                                <h3>Meaning </h3>
                                {
                            mean && mean.definitions.map((def,index)=>(
                                <>
                                    <p className='text-green-800 ' key={index}>{def.definition} </p>
                                </>
                            ))


                        } 
                           </div>

                           <div>
                                <h3>synonyms </h3>
{
                            mean && mean.synonyms.map((syno,index)=>(
                                <>
                                    <p className='font-bold ' key={index} > {syno}</p>  
                                
                                </>
                            ))
                        } 
                           </div>

                        </p>
                    </>
                
                )
            ))
        }
</p> 

        </div> */}
    
    </div>
  )
}

export default Result