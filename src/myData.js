const message = 'Hello heroku';

const getMessage = () => {
    console.log(message);
    return message;
};

module.exports = {
    getMessage,
}