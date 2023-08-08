import Link from "next/link";
import { Prod } from "../types/prod";

import Image from "next/image";

async function GET(){
  
    const request =await fetch("http://localhost:3001/produtos")
    const data =await request.json()
    return data;
}

export default async function ListaProdutos(){
const produtos = await GET()

    return(
        <div>
            <h1>Deu Certo</h1>
         {produtos.map(({id, titulo, url, descriçao, preço}:{
    id:string,
    titulo:string
    url:string
    descriçao: string
    preço: number
})=>{
            <div key={id}>
                
                <h1>{titulo}</h1>
              <Image src={url} alt={titulo} width={300} height={300}/>
              <p>{descriçao}</p>
              <h4>{preço}</h4>
          
            </div>
         })}
        </div>
    )
}