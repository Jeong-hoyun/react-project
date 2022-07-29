import {Breadcrumb, Layout, Menu} from "antd/lib";
import React, { useState } from 'react';
import { useEffect } from 'react';

const { Header, Content, Footer } = Layout;

const Layouts= ()=>  {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const [value,setValue]=useState()
    const [movieValue,setmovieValue]=useState()
    useEffect(() => {
        getMovies();
      }, []);

  const getMovies = async () => {
        const json = await (
          await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
          )
        ).json();
        setMovies(json.data.movies);
        setLoading(false);
        setmovieValue(json.data.movies.title)
      };  


const onClick=(e)=>{
    const v=e.target.value;
    movies.map((movie,index) => {
        if(v===movie.title){
            console.log(v)
            setValue(v)
        }else{
            console.log("NOT")
        }
    })
}



 return ( 
 <Layout className="layout">
<Header>
  <Menu  theme="dark" onClick={onClick}
  mode="horizontal"
  defaultSelectedKeys={['1']}   
  items={movies.map((movie,index) => {
    if(index<4){
     return {      
      key:index,
      label: `${movie.title}`,
      value: `${movie.title}`,
     
    };}
  })}  
 />
 {movieValue}
</Header>
{ value? "":""  }
<Content style={{  padding: '0 50px',   }}> 
{movies.map((movie,index) => {
    return(
    <div><h1>{movie.title}</h1>
     <p>{movie.summary}</p>
      </div> 
      )
  
  })}
  
</Content>   
<Footer style={{   textAlign: 'center'  }}>

</Footer>
</Layout>   
 
)};

export default Layouts;