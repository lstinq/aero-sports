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
        display: block;
        height: 100%;
      }
      .info-card {
        min-height: 260px;
        height: 100%;
        overflow: visible;
        background-color: light-dark(var(--aero-white), var(--aero-black));
        border-radius: var(--ddd-radius-sm);
        padding: var(--ddd-spacing-4);
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        justify-content: flex-start;
      }
      .info-card-title {
        font-size: var(--ddd-font-size-m);
        font-weight: var(--ddd-font-weight-bold);
        color: light-dark(var(--aero-black), var(--aero-white));
        margin-top: var(--ddd-spacing-6);
      }
      .info-card-body {
        font-size: var(--ddd-font-size-s);
        color: var(--aero-gray);
        margin: var(--ddd-spacing-3);
        flex: 1;
      }
      .info-card-button {
        width: auto;
        padding: var(--ddd-spacing-2) var(--ddd-spacing-6);
        font-family: var(--ddd-font-navigation);
        font-size: var(--ddd-font-size-s);
        font-weight: var(--ddd-font-weight-bold);
        color: var(--aero-white);
        background-color: var(--aero-molten-lava);
        border: none;
        border-radius: var(--ddd-radius-xl);
        cursor: pointer;
        transition: background-color 0.2s;
        margin-bottom: var(--ddd-spacing-6);
      }
      .info-card-button:hover {
        color: var(--aero-black);
        background-color: var(--aero-mahogany-red);
      }
      @media (max-width: 700px) {
        .info-card {
          flex-direction: column;
          text-align: center;
          align-items: center;
          height: 100%;
        }
        .info-card-title {
          margin-top: var(--ddd-spacing-3);
          white-space: normal;
        }
        .info-card-body {
          margin: var(--ddd-spacing-3);
          flex: 1;
        }
        .info-card-button {
          margin-bottom: var(--ddd-spacing-4);
          white-space: normal;
        }
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