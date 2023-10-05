import { client } from '../../DataBaseInfo.js'

export const getQuotes = async (req, res)=>{
    try {
        const response= await client.query('SELECT * FROM "Gestion_Empresarial"."Cotizaciones"');
        res.json(response.rows)

    } catch (error) {
        res.send(error)
    }

}

export const getQuoteById = async (req, res)=>{

    try {
        const response= await client.query(`SELECT * FROM "Gestion_Empresarial"."Cotizaciones" WHERE "ID Cotizaciones"=${req.params.id}`);
        res.json(response.rows)

    } catch (error) {
        res.send(error)
    }
}

export const createQuote = async (req, res)=>{
    try {
        const {IdQuotCont, advanceAmount, dateAdvance, meetingPlace, datePlace, meetingTime} = req.body;
        const response= await client.query(`
        INSERT INTO "Gestion_Empresarial"."Cotizaciones" ("ID Cotizacion/Contrato", "Monto Anticipo", "Fecha Anticipo", "Lugar Encuentro", "Hora de Encuentro", "Fecha Encuentro") 
        VALUES (${IdQuotCont}, ${advanceAmount}, '${dateAdvance}','${meetingPlace}','${meetingTime}','${datePlace}');`);
        res.send(`Table created!`);

    } catch (error) {
        res.send(error)
    }
}

export const updateQuote = async (req, res)=>{
    try {
        const {IdQuotCont, advanceAmount, dateAdvance, meetingPlace, datePlace, meetingTime} = req.body;
        const response= await client.query(`UPDATE "Gestion_Empresarial"."Contratos" 
        SET "ID Cotizacion/Contrato"=${IdQuotCont}, "Monto Anticipo"='${advanceAmount}', "Fecha Anticipo"='${dateAdvance}',"Lugar Encuentro"=${meetingPlace},"Hora de Encuentro"='${datePlace}',"Fecha de Encuentro"='${meetingTime}' WHERE "ID Cotizacion"= ${req.params.id}`);
        res.send(`Quote of ${req.body} updated to Successfully`);

    } catch (error) {
        res.send(error)
    }
}

export const updateSomeQuote = async(req, res)=>{
    try {
        let consult= [];
        const {IdQuotCont, advanceAmount, dateAdvance, meetingPlace, datePlace, meetingTime} = req.body;
        if(IdQuotCont !== undefined){
            consult.push(`"ID Cotizacion/Contrato"= ${IdQuotCont} `) ;
        }
        if(advanceAmount !== undefined){
            consult.push(`"Monto Anticipo"= ${advanceAmount} `) ;
        }
        if(dateAdvance !== undefined){
            consult.push(`"Fecha Anticipo"= '${dateAdvance}' `);
        }
        if(meetingPlace !== undefined){
            consult.push(`"Lugar Encuentro"= '${meetingPlace}' `);
        }
        if(datePlace !== undefined){
            consult.push(`"Hora de Encuentro"= '${datePlace}' `);
        }
        if(meetingTime !== undefined){
            consult.push(`"Fecha de Encuentro"= '${meetingTime}' `);
        }

        const response= await client.query(`UPDATE "Gestion_Empresarial"."Cotizaciones" SET ${consult} WHERE "ID Cotizacion"= ${req.params.id}`);

        res.send(`Date ${consult} UPDATE!`);

    } catch (error) {
        res.send(error)
    }
}

export const deleteQuote = async (req, res)=>{

        try {
            const response= await client.query(`DELETE FROM "Gestion_Empresarial"."Cotizaciones" WHERE "ID Cotizacion"=${req.params.id}`);
            res.json("Cotizacion DELETE!")
    
        } catch (error) {
            res.send(error)
        }

}



