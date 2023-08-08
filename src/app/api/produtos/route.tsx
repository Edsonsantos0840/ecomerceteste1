import { Prod } from "@/app/types/prod";


export  async function GET(){
  
    const request =await fetch("http://localhost:3001/produtos")
    const data =await request.json()
    return data;
}

export async function POST(request: Promise<Prod[]>){

    const res = await fetch("http://localhost:3001/produtos", {
        method: "POST",
        headers: {"content-type": "application/json"},
        body: JSON.stringify({request})
    })
    const novoProduto = await res.json()
    return novoProduto;

}