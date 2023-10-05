import { client } from '../../DataBaseInfo.js'

export const getCompanies = async (req, res)=>{
    try {
        const response= await client.query('SELECT * FROM "Gestion_Empresarial"."Empresas"');
        res.json(response.rows)

    } catch (error) {
        res.send(error)
    }

}

export const getCompanyById = async (req, res)=>{

    try {
        const response= await client.query(`SELECT * FROM "Gestion_Empresarial"."Empresas" WHERE "ID Empresa"=${req.params.id}`);
        res.json(response.rows)

    } catch (error) {
        res.send(error)
    }
}

export const createCompany = async (req, res)=>{
    try {
        const {nameOwner, address, telephone, email, nit, nameCompany} = req.body;
        const response= await client.query(`INSERT INTO "Gestion_Empresarial"."Empresas" ("Nombre/Propietario", "Direccion", "Telefono", "Email", "NIT", "Nombre Empresa") 
        VALUES ('${nameOwner}', '${address}', ${telephone},'${email}',${nit},'${nameCompany}');`);
        res.send(`Company ${req.body.nameCompany} created!`);

    } catch (error) {
        res.send(error)
    }
}

export const updateCompany = async (req, res)=>{
    try {
        const {nameOwner, address, telephone, email, nit, nameCompany} = req.body;
        const response= await client.query(`UPDATE "Gestion_Empresarial"."Empresas" 
        SET "Nombre/Propietario"='${nameOwner}', "Direccion"='${address}', "Telefono"=${telephone},"Email"='${email}',"NIT"=${nit},"Nombre Empresa"='${nameCompany}' WHERE "ID Empresa"= ${req.params.id}`);
        res.send(`Company ${req.body.nameCompany} updated to Successfully`);

    } catch (error) {
        res.send(error)
    }
}

export const updateSomeCompany = async(req, res)=>{
    try {
        let consult= [];
        const {nameOwner, address, telephone, email, nit, nameCompany} = req.body;
        if(nameOwner !== undefined){
            consult.push(`"Nombre/Propietario" = '${nameOwner}' `) ;
        }
        if(address !== undefined){
            consult.push(`"Direccion" = '${address}' `) ;
        }
        if(telephone !== undefined){
            consult.push(`"Telefono"= ${telephone} `);
        }
        if(email !== undefined){
            consult.push(`"Email"= '${email}' `);
        }
        if(nit !== undefined){
            consult.push(`"NIT"= ${nit} `);
        }
        if(nameCompany !== undefined){
            consult.push(`"Nombre Empresa"= '${nameCompany}' `);
        }

        const response= await client.query(`UPDATE "Gestion_Empresarial"."Empresas" SET ${consult} WHERE "ID Empresa"= ${req.params.id}`);

        res.send(`Date ${consult} UPDATE!`);

    } catch (error) {
        res.send(error)
    }
}

export const deleteCompany = async (req, res)=>{

        try {
            const response= await client.query(`DELETE FROM "Gestion_Empresarial"."Empresas" WHERE "ID Empresa"=${req.params.id}`);
            res.json("user DELETE!")
    
        } catch (error) {
            res.send(error)
        }

}



