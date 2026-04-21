import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class AeroHero extends DDDSuper(LitElement) {
    static get tag() {
        return "aero-hero";
    }

    static get styles() {
        return [super.styles, css`
    .hero {
        position: relative;
        width: 100%;
        height: 380px;
        background-image: url('/assets/aero-hero-image.png');
        background-size: cover;
        background-position: center;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .hero::before {
        content: "";
        position: absolute;
        inset: 0;
        background-color: var(--aero-deep-space-blue);
        opacity: 0.5;
        z-index: 1;
    }
    .hero-content {
        position: relative;
        z-index: 2;
    }
    .hero-logo {
        width: 100%;
        height: 130px;
        scale: 3;
        object-fit: cover;
        object-position: center;
        margin-top: 40px;
        margin-bottom: 20px;
    }
    .hero-subtitle {
        font-size: var(--ddd-font-size-s);
        font-weight: var(--ddd-font-weight-bold);
        color: var(--aero-white);
    }
    `];
    }

    render() {
        return html`
      <section class="hero">
        <div class="hero-content">
          <img class="hero-logo" src="./assets/aero-hero-logo.png" alt="Aero logo" />
          <div class="hero-subtitle">Rise Above the Wild
          </div>
        </div>
      </section>
    `;
    }
}

globalThis.customElements.define(AeroHero.tag, AeroHero);