import { client } from '../../DataBaseInfo.js'

client.connect()

export const getUsers = async (req, res)=>{
    try {
        const response= await client.query('SELECT * FROM "Perfiles"."Usuarios"');
        res.json(response.rows)

    } catch (error) {
        res.send(error)
    }

}

export const getUserById = async (req, res)=>{

    try {
        const response= await client.query(`SELECT * FROM "Perfiles"."Usuarios" WHERE "ID Usuario"=${req.params.id}`);
        res.json(response.rows)

    } catch (error) {
        res.send(error)
    }
}

export const createUsers = async (req, res)=>{
    try {
        const {nameUser, passwordUser, IdentificacionUser, EmailUser, CellPhoneUser, rateUser} = req.body;
        const response= await client.query(`INSERT INTO "Perfiles"."Usuarios"("Nombre", "Contraseña", "Numero de identidad", "Email", "Celular", "Tarifa") 
        VALUES ('${nameUser}', '${passwordUser}', ${IdentificacionUser}, '${EmailUser}', ${CellPhoneUser}, ${rateUser});`);
        res.send('user Created!' + req.body);

    } catch (error) {
        res.send(error)
    }
}

export const updateUser = async (req, res)=>{
    try {
        const {nameUser, passwordUser, IdentificacionUser, EmailUser, CellPhoneUser, rateUser} = req.body;
        const response= await client.query(`UPDATE "Perfiles"."Usuarios" SET "Nombre"='${nameUser}', "Contraseña"='${passwordUser}', "Numero de identidad"=${IdentificacionUser}, "Email"='${EmailUser}', "Celular"=${CellPhoneUser},"Tarifa"=${rateUser} WHERE "ID Usuario"= ${req.params.id}`);
        res.send(`user ${req.body.nameUser} created to Successfully`);

    } catch (error) {
        res.send(error)
    }
}

export const updateSomeUser = async(req, res)=>{
    try {
        let consult=[];
        const {nameUser, passwordUser, IdentificacionUser, EmailUser, CellPhoneUser, rateUser} = req.body;

        if(nameUser !== undefined){
            consult.push(`"Nombre"= '${nameUser}' `);
        }
        if(passwordUser !== undefined){
            consult.push(`"Contraseña"='${passwordUser}' `);
        }
        if(IdentificacionUser !== undefined){
            consult.push(`"Numero de identidad"= '${IdentificacionUser}' `);
        }
        if(EmailUser !== undefined){
            consult.push(`"Email"= '${EmailUser}' `);
        }
        if(CellPhoneUser !== undefined){
            consult.push(`"Celular"= ${CellPhoneUser} `) ;
        }
        if(rateUser !== undefined){
            consult.push(`"Tarifa"=${rateUser} `);
        } 

        const response= await client.query(`UPDATE "Perfiles"."Usuarios" SET ${consult} WHERE "ID Usuario"= ${req.params.id}`);

        res.send(`Date ${req.body.nameUser}  ${req.params.id} UPDATE!`);

    } catch (error) {
        res.send(error)
    }
}

export const deleteUser = async (req, res)=>{

        try {
            const response= await client.query(`DELETE FROM "Perfiles"."Usuarios" WHERE "ID Usuario"=${req.params.id}`);
            res.json(response.rows + "user DELETE!")
    
        } catch (error) {
            res.send(error)
        }

}

