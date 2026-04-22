import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class AeroSlideshow extends DDDSuper(LitElement) {
    static get tag() {
        return "aero-slideshow";
    }

    constructor() {
        super();
        this.images = [];
        this.index = 0;
    }

    static get properties() {
        return {
            ...super.properties,
            images: { type: Array },
            index: { type: Number },
        };
    }

    _prev() {
        this.index = (this.index - 1 + this.images.length) % this.images.length;
    }
    _next() {
        this.index = (this.index + 1) % this.images.length;
    }

    static get styles() {
        return [super.styles, css`
      :host {
        display: block;
        font-family: var(--ddd-font-navigation);
        color-scheme: light dark;
        width: 100%;
        height: auto;
      }
      .slideshow-container {
        position: relative;
        width: 100%;
        height: auto;
        line-height: 0;
        border-radius: 8px;
        overflow: hidden;
      }
      .slideshow-arrow {
        position: absolute;
        background-color: var(--aero-deep-space-blue);
        color: var(--aero-white);
        border: none;
        border-radius: 50%;
        opacity: 0.75;
        backdrop-filter: blur(4px);
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: background-color 0.2s;
      }
      .slideshow-arrow:hover {
        background-color: var(--aero-white);
        color: var(--aero-deep-space-blue);
    }
      .prev {
        left: var(--ddd-spacing-4);
        top: 50%;
        transform: translateY(-50%);
        font-family: var(--ddd-font-navigation);
        font-size: var(--ddd-font-size-s);
    }
      .next {
        right: var(--ddd-spacing-4);
        top: 50%;
        transform: translateY(-50%);
        font-family: var(--ddd-font-navigation);
        font-size: var(--ddd-font-size-s);
    }
      .slideshow-image {
        width: 100%;
        max-height: 516px;
        object-fit: cover;
        display: block;
        border-radius: 8px;
    }
    `];
    }

    render() {
        return html`
        <div class="slideshow-container">
          <button class="slideshow-arrow prev" @click=${this._prev}>&#8592;</button>
          <img class="slideshow-image" src="${this.images[this.index]}" alt="Slideshow image" />
          <button class="slideshow-arrow next" @click=${this._next}>&#8594;</button>
        </div>
    `;
    }
}

globalThis.customElements.define(AeroSlideshow.tag, AeroSlideshow);