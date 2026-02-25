import { SignalWatcher } from "@lit-labs/signals";
import { provide } from "@lit/context";
import { LitElement, html, css, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import { v0_8 } from "@a2ui/lit";
import * as UI from "@a2ui/lit/ui";
import { GALLERY_MESSAGES } from "./gallery-data";

// Minimal theme with required structures for components
const theme: any = {
  components: {
    AudioPlayer: {},
    Button: {},
    Card: {},
    Column: {},
    CheckBox: { container: {}, element: {}, label: {} },
    DateTimeInput: { container: {}, element: {}, label: {} },
    Divider: {},
    Image: { all: {}, icon: {}, avatar: {}, smallFeature: {}, mediumFeature: {}, largeFeature: {}, header: {} },
    Icon: {},
    List: {},
    Modal: { backdrop: {}, element: {} },
    MultipleChoice: { container: {}, element: {}, label: {} },
    Row: {},
    Slider: { container: {}, element: {}, label: {} },
    Tabs: { container: {}, element: {}, controls: { all: {}, selected: {} } },
    Text: { all: {}, h1: {}, h2: {}, h3: {}, h4: {}, h5: {}, caption: {}, body: {} },
    TextField: { container: {}, element: {}, label: {} },
    Video: {},
  },
  elements: {
    a: {}, audio: {}, body: {}, button: {}, h1: {}, h2: {}, h3: {}, h4: {}, h5: {},
    header: {}, html: {}, img: {}, input: {}, label: {}, li: {}, ol: {}, p: {},
    section: {}, span: {}, ul: {}, video: {}
  }
};

const DEMO_ITEMS = [
  { id: "demo-text", title: "TextField", description: "Allows user to enter text." },
  { id: "demo-text-regex", title: "TextField (Regex)", description: "TextField with 5-digit regex validation." },
  { id: "demo-checkbox", title: "CheckBox", description: "A binary toggle." },
  { id: "demo-slider", title: "Slider", description: "Select a value from a range." },
  { id: "demo-date", title: "DateTimeInput", description: "Pick a date or time." },
  { id: "demo-multichoice", title: "MultipleChoice", description: "Select valid options from a list." },
  { id: "demo-button", title: "Button", description: "Triggers a client-side action." },
];

@customElement("a2ui-sample-app")
export class A2UISampleApp extends SignalWatcher(LitElement) {

  @provide({ context: UI.Context.themeContext })
  accessor theme = theme;

  #processor = v0_8.Data.createSignalA2uiMessageProcessor();

  static styles = [
    unsafeCSS(v0_8.Styles.structuralStyles),
    css`
      :host {
        display: flex;
        flex-direction: column;
        height: 100vh;
        width: 100vw;
        overflow: hidden;
        background: #0f172a;
        color: #f1f5f9;
        font-family: sans-serif;
      }

      header {
        padding: 1rem;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      }

      main {
        flex: 1;
        overflow-y: auto;
        padding: 2rem;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 2rem;
      }

      .card {
        background: #1e293b;
        border-radius: 8px;
        padding: 1.5rem;
        border: 1px solid rgba(255, 255, 255, 0.1);
      }

      h2 { margin-top: 0; font-size: 1.25rem; }
      p { color: #94a3b8; font-size: 0.875rem; }
      
      .content {
        margin-top: 1rem;
        padding: 1rem;
        background: rgba(0, 0, 0, 0.2);
        border-radius: 4px;
      }
    `
  ];

  connectedCallback() {
    super.connectedCallback();
    // Initialize with static data
    this.#processor.processMessages(GALLERY_MESSAGES as any);
  }

  render() {
    return html`
      <header>
        <h1>A2UI Static Sample</h1>
      </header>
      <main>
        ${DEMO_ITEMS.map(item => html`
          <div class="card">
            <h2>${item.title}</h2>
            <p>${item.description}</p>
            <div class="content">
              ${this.#renderSurface(item.id)}
            </div>
          </div>
        `)}
      </main>
    `;
  }

  #renderSurface(surfaceId: string) {
    const surface = this.#processor.getSurfaces().get(surfaceId);
    if (!surface) return html`<div>Surface not found</div>`;

    return html`
      <a2ui-surface
        .surface=${{ ...surface }}
        .surfaceId=${surfaceId}
        .processor=${this.#processor}
      ></a2ui-surface>
    `;
  }
}
