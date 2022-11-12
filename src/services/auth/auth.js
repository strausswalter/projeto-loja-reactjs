
function userIsLoggedIn () {
    if(false){
        window.location.href = '/login';
    }
};

const login = (email, password) => {
    return 'login';
}

const register = (username, email, password) => {
    return 'login';
}

const logout = () => {
    return 'logout';

}

// Exportar as funções em JSON. Não precisa colocar login: login, basta login pois o nome da chave é o mesmo do nome da função
module.exports = {
    userIsLoggedIn,
    login,
    register,
    logout
}