
const VersionInjectorStyle = {
    bottomRight: 'bottomRight',
    bottomLeft: 'bottomLeft',
    topLeft: 'topLeft',
    topRight: 'topRight',
};

Object.freeze(VersionInjectorStyle);

module.exports = class VersionInjectorPlugin {
    constructor(style = VersionInjectorStyle.bottomRight, version = '1.0.0') {
        this.style = style;
        this.version = version;
    }

    apply(compiler) {
        console.log('applying', this.style, this.version);

        compiler.hooks.done.tap('Version Injection', stats => {
            this.element = document.createElement('div');
            this.element.innerText = this.version;
            this.element.classList.add('version-panel');

            // document.body.appendChild(this.element);

            this.setStyles();
        });
    }

    setStyles() {
        this.element.classList.add(this.style);

        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = 'styles.css';

        // document.head.appendChild(link);
    }
}

