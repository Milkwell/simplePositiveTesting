import Page from './websitePage.js';

class LoginPage extends Page {
    get inputUsername () {
        return $('#username');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnLogin () {
        return $('input[type="submit"]');
    }

    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnLogin.click();
    }

    open () {
        return super.open('login');
    }
}

export default new LoginPage();
