import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class AeroWhoWeServeCard extends DDDSuper(LitElement) {

  static get tag() {
    return "aero-who-we-serve-card";
  }

  static get properties() {
    return {
      ...super.properties,
      label: { type: String },
      image: { type: String },
    };
  }

  static get styles() {
    return [super.styles, css`
      :host {
        display: block;
        width: 100%;
        font-family: var(--ddd-font-navigation);
        color-scheme: light dark;
        --aero-white: #FFFFFF;
        --aero-deep-space-blue: #00283D;
        --aero-black: #000000;
      }
      .who-we-serve-card {
        position: relative;
        flex: 1;
        height: 200px;
        border-radius: var(--ddd-radius-sm);
        overflow: hidden;
        cursor: pointer;
        box-shadow: 0 4px 4px rgba(0,0,0,0.1);
        transition: transform 0.2s, box-shadow 0.2s;
      }
      .who-we-serve-card:hover {
        transform: translateY(-3px);
        box-shadow: 0 4px 4px rgba(0,0,0,0.25);
      }
      .who-we-serve-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }
      .who-we-serve-card::before {
        content: "";
        position: absolute;
        inset: 0;
        background: var(--aero-deep-space-blue);
        opacity: 0.5;
      }
      .who-we-serve-card-label {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: var(--aero-white);
        font-size: var(--ddd-font-size-m);
        font-weight: var(--ddd-font-weight-bold);
        z-index: 1;
        text-align: center;
      }
    `];
  }

  render() {
    return html`
      <div class="who-we-serve-card">
        <img
          class="who-we-serve-image"
          src="${this.image}"
          alt="${this.label}"/>
        <div class="who-we-serve-card-label">
          ${this.label}
        </div>
      </div>
    `;
  }
}

globalThis.customElements.define(AeroWhoWeServeCard.tag, AeroWhoWeServeCard);