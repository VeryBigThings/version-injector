import {VARIABLES} from './VARIABLES';

enum Style {
    botRight = 'botRight',
    botLeft = 'botLeft',
    topLeft = 'topLeft',
    topRight = 'topRight',
}

export default class VersionViewer {
    private element: HTMLDivElement;

    constructor(private style: Style = Style.botRight, private version: string =  VARIABLES.VERSION || '-.-.-') {
    }

    init() {
        this.element = document.createElement('div');
        this.element.innerText = this.version;
        this.element.classList.add('version-panel');

        document.body.appendChild(this.element);

        this.setStyles();
    }

    setStyles() {
        this.element.classList.add(this.style);

        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = 'styles.css';

        document.head.appendChild(link);
    }
}