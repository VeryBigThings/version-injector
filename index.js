
class VersionInjectorPlugin {
    constructor(version = '0.0.1') {
        this.version = version;
    }

    apply(compiler) {
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
                                    <div style=" position: absolute; right: 5px; bottom: 2px; opacity: 0.1; font-size: 12px; color: #222222; transition: opacity 0.15s ease-in-out; user-select: none;">
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
