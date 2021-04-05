const path = require('path');
const fs = require('fs');


class VersionInjectorPlugin {
    constructor(className = 'version-panel') {
        this.className = className;

        if (this.className === 'version-panel') {
            fs.readFile(path.join(__dirname, 'styles.css'), 'utf8', (err, data) => {
                if (err) {
                    return console.log(err);
                }

                this.styles = `<style>${data}</style>`;
            });
        }
    }

    apply(compiler) {
        const packageJSON = require(path.join(compiler.options.output.path, 'package.json'));
        this.version = packageJSON.version;

        compiler.hooks.compilation.tap('VersionInjectorPlugin', (compilation) => {
            compilation.hooks.htmlWebpackPluginAfterHtmlProcessing.tapAsync(
                'ReactRootPlugin',
                (data, cb) => {
                    const htmlString = data.html;
                    const bodyIndex = htmlString.indexOf('<script');
                    const firstHalf = htmlString.slice(0, bodyIndex);
                    const secondHalf = htmlString.slice(bodyIndex, htmlString.length);

                    const returnData = {
                        html: `${firstHalf}
                                    ${this.styles || ''}

                                    <div class="${this.className}">
                                        ${this.version}
                                    </div>
                               ${secondHalf}`,
                    };

                    cb(null, returnData);
                }
            );
        });
    }
}

module.exports = VersionInjectorPlugin;
