import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string

const supabaseKey = import.meta.env.VITE_SUPABASE_KEY as string

export const supabase = createClient(supabaseUrl , supabaseKey)

async function testConexion() {
    try{
        const {data , error} = await supabase.from("config_barberia").select("*")

        if(error){
            console.error("Error al conectar con supabase" , error.message)
        }else{
            console.log("conexion exitosa con supabase DataBarber:",data)
        }
    }catch(error){
        console.error("error en config" , error)
    }
}
testConexion()