import React from 'react'

const Result = ({setText,word, phonetics, meaning}) => {
    // console.log(phonetics.text,"kk")
      return (
    <div className=' justify-center mx-auto font-semibold text-xl'>
         <div className=' text-start    flex justify-center p-12' >
        <div className='bg-blue-500 '>
             
    
        <div className="max-w-2xl bg-blue-400 mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16  shadow-xl rounded-lg text-gray-900">
    
    <div className="text-center mt-2">
        <div>

<div className='text-start p-2'>{
meaning && meaning.map((mean,index)=>((
         <>
             <div>
                <p  className=' font-serif text-2xl font-bold text-gray-100  '>{mean.partOfSpeech}</p> 
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

{/* ///////////////////////////////////////////////////////// */}
                <div>
                     <h3 className='text-blue-500'>Pheonics </h3>
                     {
                 phonetics && phonetics.map((def,index)=>(
                     <>
                         <span className=' font-bold' key={index}>{def.text} </span>
                     </>
                 ))


             } 
                </div>

{/* ///////////////////////////////////////////////////////// */}
               
                <div>
                     <h3>synonyms </h3>
{
                 mean && mean.synonyms.map((syno,index)=>(
                     <>
                         <p className='font-bold ' key={index} > {syno
                         
                         }</p>  
                     
                     </>
                 ))
             } 
                </div>





            </div>
         </>
     
     )
 ))
}
</div> 

</div>
    </div>
   
   
</div>
         
        </div>
      </div>

      
    
    </div>
  )
}

export default Result