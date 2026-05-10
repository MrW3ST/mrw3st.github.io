const SOLAR_SYSTEM_BODIES = [
  { name: "Soleil", kind: "star", diameterKm: 1391400, distanceFromSunKm: 0 },
  { name: "Mercure", kind: "planet", diameterKm: 4879, distanceFromSunKm: 57909227 },
  { name: "Vénus", kind: "planet", diameterKm: 12104, distanceFromSunKm: 108209475 },
  { name: "Terre", kind: "planet", diameterKm: 12742, distanceFromSunKm: 149598262 },
  { name: "Mars", kind: "planet", diameterKm: 6779, distanceFromSunKm: 227943824 },
  { name: "Jupiter", kind: "planet", diameterKm: 139820, distanceFromSunKm: 778340821 },
  { name: "Saturne", kind: "planet", diameterKm: 116460, distanceFromSunKm: 1426666422 },
  { name: "Uranus", kind: "planet", diameterKm: 50724, distanceFromSunKm: 2870658186 },
  { name: "Neptune", kind: "planet", diameterKm: 49244, distanceFromSunKm: 4498396441 }
];

const NEPTUNE_REAL_DISTANCE_KM =
  SOLAR_SYSTEM_BODIES[SOLAR_SYSTEM_BODIES.length - 1].distanceFromSunKm;
const KM_TO_MM = 1000000;
const MIN_NEPTUNE_DISTANCE_MM = 10;
const MAX_NEPTUNE_DISTANCE_MM = NEPTUNE_REAL_DISTANCE_KM * KM_TO_MM;
const SLIDER_STEPS = 1000;
const STORAGE_KEY = "scholar-system-theme";
const SVG_NS = "http://www.w3.org/2000/svg";
const MIN_VISIBLE_DIAMETER_PX = 6;
const MIN_VISIBLE_SUN_DIAMETER_PX = 10;

const COPY = {
  fr: {
    eyebrow: "Application interactive",
    title: "S(ch)olarSystem",
    intro:
      "Concevez des représentations du système solaire à n’importe quelle échelle.",
    themeDark: "Dark",
    themeLight: "Light",
    themeToLight: "Activer le thème clair",
    themeToDark: "Activer le thème sombre",
    controlsTitle: "Définir l'échelle",
    controlsIntro:
      "Vous pouvez définir l'échelle à partir d'une distance totale ou à partir du diamètre souhaité pour un corps céleste.",
    modeDistance: "Par distance Soleil → Neptune",
    modeDiameter: "Par diamètre d'un corps",
    distanceSectionTitle: "Par distance Soleil → Neptune",
    distanceLabel: "Distance modèle Soleil → Neptune",
    manualValue: "Valeur manuelle",
    sliderHintActive: "Curseur logarithmique actif.",
    diameterSectionTitle: "Par diamètre d'un corps",
    bodyLabel: "Corps céleste",
    diameterLabel: "Diamètre modèle",
    feedbackDefault:
      "Vous pouvez définir l'échelle à partir d'une distance totale ou à partir du diamètre souhaité pour un corps céleste.",
    feedbackDistance: "Échelle définie à partir de la distance Soleil → Neptune.",
    feedbackDiameter: "Échelle définie à partir du diamètre d'un corps céleste.",
    feedbackInvalidDistance:
      "Entrez une distance strictement positive en millimètres.",
    feedbackMinDistance: `Minimum : ${MIN_NEPTUNE_DISTANCE_MM} mm.`,
    feedbackMaxDistance: "Maximum : distance réelle moyenne Soleil - Neptune.",
    feedbackValidBody: "Choisissez un corps céleste valide.",
    feedbackValidUnit: "Choisissez une unité valide.",
    feedbackPositiveDiameter: "Entrez un diamètre strictement positif.",
    feedbackClamped:
      "Distance Neptune ramenée dans la plage du curseur.",
    sliderHintLocked:
      "Le curseur reflète la distance Neptune résultante et reste verrouillé en mode diamètre.",
    sliderHintLimited:
      "La distance Neptune résultante dépasse la plage du curseur ; affichage limité à son maximum.",
    statDistance: "Neptune résultante",
    statScale: "Échelle",
    scalePrefix: "1 mm =",
    panelVisual: "Représentation",
    visualLegend:
      "Les distances indiquées correspondent à la distance moyenne entre le centre du Soleil et chaque planète.",
    visualNote:
      "Les diamètres visibles peuvent être amplifiés pour rester lisibles.",
    panelTable: "Tableau récapitulatif",
    tableBody: "Corps",
    tableRealDistance: "Distance réelle",
    tableModelDistance: "Distance modèle",
    tableRealDiameter: "Diamètre réel",
    tableModelDiameter: "Diamètre modèle",
    svgAria:
      "Représentation proportionnelle du système solaire du Soleil à Neptune",
    tooltipDistance: "Distance moyenne",
    tooltipDiameter: "Diamètre",
    millionsOfKm: "millions de km",
    billionsOfKm: "milliards de km",
    kmUnit: "km",
    mUnit: "m",
    cmUnit: "cm",
    mmUnit: "mm"
  },
  en: {
    eyebrow: "Interactive app",
    title: "S(ch)olarSystem",
    intro:
      "Design scaled representations of the solar system at any size you want.",
    themeDark: "Dark",
    themeLight: "Light",
    themeToLight: "Switch to light theme",
    themeToDark: "Switch to dark theme",
    controlsTitle: "Set the scale",
    controlsIntro:
      "You can define the scale from a total distance or from the target diameter of a celestial body.",
    modeDistance: "By Sun → Neptune distance",
    modeDiameter: "By body diameter",
    distanceSectionTitle: "By Sun → Neptune distance",
    distanceLabel: "Model distance from Sun to Neptune",
    manualValue: "Manual value",
    sliderHintActive: "Logarithmic slider enabled.",
    diameterSectionTitle: "By body diameter",
    bodyLabel: "Celestial body",
    diameterLabel: "Model diameter",
    feedbackDefault:
      "You can define the scale from a total distance or from the target diameter of a celestial body.",
    feedbackDistance: "Scale defined from the Sun → Neptune distance.",
    feedbackDiameter: "Scale defined from a celestial body diameter.",
    feedbackInvalidDistance: "Enter a strictly positive distance in millimeters.",
    feedbackMinDistance: `Minimum: ${MIN_NEPTUNE_DISTANCE_MM} mm.`,
    feedbackMaxDistance: "Maximum: real average Sun–Neptune distance.",
    feedbackValidBody: "Choose a valid celestial body.",
    feedbackValidUnit: "Choose a valid unit.",
    feedbackPositiveDiameter: "Enter a strictly positive diameter.",
    feedbackClamped: "Neptune distance was brought back into slider range.",
    sliderHintLocked:
      "The slider reflects the resulting Neptune distance and stays locked in diameter mode.",
    sliderHintLimited:
      "The resulting Neptune distance exceeds the slider range; display is capped at its maximum.",
    statDistance: "Resulting Neptune",
    statScale: "Scale",
    scalePrefix: "1 mm =",
    panelVisual: "Visualization",
    visualLegend:
      "Displayed distances correspond to the average distance between the center of the Sun and each planet.",
    visualNote:
      "Visible diameters may be amplified to remain readable.",
    panelTable: "Summary table",
    tableBody: "Body",
    tableRealDistance: "Real distance",
    tableModelDistance: "Model distance",
    tableRealDiameter: "Real diameter",
    tableModelDiameter: "Model diameter",
    svgAria:
      "Scaled representation of the solar system from the Sun to Neptune",
    tooltipDistance: "Average distance",
    tooltipDiameter: "Diameter",
    millionsOfKm: "million km",
    billionsOfKm: "billion km",
    kmUnit: "km",
    mUnit: "m",
    cmUnit: "cm",
    mmUnit: "mm"
  }
};

const lang = document.documentElement.lang.startsWith("en") ? "en" : "fr";
const copy = COPY[lang];
const app = document.querySelector("#app");

if (!app) {
  throw new Error("App root not found.");
}

app.innerHTML = `
  <main class="app-shell">
    <header class="hero">
      <div class="hero-copy">
        <p class="eyebrow">${copy.eyebrow}</p>
        <div class="hero-title-row">
          <div>
            <h1>${copy.title}</h1>
            <p class="intro">${copy.intro}</p>
          </div>
          <button
            id="theme-toggle"
            class="theme-toggle"
            type="button"
            aria-label="${copy.themeToDark}"
            aria-pressed="false"
          >
            ${copy.themeDark}
          </button>
        </div>
      </div>
      <section class="controls-card" aria-label="${copy.controlsTitle}">
        <h2 class="controls-title">${copy.controlsTitle}</h2>
        <p class="control-help control-help-intro">${copy.controlsIntro}</p>

        <div class="mode-switch" role="radiogroup" aria-label="${copy.controlsTitle}">
          <label class="mode-option">
            <input type="radio" name="scale-mode" value="distance" checked />
            <span>${copy.modeDistance}</span>
          </label>
          <label class="mode-option">
            <input type="radio" name="scale-mode" value="diameter" />
            <span>${copy.modeDiameter}</span>
          </label>
        </div>

        <div class="controls-grid">
          <section class="scale-mode-card" id="distance-mode-section">
            <h3>${copy.distanceSectionTitle}</h3>
            <label class="slider-label" for="distance-slider">${copy.distanceLabel}</label>
            <input id="distance-slider" type="range" />
            <div class="input-row">
              <label class="number-label" for="distance-input">${copy.manualValue}</label>
              <div class="number-input-wrap">
                <input id="distance-input" type="number" inputmode="decimal" />
                <span class="input-unit">${copy.mmUnit}</span>
              </div>
            </div>
            <p id="slider-hint" class="control-help">${copy.sliderHintActive}</p>
          </section>

          <section class="scale-mode-card" id="diameter-mode-section">
            <h3>${copy.diameterSectionTitle}</h3>
            <div class="dual-input-grid">
              <label class="number-label" for="diameter-body-select">${copy.bodyLabel}</label>
              <select id="diameter-body-select" class="select-input"></select>
              <label class="number-label" for="diameter-value-input">${copy.diameterLabel}</label>
              <div class="diameter-entry-row">
                <input id="diameter-value-input" class="number-field" type="number" inputmode="decimal" />
                <select id="diameter-unit-select" class="select-input"></select>
              </div>
            </div>
          </section>
        </div>

        <p id="distance-feedback" class="control-help">${copy.feedbackDefault}</p>
        <div class="stats-grid">
          <div class="stat">
            <span class="stat-label">${copy.statDistance}</span>
            <strong id="distance-value"></strong>
          </div>
          <div class="stat">
            <span class="stat-label">${copy.statScale}</span>
            <strong id="scale-value"></strong>
          </div>
        </div>
      </section>
    </header>

    <section class="panel">
      <div class="panel-header">
        <h2>${copy.panelVisual}</h2>
      </div>
      <div class="svg-panel"></div>
      <div class="visualization-notes">
        <p class="visualization-legend">${copy.visualLegend}</p>
        <p class="visualization-note">${copy.visualNote}</p>
      </div>
    </section>

    <section class="panel">
      <div class="panel-header">
        <h2>${copy.panelTable}</h2>
      </div>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>${copy.tableBody}</th>
              <th>${copy.tableRealDistance}</th>
              <th>${copy.tableModelDistance}</th>
              <th>${copy.tableRealDiameter}</th>
              <th>${copy.tableModelDiameter}</th>
            </tr>
          </thead>
          <tbody id="summary-body"></tbody>
        </table>
      </div>
    </section>
  </main>
`;

const modeInputs = Array.from(document.querySelectorAll('input[name="scale-mode"]'));
const slider = getRequiredElement("#distance-slider");
const distanceInput = getRequiredElement("#distance-input");
const diameterBodySelect = getRequiredElement("#diameter-body-select");
const diameterValueInput = getRequiredElement("#diameter-value-input");
const diameterUnitSelect = getRequiredElement("#diameter-unit-select");
const distanceSection = getRequiredElement("#distance-mode-section");
const diameterSection = getRequiredElement("#diameter-mode-section");
const distanceValue = getRequiredElement("#distance-value");
const scaleValue = getRequiredElement("#scale-value");
const distanceFeedback = getRequiredElement("#distance-feedback");
const sliderHint = getRequiredElement("#slider-hint");
const svgPanel = getRequiredElement(".svg-panel");
const summaryBody = getRequiredElement("#summary-body");
const themeToggle = getRequiredElement("#theme-toggle");
const themeController = createThemeController(themeToggle, copy);

let currentScale = computeScaleFromNeptuneDistance(MIN_NEPTUNE_DISTANCE_MM);

function redraw() {
  const bodies = buildModelBodiesFromScale(currentScale);
  renderSvg(svgPanel, bodies, copy);
  renderTable(summaryBody, bodies, copy);
}

bindControls(
  {
    modeInputs,
    slider,
    distanceInput,
    diameterBodySelect,
    diameterValueInput,
    diameterUnitSelect,
    distanceSection,
    diameterSection,
    distanceValue,
    scaleValue,
    validationMessage: distanceFeedback,
    sliderHint
  },
  SOLAR_SYSTEM_BODIES.map((body) => ({
    name: body.name,
    realDiameterMm: kmToMm(body.diameterKm)
  })),
  currentScale,
  copy,
  ({ scale }) => {
    currentScale = scale;
    redraw();
  }
);

themeToggle.addEventListener("click", () => {
  themeController.toggle();
});

const resizeObserver = new ResizeObserver(() => {
  redraw();
});

themeController.applyStoredTheme();
resizeObserver.observe(svgPanel);
redraw();

function kmToMm(valueKm) {
  return valueKm * KM_TO_MM;
}

function computeScaleFromNeptuneDistance(selectedNeptuneDistanceMm) {
  return selectedNeptuneDistanceMm / MAX_NEPTUNE_DISTANCE_MM;
}

function computeScaleFromBodyDiameter(selectedBodyModelDiameterMm, selectedBodyRealDiameterMm) {
  return selectedBodyModelDiameterMm / selectedBodyRealDiameterMm;
}

function buildModelBodiesFromScale(scale) {
  return SOLAR_SYSTEM_BODIES.map((body) => {
    const distanceFromSunMm = kmToMm(body.distanceFromSunKm);
    const diameterMm = kmToMm(body.diameterKm);

    return {
      ...body,
      distanceFromSunMm,
      diameterMm,
      modelDistanceMm: distanceFromSunMm * scale,
      modelDiameterMm: diameterMm * scale
    };
  });
}

function scaleToNeptuneDistanceMm(scale) {
  return MAX_NEPTUNE_DISTANCE_MM * scale;
}

function scaleToBodyDiameterMm(scale, bodyRealDiameterMm) {
  return bodyRealDiameterMm * scale;
}

function sliderValueToDistanceMm(sliderValue, minMm = MIN_NEPTUNE_DISTANCE_MM, maxMm = MAX_NEPTUNE_DISTANCE_MM) {
  const clamped = clamp(sliderValue, 0, SLIDER_STEPS);
  const ratio = clamped / SLIDER_STEPS;
  const minLog = Math.log(minMm);
  const maxLog = Math.log(maxMm);
  return Math.exp(minLog + ratio * (maxLog - minLog));
}

function distanceMmToSliderValue(distanceMm, minMm = MIN_NEPTUNE_DISTANCE_MM, maxMm = MAX_NEPTUNE_DISTANCE_MM) {
  const clamped = clamp(distanceMm, minMm, maxMm);
  const minLog = Math.log(minMm);
  const maxLog = Math.log(maxMm);
  const ratio = (Math.log(clamped) - minLog) / (maxLog - minLog);
  return Math.round(ratio * SLIDER_STEPS);
}

function realKmPerModelMm(selectedNeptuneDistanceMm) {
  return MAX_NEPTUNE_DISTANCE_MM / selectedNeptuneDistanceMm / KM_TO_MM;
}

function computeSvgLayout(bodies, width, formatDistance) {
  const safeWidth = Math.max(320, width);
  const startX = 40;
  const endX = safeWidth - 40;
  const axisWidth = endX - startX;
  const axisY = 68;
  const planets = bodies.filter((body) => body.kind === "planet");
  const maxDistanceMm = planets[planets.length - 1]?.modelDistanceMm ?? 1;
  const rowCount = safeWidth < 480 ? 6 : safeWidth < 760 ? 5 : 4;
  const rows = Array.from({ length: rowCount }, () => ({
    lastRight: Number.NEGATIVE_INFINITY
  }));
  const minGap = safeWidth < 480 ? 14 : 20;

  const markers = planets.map((body, index) => {
    const ratio = maxDistanceMm === 0 ? 0 : body.modelDistanceMm / maxDistanceMm;
    const x = startX + ratio * axisWidth;
    const labelDistanceText = formatDistance(body.modelDistanceMm);
    const labelWidth = Math.max(64, Math.max(body.name.length, labelDistanceText.length) * 7.2 + 14);
    const preferredRowIndex = findRowIndex(rows, x, labelWidth, minGap);
    const row = rows[preferredRowIndex];
    const minCenter = startX + labelWidth / 2;
    const maxCenter = endX - labelWidth / 2;
    const naturalCenter = clamp(x, minCenter, maxCenter);
    const pushedCenter = Math.max(naturalCenter, row.lastRight + minGap + labelWidth / 2);
    const labelX = clamp(pushedCenter, minCenter, maxCenter);

    row.lastRight = labelX + labelWidth / 2;

    const labelY = axisY + 24 + preferredRowIndex * 38;
    const needsConnector = preferredRowIndex > 0 || Math.abs(labelX - x) > 4 || index === 0;

    return {
      body,
      x,
      labelX,
      labelY,
      connectorStartY: axisY + 8,
      connectorEndY: labelY - 8,
      labelDistanceText,
      needsConnector
    };
  });

  return {
    width: safeWidth,
    height: axisY + 24 + 28 + (rowCount - 1) * 38 + 28,
    axisY,
    startX,
    endX,
    markers
  };
}

function findRowIndex(rows, x, labelWidth, minGap) {
  const left = x - labelWidth / 2;

  for (let index = 0; index < rows.length; index += 1) {
    if (left >= rows[index].lastRight + minGap) {
      return index;
    }
  }

  let bestIndex = 0;
  let bestRight = rows[0].lastRight;

  for (let index = 1; index < rows.length; index += 1) {
    if (rows[index].lastRight < bestRight) {
      bestRight = rows[index].lastRight;
      bestIndex = index;
    }
  }

  return bestIndex;
}

function trimTrailingZeros(value) {
  return value.replace(/\.0+$|(\.\d*[1-9])0+$/, "$1");
}

function formatFixed(value, decimals) {
  return trimTrailingZeros(value.toFixed(decimals));
}

function groupIntegerDigits(value) {
  const [intPart, decimalPart] = value.split(".");
  const grouped = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return decimalPart ? `${grouped}.${decimalPart}` : grouped;
}

function formatNumber(value, decimals) {
  return groupIntegerDigits(formatFixed(value, decimals));
}

function formatMillimeters(mm, labels) {
  const absMm = Math.abs(mm);

  if (absMm >= 1000000000000) {
    const millionsOfKm = mm / 1000000000000;
    const decimals = Math.abs(millionsOfKm) < 10 ? 3 : Math.abs(millionsOfKm) < 100 ? 2 : 1;
    return `${formatNumber(millionsOfKm, decimals)} ${labels.millionsOfKm}`;
  }

  if (absMm < 10) {
    const decimals = absMm < 1 ? 3 : absMm < 5 ? 2 : 1;
    return `${formatNumber(mm, decimals)} ${labels.mmUnit}`;
  }

  if (absMm < 1000) {
    if (absMm >= 100) {
      return `${formatNumber(mm / 10, absMm < 500 ? 1 : 0)} ${labels.cmUnit}`;
    }
    return `${formatNumber(mm, 1)} ${labels.mmUnit}`;
  }

  if (absMm < 1000000) {
    const meters = mm / 1000;
    const decimals = Math.abs(meters) < 10 ? 3 : Math.abs(meters) < 100 ? 2 : 1;
    return `${formatNumber(meters, decimals)} ${labels.mUnit}`;
  }

  const kilometers = mm / 1000000;
  const decimals = Math.abs(kilometers) < 10 ? 3 : Math.abs(kilometers) < 100 ? 2 : 1;
  return `${formatNumber(kilometers, decimals)} ${labels.kmUnit}`;
}

function formatRealDistanceKm(distanceKm, labels) {
  const absKm = Math.abs(distanceKm);

  if (absKm >= 1000000000) {
    const billions = distanceKm / 1000000000;
    const decimals = Math.abs(billions) < 10 ? 3 : Math.abs(billions) < 100 ? 2 : 1;
    return `${formatNumber(billions, decimals)} ${labels.billionsOfKm}`;
  }

  if (absKm >= 1000000) {
    const millions = distanceKm / 1000000;
    const decimals = Math.abs(millions) < 10 ? 3 : Math.abs(millions) < 100 ? 2 : 1;
    return `${formatNumber(millions, decimals)} ${labels.millionsOfKm}`;
  }

  return `${formatNumber(distanceKm, 0)} ${labels.kmUnit}`;
}

function formatRealDiameterKm(diameterKm, labels) {
  return `${formatNumber(diameterKm, 0)} ${labels.kmUnit}`;
}

function formatScaleKm(realKmPerMm, labels) {
  const decimals =
    realKmPerMm >= 100 ? 0 : realKmPerMm >= 10 ? 2 : realKmPerMm >= 0.01 ? 4 : 6;
  return `${formatNumber(realKmPerMm, decimals)} ${labels.kmUnit}`;
}

function formatMillimetersInput(mm) {
  const rounded = Math.round(mm);
  return String(Math.max(0, rounded));
}

function bindControls(elements, bodyOptions, initialScale, labels, onChange) {
  const defaultBody = bodyOptions.find((body) => body.name === "Terre") ?? bodyOptions[0];
  const initialDistanceMm = clampDistance(scaleToNeptuneDistanceMm(initialScale));
  const initialBodyDiameterMm = scaleToBodyDiameterMm(initialScale, defaultBody.realDiameterMm);
  const initialDiameterInput = pickBestDiameterInput(initialBodyDiameterMm);

  const state = {
    mode: "distance",
    scale: initialScale,
    distanceMm: initialDistanceMm,
    selectedBodyName: defaultBody.name,
    selectedDiameterValue: initialDiameterInput.value,
    selectedDiameterUnit: initialDiameterInput.unit
  };

  elements.slider.min = "0";
  elements.slider.max = String(SLIDER_STEPS);
  elements.slider.step = "1";
  elements.distanceInput.min = String(MIN_NEPTUNE_DISTANCE_MM);
  elements.distanceInput.step = "1";
  elements.diameterValueInput.min = "0.000001";
  elements.diameterValueInput.step = "any";

  for (const body of bodyOptions) {
    const option = document.createElement("option");
    option.value = body.name;
    option.textContent = body.name;
    elements.diameterBodySelect.append(option);
  }

  elements.diameterUnitSelect.innerHTML = `
    <option value="mm">${labels.mmUnit}</option>
    <option value="cm">${labels.cmUnit}</option>
    <option value="m">${labels.mUnit}</option>
    <option value="km">${labels.kmUnit}</option>
  `;

  const applyStateToUi = () => {
    const neptuneDistanceMm = scaleToNeptuneDistanceMm(state.scale);
    const sliderDistanceMm = clampDistance(neptuneDistanceMm);

    elements.slider.value = String(distanceMmToSliderValue(sliderDistanceMm));
    elements.distanceInput.value = formatMillimetersInput(state.distanceMm);
    elements.distanceValue.textContent = formatMillimeters(neptuneDistanceMm, labels);
    elements.scaleValue.textContent = `${labels.scalePrefix} ${formatScaleKm(realKmPerModelMm(neptuneDistanceMm), labels)}`;
    elements.diameterBodySelect.value = state.selectedBodyName;
    elements.diameterValueInput.value = formatEditableNumber(state.selectedDiameterValue);
    elements.diameterUnitSelect.value = state.selectedDiameterUnit;

    for (const input of elements.modeInputs) {
      input.checked = input.value === state.mode;
    }

    const distanceModeActive = state.mode === "distance";
    elements.distanceSection.dataset.active = String(distanceModeActive);
    elements.diameterSection.dataset.active = String(!distanceModeActive);
    elements.distanceInput.disabled = !distanceModeActive;
    elements.slider.disabled = !distanceModeActive;
    elements.diameterBodySelect.disabled = distanceModeActive;
    elements.diameterValueInput.disabled = distanceModeActive;
    elements.diameterUnitSelect.disabled = distanceModeActive;
    elements.sliderHint.textContent = distanceModeActive
      ? labels.sliderHintActive
      : neptuneDistanceMm <= MAX_NEPTUNE_DISTANCE_MM
        ? labels.sliderHintLocked
        : labels.sliderHintLimited;
  };

  const setMessage = (message) => {
    elements.validationMessage.textContent = message;
  };

  const getSelectedBody = () =>
    bodyOptions.find((body) => body.name === state.selectedBodyName);

  const applyScale = (scale) => {
    state.scale = scale;
    state.distanceMm = clampDistance(scaleToNeptuneDistanceMm(scale));

    const selectedBody = getSelectedBody();

    if (selectedBody) {
      const bodyDiameterMm = scaleToBodyDiameterMm(scale, selectedBody.realDiameterMm);
      const bestInput = pickBestDiameterInput(bodyDiameterMm, state.selectedDiameterUnit);
      state.selectedDiameterValue = bestInput.value;
      state.selectedDiameterUnit = bestInput.unit;
    }

    applyStateToUi();
  };

  const emitScale = (scale) => {
    applyScale(scale);
    onChange({ scale });
  };

  elements.slider.addEventListener("input", () => {
    const sliderValue = Number(elements.slider.value);
    const distanceMm = sliderValueToDistanceMm(sliderValue);
    state.mode = "distance";
    state.distanceMm = distanceMm;
    setMessage(labels.feedbackDistance);
    emitScale(computeScaleFromNeptuneDistance(distanceMm));
  });

  elements.distanceInput.addEventListener("input", () => {
    const rawValue = elements.distanceInput.value.trim();
    const distanceMm = Number(rawValue);

    if (rawValue === "" || !Number.isFinite(distanceMm) || distanceMm <= 0) {
      elements.distanceInput.setCustomValidity("invalid");
      setMessage(labels.feedbackInvalidDistance);
      return;
    }

    if (distanceMm < MIN_NEPTUNE_DISTANCE_MM) {
      elements.distanceInput.setCustomValidity("too-small");
      setMessage(labels.feedbackMinDistance);
      return;
    }

    if (distanceMm > MAX_NEPTUNE_DISTANCE_MM) {
      elements.distanceInput.setCustomValidity("too-large");
      setMessage(labels.feedbackMaxDistance);
      return;
    }

    elements.distanceInput.setCustomValidity("");
    state.mode = "distance";
    state.distanceMm = distanceMm;
    setMessage(labels.feedbackDistance);
    emitScale(computeScaleFromNeptuneDistance(distanceMm));
  });

  elements.distanceInput.addEventListener("blur", () => {
    applyStateToUi();
  });

  for (const input of elements.modeInputs) {
    input.addEventListener("change", () => {
      if (!input.checked) {
        return;
      }

      state.mode = input.value === "diameter" ? "diameter" : "distance";

      if (state.mode === "distance") {
        const exactDistance = scaleToNeptuneDistanceMm(state.scale);
        const safeDistanceMm = clampDistance(exactDistance);
        state.distanceMm = safeDistanceMm;

        if (safeDistanceMm !== exactDistance) {
          setMessage(labels.feedbackClamped);
          emitScale(computeScaleFromNeptuneDistance(safeDistanceMm));
          return;
        }
      }

      setMessage(state.mode === "distance" ? labels.feedbackDistance : labels.feedbackDiameter);
      applyStateToUi();
    });
  }

  const updateScaleFromDiameterInputs = () => {
    const body = bodyOptions.find((item) => item.name === elements.diameterBodySelect.value);
    const unit = parseDiameterUnit(elements.diameterUnitSelect.value);
    const rawValue = elements.diameterValueInput.value.trim();
    const value = Number(rawValue);

    if (!body) {
      setMessage(labels.feedbackValidBody);
      return;
    }

    if (!unit) {
      setMessage(labels.feedbackValidUnit);
      return;
    }

    if (rawValue === "" || !Number.isFinite(value) || value <= 0) {
      setMessage(labels.feedbackPositiveDiameter);
      return;
    }

    const diameterMm = value * { mm: 1, cm: 10, m: 1000, km: 1000000 }[unit];
    const scale = computeScaleFromBodyDiameter(diameterMm, body.realDiameterMm);

    state.mode = "diameter";
    state.selectedBodyName = body.name;
    state.selectedDiameterValue = value;
    state.selectedDiameterUnit = unit;
    setMessage(labels.feedbackDiameter);
    emitScale(scale);
  };

  elements.diameterBodySelect.addEventListener("change", updateScaleFromDiameterInputs);
  elements.diameterUnitSelect.addEventListener("change", updateScaleFromDiameterInputs);
  elements.diameterValueInput.addEventListener("input", updateScaleFromDiameterInputs);
  elements.diameterValueInput.addEventListener("blur", () => {
    applyStateToUi();
  });

  setMessage(labels.feedbackDefault);
  applyScale(initialScale);
}

function clampDistance(distanceMm) {
  return Math.min(MAX_NEPTUNE_DISTANCE_MM, Math.max(MIN_NEPTUNE_DISTANCE_MM, distanceMm));
}

function pickBestDiameterInput(diameterMm, preferredUnit) {
  if (preferredUnit) {
    return {
      value: diameterMm / { mm: 1, cm: 10, m: 1000, km: 1000000 }[preferredUnit],
      unit: preferredUnit
    };
  }

  if (diameterMm >= 1000000) {
    return { value: diameterMm / 1000000, unit: "km" };
  }
  if (diameterMm >= 1000) {
    return { value: diameterMm / 1000, unit: "m" };
  }
  if (diameterMm >= 10) {
    return { value: diameterMm / 10, unit: "cm" };
  }
  return { value: diameterMm, unit: "mm" };
}

function parseDiameterUnit(value) {
  return value === "mm" || value === "cm" || value === "m" || value === "km" ? value : null;
}

function formatEditableNumber(value) {
  return Number.isInteger(value) ? String(value) : value.toFixed(4).replace(/\.?0+$/, "");
}

function renderSvg(container, bodies, labels) {
  const width = Math.max(680, Math.round(container.clientWidth || 960));
  const layout = computeSvgLayout(bodies, width, (distanceMm) => formatMillimeters(distanceMm, labels));
  const svg = document.createElementNS(SVG_NS, "svg");
  const sun = bodies[0];
  const neptuneDistanceMm = bodies[bodies.length - 1]?.modelDistanceMm ?? 1;
  const pixelsPerModelMm = (layout.endX - layout.startX) / Math.max(neptuneDistanceMm, 1);

  svg.setAttribute("viewBox", `0 0 ${layout.width} ${layout.height}`);
  svg.setAttribute("class", "solar-svg");
  svg.setAttribute("role", "img");
  svg.setAttribute("aria-label", labels.svgAria);
  svg.append(createLine(layout.startX, layout.axisY, layout.endX, layout.axisY, "axis-line"));

  const sunGroup = document.createElementNS(SVG_NS, "g");
  const sunDiameterPx = getVisibleDiameterPx(sun.modelDiameterMm, pixelsPerModelMm, true);
  sunGroup.append(
    createTitle(`${sun.name} — ${labels.tooltipDiameter} : ${formatMillimeters(sun.modelDiameterMm, labels)}`)
  );
  sunGroup.append(createBodyMarker(layout.startX, layout.axisY, sunDiameterPx, "sun-marker"));

  const sunLabel = createText(layout.startX, layout.axisY - 18, "sun-label");
  appendTspans(sunLabel, [sun.name], 0, 14);
  sunGroup.append(sunLabel);
  svg.append(sunGroup);

  for (const marker of layout.markers) {
    const markerGroup = document.createElementNS(SVG_NS, "g");
    const bodyDiameterPx = getVisibleDiameterPx(marker.body.modelDiameterMm, pixelsPerModelMm, false);
    const tooltip =
      `${marker.body.name} — ${labels.tooltipDistance} : ${formatMillimeters(marker.body.modelDistanceMm, labels)}` +
      ` — ${labels.tooltipDiameter} : ${formatMillimeters(marker.body.modelDiameterMm, labels)}`;

    markerGroup.append(createTitle(tooltip));
    markerGroup.append(createBodyMarker(marker.x, layout.axisY, bodyDiameterPx, "planet-marker"));
    markerGroup.append(createLine(marker.x, layout.axisY - 12, marker.x, layout.axisY + 10, "planet-tick"));

    if (marker.needsConnector) {
      markerGroup.append(
        createLine(marker.x, marker.connectorStartY, marker.labelX, marker.connectorEndY, "label-connector")
      );
    }

    const label = createText(marker.labelX, marker.labelY, "planet-label");
    appendTspans(label, [marker.body.name, marker.labelDistanceText], 0, 14);
    markerGroup.append(label);
    svg.append(markerGroup);
  }

  container.replaceChildren(svg);
}

function renderTable(tbody, bodies, labels) {
  const fragment = document.createDocumentFragment();

  for (const body of bodies) {
    const row = document.createElement("tr");
    row.innerHTML = `
      <th scope="row">${body.name}</th>
      <td>${formatRealDistanceKm(body.distanceFromSunKm, labels)}</td>
      <td>${formatMillimeters(body.modelDistanceMm, labels)}</td>
      <td>${formatRealDiameterKm(body.diameterKm, labels)}</td>
      <td>${formatMillimeters(body.modelDiameterMm, labels)}</td>
    `;
    fragment.append(row);
  }

  tbody.replaceChildren(fragment);
}

function createThemeController(button, labels) {
  const applyTheme = (theme) => {
    document.documentElement.dataset.theme = theme;
    button.textContent = theme === "dark" ? labels.themeLight : labels.themeDark;
    button.setAttribute("aria-label", theme === "dark" ? labels.themeToLight : labels.themeToDark);
    button.setAttribute("aria-pressed", String(theme === "dark"));
  };

  const readStoredTheme = () => {
    try {
      const value = window.localStorage.getItem(STORAGE_KEY);
      return value === "dark" || value === "light" ? value : null;
    } catch {
      return null;
    }
  };

  const storeTheme = (theme) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // Ignore storage failures and keep theme in memory.
    }
  };

  const getCurrentTheme = () =>
    document.documentElement.dataset.theme === "dark" ? "dark" : "light";

  return {
    applyStoredTheme() {
      applyTheme(readStoredTheme() ?? "light");
    },
    toggle() {
      const nextTheme = getCurrentTheme() === "dark" ? "light" : "dark";
      applyTheme(nextTheme);
      storeTheme(nextTheme);
    }
  };
}

function createBodyMarker(cx, cy, diameterPx, className) {
  const circle = document.createElementNS(SVG_NS, "circle");
  circle.setAttribute("cx", String(cx));
  circle.setAttribute("cy", String(cy));
  circle.setAttribute("r", String(diameterPx / 2));
  circle.setAttribute("class", className);
  return circle;
}

function createLine(x1, y1, x2, y2, className) {
  const line = document.createElementNS(SVG_NS, "line");
  line.setAttribute("x1", String(x1));
  line.setAttribute("y1", String(y1));
  line.setAttribute("x2", String(x2));
  line.setAttribute("y2", String(y2));
  line.setAttribute("class", className);
  return line;
}

function createTitle(content) {
  const title = document.createElementNS(SVG_NS, "title");
  title.textContent = content;
  return title;
}

function createText(x, y, className) {
  const text = document.createElementNS(SVG_NS, "text");
  text.setAttribute("x", String(x));
  text.setAttribute("y", String(y));
  text.setAttribute("text-anchor", "middle");
  text.setAttribute("class", className);
  return text;
}

function appendTspans(text, lines, startDy, lineHeight) {
  lines.forEach((line, index) => {
    const tspan = document.createElementNS(SVG_NS, "tspan");
    tspan.setAttribute("x", text.getAttribute("x") ?? "0");
    tspan.setAttribute("dy", String(index === 0 ? startDy : lineHeight));
    tspan.textContent = line;
    text.append(tspan);
  });
}

function getVisibleDiameterPx(modelDiameterMm, pixelsPerModelMm, isSun) {
  const actualDiameterPx = modelDiameterMm * pixelsPerModelMm;
  const minVisibleDiameter = isSun ? MIN_VISIBLE_SUN_DIAMETER_PX : MIN_VISIBLE_DIAMETER_PX;
  return Math.max(actualDiameterPx, minVisibleDiameter);
}

function getRequiredElement(selector) {
  const element = document.querySelector(selector);
  if (!element) {
    throw new Error(`Element not found: ${selector}`);
  }
  return element;
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}
