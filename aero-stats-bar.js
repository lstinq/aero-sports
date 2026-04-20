import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class AeroStatsBar extends DDDSuper(LitElement) {
    static get tag() {
        return "aero-stats-bar";
    }

    static get styles() {
        return [super.styles, css`
        :host {
        display: block;
        overflow-x: hidden;
        font-family: var(--ddd-font-navigation);
        color-scheme: light dark;
        width: 100%;
        height: 100%;
        position: relative;
        --aero-white: #FFFFFF;
        --aero-deep-space-blue: #00283D;
      }
      .stats-section {
        width: 100%;
        box-sizing: border-box;
        background-color: var(--aero-deep-space-blue);
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 32px 40px;
        margin-top: 12px;
        flex-wrap: wrap;
      }
      .stats-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: var(--aero-white);
      }
      .stats-value {
        font-size: var(--ddd-font-size-xl);
        font-weight: var(--ddd-font-weight-bold);
      }
      .stats-label {
        font-size: var(--ddd-font-size-s);
        font-weight: var(--ddd-font-weight-light);
    }
    `];
    }

    render() {
        return html`
      <div class="stats-section">
        ${[
                { value: "600+", label: "Youth athletes" },
                { value: "48+", label: "Teams" },
                { value: "500+", label: "Games per season" },
                { value: "6+", label: "Communities" },
            ].map(stat => html`
          <div class="stats-item">
            <div class="stats-value">${stat.value}</div>
            <div class="stats-label">${stat.label}</div>
          </div>
        `)}
      </div>
    `;
    }
}

globalThis.customElements.define(AeroStatsBar.tag, AeroStatsBar);