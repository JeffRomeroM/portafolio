import { Habilities } from "../components/home/Habilities";
import { Intro } from "../components/home/Intro"


export const HomePages = () => {
  const words = ['Desarrollador web', 'Diseñador', 'Fans de la fotografía', 'Apasionado de la música'];
  return (
    <>
    <Intro words={words}/>
    
    <Habilities />
    <Habilities />
    </>
  )
}
