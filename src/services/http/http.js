const URL = process.env.REACT_APP_URL_HOST_API;
const PORT = process.env.REACT_APP_PORT_HOST_API;

const _generateHeader = (header) => {
    const headers = {//Cria o cabeçalho padrão, que todos irão usar
      Accept: "application/json",
      "Content-Type": "application/json",
    }
  
    let keys = Object.keys(header);
    if (keys.length > 0) {
      for(let key of keys){
        headers[key] = header[key];//Adiciona itens de cabeçalhos extras (a serem passados nas funções abaixo) ao cabeçalho padrão.
      }
    } 
    
    return headers;
  }

const _get = async (endpoint) => {
    const response = await fetch(`http://${URL}:${PORT}/${endpoint}`);
    const data = await response.json();
    return data;
  };

//Método Post genérico, feito para qualquer situação (basta que a função solicitante passe os parametros).
const _post = async (endpoint, body, headers={}) => {
    headers = _generateHeader(headers);
    try{
        const response = await fetch(`http://${URL}:${PORT}/${endpoint}`, {
          method: "POST",
          body: JSON.stringify(body),
          headers,
        });
        const data = await response.json();
        return data;
      }catch(err){
        if (err.toString().indexOf("Dados inválidos") > -1) {
          return {
            msg: 'Dados inválidos'
          };
        }
      } 
};

const _put = async (endpoint) => {
    console.log(`http://${URL}:${PORT}/${endpoint}`);

};

const _patch = async (endpoint) => {
    console.log(`http://${URL}:${PORT}/${endpoint}`);

};

const _delete = async (endpoint) => {
    console.log(`http://${URL}:${PORT}/${endpoint}`);

};

module.exports = {
  _get,
  _post,
  _put,
  _patch,
  _delete,
};
