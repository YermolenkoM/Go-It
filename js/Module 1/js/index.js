'use strict'

const adminLogin = 'admin';

const adminPassword = 'm4ngo1zh4ackz0r';

const accessCancelled = 'Отменено пользователем!';

const accessDenied = 'Доступ запрещен!';

const wellcome = 'Добро пожаловать!';

let login = prompt('Enter your login');

switch(login) {
    case null:
        alert(accessCancelled);
        break;
    case adminLogin:
        pass = prompt('Enter your password');
            switch (pass) {
                case null:
                    alert(accessCancelled);
                    break;
                case adminPassword:
                    alert(wellcome);
                    break;
                default:
                    alert(accessDenied);
                    break;
            }
        break;
    default:
        alert(accessDenied);
        break;
}