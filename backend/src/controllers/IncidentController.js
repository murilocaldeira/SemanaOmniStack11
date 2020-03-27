const connection = require ('../database/connection');

module.exports = {
    async index(request, response){
        const{page = 1} = request.query;

        const [count] = await connection('incidents').count(); //pegar primeira posição do arry de objetos retornado

        const incidents = await connection('incidents')
        .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
        .limit(5) //limitar a 5 por requisição
        .offset((page-1) * 5)//quantos vou pular para pegar os proximos e exibir
        .select([
            'incidents.*', 
            'ongs.name', 
            'ongs.email', 
            'ongs.whatsapp', 
            'ongs.city',  
            'ongs.uf']);

        response.header('X-Total-Count', count['count(*)']); //Passa no HEADER DA RESPOSTA o total de registros, primeira posição doarray de objetos, propriedade "count(*)"
      
        return response.json(incidents);
    },

    async create(request, response){
      const {title, description, value} = request.body;
      const ong_id = request.headers.authorization;

      const [id] = await connection('incidents').insert({
        title, 
        description, 
        value,
        ong_id
      });
      return response.json({id});
    },

    async delete (request, response){
        const { id } = request.params;
        const ong_id = request.headers.authorization;

        const incident = await connection('incidents').where('id', id).select('ong_id').first();

        if(incident.ong_id !== ong_id){//se meu incident nao for da ong que qestá logada
            return response.status(401).json({error:'Operation not permited. ' }); //nao autorizado
        }

        await connection('incidents').where('id', id).delete();

        return response.status(204).send();
    }
};