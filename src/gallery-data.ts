export const GALLERY_MESSAGES = [
  {
    "beginRendering": {
      "surfaceId": "demo-text",
      "root": "demo-text-root"
    }
  },
  {
    "surfaceUpdate": {
      "surfaceId": "demo-text",
      "components": [
        {
          "id": "demo-text-root",
          "component": {
            "TextField": {
              "label": { "literalString": "Enter some text" },
              "text": { "path": "galleryData/textField" }
            }
          }
        }
      ]
    }
  },
  {
    "dataModelUpdate": {
      "surfaceId": "demo-text",
      "contents": [
        {
          "key": "galleryData",
          "valueMap": [
            { "key": "textField", "valueString": "Hello World" },
            { "key": "checkbox", "valueBoolean": false },
            { "key": "checkboxChecked", "valueBoolean": true },
            { "key": "slider", "valueNumber": 30 },
            { "key": "date", "valueString": "2025-10-26" },
            { "key": "favorites", "valueMap": [{ "key": "0", "valueString": "A" }] },
            { "key": "favoritesChips", "valueMap": [] },
            { "key": "favoritesFilter", "valueMap": [] }
          ]
        }
      ]
    }
  },
  {
    "beginRendering": {
      "surfaceId": "demo-text-regex",
      "root": "demo-text-regex-root"
    }
  },
  {
    "surfaceUpdate": {
      "surfaceId": "demo-text-regex",
      "components": [
        {
          "id": "demo-text-regex-root",
          "component": {
            "TextField": {
              "label": { "literalString": "Enter exactly 5 digits" },
              "text": { "path": "galleryData/textFieldRegex" },
              "validationRegexp": "^\d{5}$"
            }
          }
        }
      ]
    }
  },
  {
    "dataModelUpdate": {
      "surfaceId": "demo-text-regex",
      "contents": [
        {
          "key": "galleryData",
          "valueMap": [
            { "key": "textField", "valueString": "Hello World" },
            { "key": "checkbox", "valueBoolean": false },
            { "key": "checkboxChecked", "valueBoolean": true },
            { "key": "slider", "valueNumber": 30 },
            { "key": "date", "valueString": "2025-10-26" },
            { "key": "favorites", "valueMap": [{ "key": "0", "valueString": "A" }] },
            { "key": "favoritesChips", "valueMap": [] },
            { "key": "favoritesFilter", "valueMap": [] }
          ]
        }
      ]
    }
  },
  {
    "beginRendering": {
      "surfaceId": "demo-checkbox",
      "root": "demo-checkbox-root"
    }
  },
  {
    "surfaceUpdate": {
      "surfaceId": "demo-checkbox",
      "components": [
        {
          "id": "demo-checkbox-root",
          "component": {
            "CheckBox": {
              "label": { "literalString": "Toggle me" },
              "value": { "path": "galleryData/checkbox" }
            }
          }
        }
      ]
    }
  },
  {
    "dataModelUpdate": {
      "surfaceId": "demo-checkbox",
      "contents": [
        {
          "key": "galleryData",
          "valueMap": [
            { "key": "textField", "valueString": "Hello World" },
            { "key": "checkbox", "valueBoolean": false },
            { "key": "checkboxChecked", "valueBoolean": true },
            { "key": "slider", "valueNumber": 30 },
            { "key": "date", "valueString": "2025-10-26" },
            { "key": "favorites", "valueMap": [{ "key": "0", "valueString": "A" }] },
            { "key": "favoritesChips", "valueMap": [] },
            { "key": "favoritesFilter", "valueMap": [] }
          ]
        }
      ]
    }
  },
  {
    "beginRendering": {
      "surfaceId": "demo-slider",
      "root": "demo-slider-root"
    }
  },
  {
    "surfaceUpdate": {
      "surfaceId": "demo-slider",
      "components": [
        {
          "id": "demo-slider-root",
          "component": {
            "Slider": {
              "value": { "path": "galleryData/slider" },
              "minValue": 0,
              "maxValue": 100
            }
          }
        }
      ]
    }
  },
  {
    "dataModelUpdate": {
      "surfaceId": "demo-slider",
      "contents": [
        {
          "key": "galleryData",
          "valueMap": [
            { "key": "textField", "valueString": "Hello World" },
            { "key": "checkbox", "valueBoolean": false },
            { "key": "checkboxChecked", "valueBoolean": true },
            { "key": "slider", "valueNumber": 30 },
            { "key": "date", "valueString": "2025-10-26" },
            { "key": "favorites", "valueMap": [{ "key": "0", "valueString": "A" }] },
            { "key": "favoritesChips", "valueMap": [] },
            { "key": "favoritesFilter", "valueMap": [] }
          ]
        }
      ]
    }
  },
  {
    "beginRendering": {
      "surfaceId": "demo-date",
      "root": "demo-date-root"
    }
  },
  {
    "surfaceUpdate": {
      "surfaceId": "demo-date",
      "components": [
        {
          "id": "demo-date-root",
          "component": {
            "DateTimeInput": { "value": { "path": "galleryData/date" }, "enableDate": true }
          }
        }
      ]
    }
  },
  {
    "dataModelUpdate": {
      "surfaceId": "demo-date",
      "contents": [
        {
          "key": "galleryData",
          "valueMap": [
            { "key": "textField", "valueString": "Hello World" },
            { "key": "checkbox", "valueBoolean": false },
            { "key": "checkboxChecked", "valueBoolean": true },
            { "key": "slider", "valueNumber": 30 },
            { "key": "date", "valueString": "2025-10-26" },
            { "key": "favorites", "valueMap": [{ "key": "0", "valueString": "A" }] },
            { "key": "favoritesChips", "valueMap": [] },
            { "key": "favoritesFilter", "valueMap": [] }
          ]
        }
      ]
    }
  },
  {
    "beginRendering": {
      "surfaceId": "demo-multichoice",
      "root": "demo-multichoice-root"
    }
  },
  {
    "surfaceUpdate": {
      "surfaceId": "demo-multichoice",
      "components": [
        {
          "id": "demo-multichoice-root",
          "component": {
            "MultipleChoice": {
              "selections": { "path": "galleryData/favorites" },
              "options": [
                { "label": { "literalString": "Apple" }, "value": "A" },
                { "label": { "literalString": "Banana" }, "value": "B" },
                { "label": { "literalString": "Cherry" }, "value": "C" }
              ]
            }
          }
        }
      ]
    }
  },
  {
    "dataModelUpdate": {
      "surfaceId": "demo-multichoice",
      "contents": [
        {
          "key": "galleryData",
          "valueMap": [
            { "key": "textField", "valueString": "Hello World" },
            { "key": "checkbox", "valueBoolean": false },
            { "key": "checkboxChecked", "valueBoolean": true },
            { "key": "slider", "valueNumber": 30 },
            { "key": "date", "valueString": "2025-10-26" },
            { "key": "favorites", "valueMap": [{ "key": "0", "valueString": "A" }] },
            { "key": "favoritesChips", "valueMap": [] },
            { "key": "favoritesFilter", "valueMap": [] }
          ]
        }
      ]
    }
  },
  {
    "beginRendering": {
      "surfaceId": "demo-button",
      "root": "demo-button-root"
    }
  },
  {
    "surfaceUpdate": {
      "surfaceId": "demo-button",
      "components": [
        {
          "id": "demo-button-text",
          "component": { "Text": { "text": { "literalString": "Trigger Action" } } }
        },
        {
          "id": "demo-button-root",
          "component": {
            "Button": {
              "child": "demo-button-text",
              "primary": true,
              "action": {
                "name": "custom_action",
                "context": [{
                  "key": "info",
                  "value": { "literalString": "Custom Button Clicked" }
                }]
              }
            }
          }
        }
      ]
    }
  },
  {
    "beginRendering": {
      "surfaceId": "response-surface",
      "root": "response-text"
    }
  },
  {
    "surfaceUpdate": {
      "surfaceId": "response-surface",
      "components": [{
        "id": "response-text",
        "component": {
          "Text": {
            "text": {
              "literalString": "Interact with the gallery to see responses."
            }
          }
        }
      }]
    }
  }
];
