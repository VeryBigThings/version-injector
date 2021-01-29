import {VARIABLES} from './VARIABLES';

enum Style {
    botRight = 0,
    botLeft = 1,
    topLeft = 2,
    topRight = 3,
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
        const style = document.createElement('style');
        switch (this.style) {
            case Style.botRight: {
                style.innerHTML = `
            .version-panel {
                position: absolute;
                right: 5px;
                bottom: 2px;

                opacity: 0.1;
                font-size: 12px;
                color: #222222;

                transition: opacity 0.15s ease-in-out;
                user-select: none;
            }

            .version-panel:hover {
                opacity: 1;
            }   `;
                break;
            }

            case Style.botLeft: {
                style.innerHTML = `
            .version-panel {
                position: absolute;
                right: 5px;
                bottom: 2px;

                opacity: 0.1;
                font-size: 12px;
                color: #222222;

                transition: opacity 0.15s ease-in-out;
                user-select: none;
            }

            .version-panel:hover {
                opacity: 1;
            }   `;
                break;
            }

            case Style.topLeft: {
                style.innerHTML = `
            .version-panel {
                position: absolute;
                right: 5px;
                bottom: 2px;

                opacity: 0.1;
                font-size: 12px;
                color: #222222;

                transition: opacity 0.15s ease-in-out;
                user-select: none;
            }

            .version-panel:hover {
                opacity: 1;
                }`;
                break;
            }
            case Style.topRight: {
                style.innerHTML = `
            .version-panel {
                position: absolute;
                right: 5px;
                bottom: 2px;

                opacity: 0.1;
                font-size: 12px;
                color: #222222;

                transition: opacity 0.15s ease-in-out;
                user-select: none;
            }

            .version-panel:hover {
                opacity: 1;
                }`;
                break;
            }
        }
        document.head.appendChild(style);
    }
}