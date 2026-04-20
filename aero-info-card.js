import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class AeroInfoCard extends DDDSuper(LitElement) {
    static get tag() {
        return "aero-info-card";
    }

    static get properties() {
        return {
            ...super.properties,
            title: { type: String },
            body: { type: String },
            label: { type: String },
            action: { type: String },
        };
    }

    _handleClick() {
        this.dispatchEvent(new CustomEvent("card-action", {
            detail: { action: this.action },
            bubbles: true,
            composed: true
        }));
    }

    static get styles() {
        return [super.styles, css`
      :host {
        --aero-molten-lava: #7A0000;
        --aero-white: #FFFFFF;
        --aero-black: #000000;
        --aero-mahogany-red: #BC101C;
      }
      .info-card {
        overflow: hidden;
        background-color: var(--aero-white);
        border-radius: 8px;
        padding: var(--ddd-spacing-4);
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
      }
      .info-card-title {
        font-size: var(--ddd-font-size-m);
        font-weight: var(--ddd-font-weight-bold);
        color: var(--aero-black);
    }
      .info-card-body {
        font-size: var(--ddd-font-size-s);
        color: var(--aero-black);
        margin: 12px;
    }
      .info-card-button {
        width: 300px;
        padding: 8px 16px;
        font-family: var(--ddd-font-navigation);
        font-size: var(--ddd-font-size-s);
        font-weight: var(--ddd-font-weight-bold);
        color: var(--aero-white);
        background-color: var(--aero-molten-lava);
        border: 2px solid var(--aero-black);
        border-radius: 8px;
        cursor: pointer;
        transition: background-color 0.2s;
    }
      .info-card-button:hover {
        color: var(--aero-black);
        background-color: var(--aero-mahogany-red);
    }
    `];
    }

    render() {
        return html`
      <div class="info-card">
        <div class="info-card-title">${this.title}</div>
        <p class="info-card-body">${this.body}</p>
        <button class="info-card-button" @click=${this._handleClick}>${this.label}</button>
      </div>
    `;
    }
}

globalThis.customElements.define(AeroInfoCard.tag, AeroInfoCard);