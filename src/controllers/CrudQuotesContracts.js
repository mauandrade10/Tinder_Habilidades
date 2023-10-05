import { client } from '../../DataBaseInfo.js'

export const getQuotesContracts = async (req, res)=>{
    try {
        const response= await client.query('SELECT * FROM "Gestion_Empresarial"."Cotizacion/Contrato"');
        res.json(response.rows)

    } catch (error) {
        res.send(error)
    }

}

export const getQuotAndContById = async (req, res)=>{

    try {
        const response= await client.query(`SELECT * FROM "Gestion_Empresarial"."Cotizacion/Contrato" WHERE "ID Cotizacion/Contrato"=${req.params.id}`);
        res.json(response.rows)

    } catch (error) {
        res.send(error)
    }
}

export const createQuotAndCont = async (req, res)=>{
    try {
        const {idCompany, idUser} = req.body;
        const response= await client.query(`INSERT INTO "Gestion_Empresarial"."Cotizacion/Contrato" ("ID Empresa", "ID Usuario") 
        VALUES (${idCompany}, ${idUser});`);
        res.send(`Company ${req.body} created!`);

    } catch (error) {
        res.send(error)
    }
}

export const updateQuotAndCont = async (req, res)=>{
    try {
        const {idCompany, idUser} = req.body;
        const response= await client.query(`UPDATE "Gestion_Empresarial"."Cotizacion/Contrato"
        SET "ID Empresa"=${idCompany}, "ID Usuario"=${idUser}  WHERE "ID Cotizacion/Contrato"= ${req.params.id}`);
        res.send(`updated to Successfully`);

    } catch (error) {
        res.send(error)
    }
}

export const updateSomeQuotAndCont = async(req, res)=>{
    try {
        let consult= [];
        const {idCompany, idUser} = req.body;

        if(idCompany !== undefined){
            consult.push(`"ID Empresa"= ${idCompany} `) ;
        }
        if(idUser !== undefined){
            consult.push(`"ID Usuario"= ${idUser} `) ;
        }
        
        const response= await client.query(`UPDATE "Gestion_Empresarial"."Cotizacion/Contrato" SET ${consult} WHERE "ID Cotizacion/Contrato"= ${req.params.id}`);

        res.send(`Date ${consult} UPDATE!`);

    } catch (error) {
        res.send(error)
    }
}

export const deleteQuotAndCont = async (req, res)=>{

        try {
            const response= await client.query(`DELETE FROM "Gestion_Empresarial"."Cotizacion/Contrato" WHERE "ID Cotizacion/Contrato"=${req.params.id}`);
            res.json("Cotizacion/Contrato DELETE!")
    
        } catch (error) {
            res.send(error)
        }

}
