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
                           <p  className=' font-serif text-2xl font-bold text-gray-100 '>{mean.partOfSpeech}</p> 
                           <div>
                                <h3 className='text-blue-500'>Meaning </h3>
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
    
       
         
        </div>
      </div>
    
    </div>
  )
}

export default Result