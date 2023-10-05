import { client } from '../../DataBaseInfo.js'

export const getAbilities = async (req, res)=>{
    try {
        const response= await client.query('SELECT * FROM "Perfiles"."Habilidades"');
        res.json(response.rows)

    } catch (error) {
        res.send(error)
    }

}

export const getAbilityById = async (req, res)=>{

    try {
        const response= await client.query(`SELECT * FROM "Perfiles"."Habilidades" WHERE "ID Habilidad"=${req.params.id}`);
        res.json(response.rows)

    } catch (error) {
        res.send(error)
    }
}

export const createAbility = async (req, res)=>{
    try {
        const {idLinkedUser, nameAbility, IdLinkedCompany} = req.body;
        const response= await client.query(`INSERT INTO "Perfiles"."Habilidades" ("ID Usuario", "Habilidad", "ID Empresa") 
        VALUES (${idLinkedUser}, '${nameAbility}', ${IdLinkedCompany});`);
        res.send(`Ability ${req.body.nameAbility} created!`);

    } catch (error) {
        res.send(error)
    }
}

export const updateAbility = async (req, res)=>{
    try {
        const {idLinkedUser, nameAbility, IdLinkedCompany} = req.body;
        const response= await client.query(`UPDATE "Perfiles"."Habilidades" SET "ID Usuario"=${idLinkedUser}, "Habilidad"='${nameAbility}', "ID Empresa"=${IdLinkedCompany} WHERE "ID Usuario"= ${req.params.id}`);
        res.send(`Ability ${req.body.nameAbility} created to Successfully`);

    } catch (error) {
        res.send(error)
    }
}

export const updateSomeAbility = async(req, res)=>{
    try {
        const consult=[];
        const {idLinkedUser, nameAbility, IdLinkedCompany} = req.body;

        if(idLinkedUser !== undefined){
            consult.push(`"ID Usuario"= ${idLinkedUser}`);
        }
        if(nameAbility !== undefined){
            consult.push(`"Habilidad"='${nameAbility}'`);
        }
        if(IdLinkedCompany !== undefined){
            consult.push(`"ID Empresa"= ${IdLinkedCompany}`);
        }
        console.log(consult)
        const response= await client.query(`UPDATE "Perfiles"."Habilidades" SET ${consult} WHERE "ID Habilidad"= ${req.params.id}`);

        res.send(`Date ${consult} UPDATE!`);

    } catch (error) {
        res.send(error)
    }
}

export const deleteAbility = async (req, res)=>{

        try {
            const response= await client.query(`DELETE FROM "Perfiles"."Habilidades" WHERE "ID Usuario"=${req.params.id}`);
            res.json("user DELETE!")
    
        } catch (error) {
            res.send(error)
        }

}
