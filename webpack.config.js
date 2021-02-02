const VersionInjectorPlugin = require("./VersionInjector");


module.exports = {

    // [...]

    plugins: [
        // [...]

        new VersionInjectorPlugin(),

        // [...]
    ]

};