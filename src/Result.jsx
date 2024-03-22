import React from 'react'

const Result = ({setText,word, phonetics, meaning}) => {
    console.log(meaning,"kk")
  return (
    <div>
        <div>

           <p className='font-bold'>{
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
                      
                       {/* <div>
                        <p>Synonyms</p>
                        <p>{
                            mean && mean.synonyms.map((syno,index)=>(
                                <>
                                    <p onClick={setText(syno)}>{syno}</p>  
                                
                                </>
                            ))
                        } </p>  
                       </div> */}
  
                    </>
                
                )
            ))
        }
</p> 

        </div>
    
    </div>
  )
}

export default Result