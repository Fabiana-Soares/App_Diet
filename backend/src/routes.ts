import {
    FastifyInstance,
    FastifyPluginOptions,
    FastifyRequest,
    FastifyReply
} from 'fastify';
import { CreateNutritionController } from './controllers/CreateNutritionController'

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {

    fastify.get("/teste", (request: FastifyRequest, reply: FastifyReply) => {
        let responseText = "```json\n{\n  \"nome\": \"Fabiana\",\n  \"sexo\": \"Feminino\",\n  \"idade\": 36,\n  \"altura\": 1.70,\n  \"peso\": 74,\n  \"objetivo\": \"Emagrecer\",\n  \"refeicoes\": [\n    {\n      \"horario\": \"7:00\",\n      \"nome\": \"Cafe da manha\",\n      \"alimentos\": [\n        \"1 copo (200ml) de leite desnatado\",\n        \"1 fatia de pao integral\",\n        \"1 colher (sopa) de geleia diet\",\n        \"1 fruta (maça, pera ou laranja)\"\n      ]\n    },\n    {\n      \"horario\": \"10:00\",\n      \"nome\": \"Lanche da manha\",\n      \"alimentos\": [\n        \"1 iogurte desnatado com granola\"\n      ]\n    },\n    {\n      \"horario\": \"13:00\",\n      \"nome\": \"Almoco\",\n      \"alimentos\": [\n        \"1 concha de arroz integral\",\n        \"1 concha de feijao\",\n        \"1 bife grelhado de frango (150g)\",\n        \"Salada verde a vontade (alface, tomate, pepino)\",\n        \"1 colher (sopa) de azeite\"\n      ]\n    },\n    {\n      \"horario\": \"16:00\",\n      \"nome\": \"Lanche da tarde\",\n      \"alimentos\": [\n        \"1 fruta (banana ou morango)\",\n        \"1 punhado de castanhas\"\n      ]\n    },\n    {\n      \"horario\": \"19:00\",\n      \"nome\": \"Jantar\",\n      \"alimentos\": [\n        \"Sopa de legumes (abobrinha, cenoura, ervilha)\",\n        \"1 fatia de peixe grelhado (100g)\",\n        \"Salada verde a vontade\"\n      ]\n    }\n  ],\n  \"suplementos\": [\n    \"Proteina do soro do leite (whey protein)\",\n    \"Creatina (opcional, consultar profissional)\"\n  ]\n}\n```"


        try {
            //Extrair o JSON
            let jsonString = responseText.replace(/```\w*\n/g,'').replace(/\n```/g, '').trim();

            let jsonObject = JSON.parse(jsonString)
            
            return reply.send({ data: jsonObject });

        } catch (err) {
            console.log(err)
        }
        reply.send({ ok: true })
    })

    fastify.post("/create", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateNutritionController().handle(request, reply)
    })

}