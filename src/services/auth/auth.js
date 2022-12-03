const { _post } = require('../http/http');

function userIsLoggedIn () {
    if(false){
        window.location.href = '/login';
    }
};

//Login: chamado o _post e envia usuario e senha
const authLogin = async (userEmail, password) => {
    const response = await _post('auth/login', {
    userEmail,
    password,
    });
    const status = await response.status;
    const data = await response.json();
    console.log(userEmail);
    console.log(password);
    return true;
}

const authRegister = (username, email, password) => {
    return 'login';
}

const authLogout = () => {
    return 'logout';

}

// Exportar as funções em JSON. Não precisa colocar login: login, basta login pois o nome da chave é o mesmo do nome da função
module.exports = {
    userIsLoggedIn,
    authLogin,
    authRegister,
    authLogout
}