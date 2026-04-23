import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import "./aero-slideshow.js";
import "./aero-stats-bar.js";
import "./aero-who-we-serve-card.js";

export class AeroAboutPage extends DDDSuper(LitElement) {

    static get tag() {
        return "aero-about-page";
    }

    static get properties() {
        return {
            ...super.properties,
            slideshowImages: { type: Array },
        };
    }

    constructor() {
        super();
        this.slideshowImages = [
            "/assets/slideshow-1.png",
            "/assets/slideshow-2.png",
            "/assets/slideshow-3.png",
            "/assets/slideshow-4.png",
            "/assets/slideshow-5.png",
        ];
    }

    static get styles() {
        return [super.styles, css`
      :host {
        display: block;
        width: 100%;
        font-family: var(--ddd-font-navigation);
        color-scheme: light dark;
        --aero-white: #FFFFFF;
        --aero-molten-lava: #7A0000;
        --aero-deep-space-blue: #00283D;
        --aero-black: #000000;
      }
      .about-page {
        padding: var(--ddd-spacing-4) var(--ddd-spacing-5);
        display: flex;
        gap: 40px;
        align-items: flex-start;
        box-sizing: border-box;
        flex-wrap: nowrap;
      }
      .about-left {
        flex: 1 1 50%;
      }
      .about-right {
        flex: 1 1 50%;
        display: flex;
        align-items: stretch;
        justify-content: center;
        border-radius: 8px;
        align-self: stretch;
      }
      .about-title {
        font-size: var(--ddd-font-size-xl);
        font-weight: var(--ddd-font-weight-bold);
        color: var(--aero-molten-lava);
        text-transform: uppercase;
      }
      .about-sub-title {
        font-size: var(--ddd-font-size-m);
        font-weight: var(--ddd-font-weight-bold);
        color: light-dark(var(--aero-black) var(--aero-white));
        margin-top: 24px;
      }
      .about-body {
        font-size: var(--ddd-font-size-s);
        color: var(--aero-gray);
        margin-top: 12px;
      }
      .who-we-serve-cards {
        margin-top: 12px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
      }
     `];
    }

    render() {
        return html`
      <div class="about-page">
        
        <div class="about-left">
          <div class="about-title">About Aero</div>
          <div class="about-sub-title">Our Mission</div>
          <p class="about-body">
            At Aero, we are dedicated to empowering bear athletes through elite training, competitive opportunities, and a grizzly culture of growth.
            Through teamwork, discipline, and passion, we strive to create an environment where young cubs can succeed on and off the field.
          </p>
          <div class="about-sub-title">Who We Serve</div>
            <div class="who-we-serve-cards">
              <aero-who-we-serve-card
                .label=${'Youth Athletes'}
                .image=${'./assets/youth-athletes.png'}
              ></aero-who-we-serve-card>
              <aero-who-we-serve-card
                .label=${'Parents'}
                .image=${'./assets/parents.png'}
              ></aero-who-we-serve-card>
              <aero-who-we-serve-card
                .label=${'Coaches'}
                .image=${'./assets/coaches.png'}
              ></aero-who-we-serve-card>
            </div>
        </div>

        <div class="about-right">
          <aero-slideshow .images="${this.slideshowImages}"></aero-slideshow>
         </div>
      </div>

      <div class="about-sub-title" style="padding: 0 var(--ddd-spacing-5) 0;">By the Numbers</div>
        <aero-stats-bar></aero-stats-bar>
    `;
    }
}

globalThis.customElements.define(AeroAboutPage.tag, AeroAboutPage);