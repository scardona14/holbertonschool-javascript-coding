class AppController {
    static getHome(req, res) {
        res.send(200, 'Hello Holberton School!');
    }
}

export default AppController;
