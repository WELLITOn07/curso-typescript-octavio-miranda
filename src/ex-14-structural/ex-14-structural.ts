//STRUCTURAL TYPES
type VerifyUserFn = (user: User, sentvalue: User) => boolean;

type User = {
    username: string,
    password: string
};

const verifyUser: VerifyUserFn = (user, sentvalue) => {
    return (
        user.username === sentvalue.username && sentvalue.password === user.password
    );
};

const bdUser: User = {username: 'Welliton', password: '0707'};
const sentUser: User = {username: 'Welliton', password: '0707'};

const loggedIn = verifyUser(bdUser, sentUser);
if (loggedIn) {
    console.log(`${bdUser.username} logado com sucesso!`)
} else {
    console.log('Login ou senha inválida!')
};