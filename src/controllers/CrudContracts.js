import { client } from '../../DataBaseInfo.js'

export const getContracts = async (req, res)=>{
    try {
        const response= await client.query('SELECT * FROM "Gestion_Empresarial"."Contratos"');
        res.json(response.rows)

    } catch (error) {
        res.send(error)
    }

}

export const getContractById = async (req, res)=>{

    try {
        const response= await client.query(`SELECT * FROM "Gestion_Empresarial"."Contratos" WHERE "ID Contrato"=${req.params.id}`);
        res.json(response.rows)

    } catch (error) {
        res.send(error)
    }
}

export const createContract = async (req, res)=>{
    try {
        const {IdQuotCont, nameUser, abilites, feeUser, dateInitial, dateFinish} = req.body;
        const response= await client.query(`
        INSERT INTO "Gestion_Empresarial"."Contratos" ("ID Cotizacion/Contrato", "Nombre Usuario", "Habilidades Pactadas", "Precio Pactado", "Fecha de Inicio", "Fecha culminacion") 
        VALUES (${IdQuotCont}, '${nameUser}', '${abilites}',${feeUser},'${dateInitial}','${dateFinish}');`);
        res.send(`Table created!`);

    } catch (error) {
        res.send(error)
    }
}

export const updateContract = async (req, res)=>{
    try {
        const {IdQuotCont, nameUser, abilites, feeUser, dateInitial, dateFinish} = req.body;
        const response= await client.query(`UPDATE "Gestion_Empresarial"."Contratos" 
        SET "ID Cotizacion/Contrato"=${IdQuotCont}, "Nombre Usuario"='${nameUser}', "Habilidades Pactadas"='${abilites}',"Precio Pactado"=${feeUser},"Fecha de Inicio"='${dateInitial}',"Fecha culminacion"='${dateFinish}' WHERE "ID Contrato"= ${req.params.id}`);
        res.send(`Contract of ${req.body.nameUser} updated to Successfully`);

    } catch (error) {
        res.send(error)
    }
}

export const updateSomeContract = async(req, res)=>{
    try {
        let consult= [];
        const {nameUser, abilites, feeUser, dateInitial, dateFinish} = req.body;
        if(nameUser !== undefined){
            consult.push(`"Nombre Usuario"= '${nameUser}' `) ;
        }
        if(abilites !== undefined){
            consult.push(`"Habilidades Pactadas"= '${abilites}' `) ;
        }
        if(feeUser !== undefined){
            consult.push(`"Precio Pactado"= ${feeUser} `);
        }
        if(dateInitial !== undefined){
            consult.push(`"Fecha de Inicio"='${dateInitial}' `);
        }
        if(dateFinish !== undefined){
            consult.push(`"Fecha culminacion"= '${dateFinish}' `);
        }

        const response= await client.query(`UPDATE "Gestion_Empresarial"."Contratos" SET ${consult} WHERE "ID Contrato"= ${req.params.id}`);

        res.send(`Date ${consult} UPDATE!`);

    } catch (error) {
        res.send(error)
    }
}

export const deleteContract = async (req, res)=>{

        try {
            const response= await client.query(`DELETE FROM "Gestion_Empresarial"."Contratos" WHERE "ID Contrato"=${req.params.id}`);
            res.json("user DELETE!")
    
        } catch (error) {
            res.send(error)
        }

}



