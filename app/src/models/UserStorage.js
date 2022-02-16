class UserStorage{
    static #users = {
    id: ["test1", "test2", "test3"],
    password: ["1", "2", "3"],
    name:["테스트1","테스트2","테스트3"]
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }

    static getUserInfo(id) {
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const ussersKeys = Object.keys(users);
        const userInfo = ussersKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});

        return userInfo;
    }
};



module.exports = UserStorage;