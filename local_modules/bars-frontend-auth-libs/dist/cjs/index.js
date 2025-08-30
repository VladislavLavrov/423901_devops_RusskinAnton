'use strict';

var axios = require('axios');

var FactorType;
(function (FactorType) {
    FactorType[FactorType["PasswordFactor"] = 0] = "PasswordFactor";
    FactorType[FactorType["CardFactor"] = 1] = "CardFactor";
})(FactorType || (FactorType = {}));

class SecurityAuthService {
    constructor(apiUrl) {
        Object.defineProperty(this, "apiUrl", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "axiosOpt", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        if (!apiUrl)
            this.apiUrl = 'http://expo-on-line.ru:47747/';
        else
            this.apiUrl = apiUrl;
        const axiosOptions = {
            withCredentials: true,
            baseURL: apiUrl,
            headers: {
                'Content-Type': 'application/json'
            }
        };
        this.axiosOpt = axios.create(axiosOptions);
    }
    async LogIn(login, password, snackbar) {
        snackbar('Вход в систему', 'info');
        const response = await this.axiosOpt.post('api/Auth/BearerAuthenticate', {
            username: login,
            password: password,
            FactorType: FactorType.PasswordFactor
        })
            .catch((reason) => {
            snackbar('Не удалось войти в систему: ' + reason?.message, 'error');
            console.warn(reason);
            return null;
        });
        if (response == null) {
            console.warn('An error has occurred while login: error == null');
            snackbar('Не удалось получить ответ от службы авторизации', 'error');
            return null;
        }
        if (response?.data?.success == true) {
            localStorage.setItem('token', response.data.accessToken.token);
            localStorage.setItem('login', response.data.user.name ?? 'Логин не указан');
            localStorage.setItem('isLoggedIn', "true");
            localStorage.setItem('refresh', response.data.refreshToken.token);
            localStorage.setItem('id', response.data.user.id.toString());
            snackbar('Успешный вход', 'success');
            return true;
        }
        return false;
    }
    LogOut(snackbar) {
        localStorage.clear();
    }
    async UpdateToken(refreshToken) {
        if (!refreshToken)
            return false;
        let isError = false;
        const result = await this.axiosOpt.post('api/Auth/updateAccessToken', {
            refreshToken: refreshToken
        })
            .catch(function (error) {
            console.error('can\'t refresh token', error);
            isError = true;
            localStorage.setItem('isLoggedIn', "false");
            return error.response;
        });
        if (isError || !result?.data.accessToken.token || !result?.data.refreshToken.token) {
            localStorage.setItem('isLoggedIn', "false");
            return false;
        }
        localStorage.setItem('isLoggedIn', "true");
        localStorage.setItem('token', result.data.accessToken.token);
        localStorage.setItem('refresh', result.data.refreshToken.token);
        return true;
    }
    async IsLoggedIn() {
        try {
            await this.axiosOpt.get('api/Auth/Check');
        }
        catch {
            localStorage.setItem('isLoggedIn', "false");
            return false;
        }
        return true;
    }
}

exports.SecurityAuthService = SecurityAuthService;
