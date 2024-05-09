import React from 'react';

export const getStaticPaths = async ()=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await res.json();

    const paths = data.map((dataa: any)=>{
return {
    params : {id:dataa.id.toString()}
}
    })

    return{
        paths,
        fallback : false,
    }

}


export const getStaticProps = async (context : any) =>{
const id  = context.params.id;
const res = await fetch("https://jsonplaceholder.typicode.com/todos/" + id)
const data = res.json();

return{
  props : {ninja : data}
}

}


const AboutIdPage = ({ninja }: {ninja : any}) => {
  

  return (
    <div>
      <h1>{ninja.id}</h1>
  
    </div>
  );
};

export default AboutIdPage;