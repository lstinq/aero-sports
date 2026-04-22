import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class AeroFooter extends DDDSuper(LitElement) {
    static get tag() {
        return "aero-footer";
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
      }
      .footer {
        width: 100%;
        height: auto;
        box-sizing: border-box;
        background-color: light-dark(var(--aero-white) var(--aero-black));
        display: flex;
        align-items: center;
        margin-top: 20px;
        margin-bottom: 20px;
        gap: 16px;
        padding: 0 20px;
        flex-wrap: wrap;
      }
      .social-link {
        display: flex;
        padding: 2px;
        color: light-dark(var(--aero-black) var(--aero-white));
        font-size: var(--ddd-font-size-s);
        transition: background-color 0.2s;
    }
      .social-link:hover {
        color: var(--aero-sky-reflection);
    }
    `];
    }

    render() {
        return html`
      <footer class="footer">
        <span style="flex: 1; font-size: var(--ddd-font-size-s);">&copy; 2026 Aero Sports. All rights reserved.</span>
        <a class="social-link" href="https://hax.psu.edu/" target="_blank">X</a>
        <a class="social-link" href="https://hax.psu.edu/" target="_blank">Instagram</a>
        <a class="social-link" href="https://hax.psu.edu/" target="_blank">Facebook</a>
        <a class="social-link" href="https://hax.psu.edu/" target="_blank">LinkedIn</a>
      </footer>
    `;
    }
}

globalThis.customElements.define(AeroFooter.tag, AeroFooter);