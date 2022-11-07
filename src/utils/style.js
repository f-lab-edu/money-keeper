export const getResetStyle = () => `
  <style>
    html,
    body,
    div,
    span,
    applet,
    object,
    iframe,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    blockquote,
    pre,
    a,
    abbr,
    acronym,
    address,
    big,
    cite,
    code,
    del,
    dfn,
    em,
    img,
    ins,
    kbd,
    q,
    s,
    samp,
    small,
    strike,
    strong,
    sub,
    sup,
    tt,
    var,
    b,
    u,
    i,
    center,
    dl,
    dt,
    dd,
    ol,
    ul,
    li,
    fieldset,
    form,
    label,
    legend,
    table,
    caption,
    tbody,
    tfoot,
    thead,
    tr,
    th,
    td,
    article,
    aside,
    canvas,
    details,
    embed,
    figure,
    figcaption,
    footer,
    header,
    hgroup,
    menu,
    nav,
    output,
    ruby,
    section,
    summary,
    time,
    mark,
    audio,
    video {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      font: inherit;
      vertical-align: baseline;
      box-sizing: border-box;
    }
    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    menu,
    nav,
    section {
      display: block;
    }
    html,
    body {
      height: 100%;
    }
    body {
      line-height: 1;
    }
    ol,
    ul {
      list-style: none;
    }
    blockquote,
    q {
      quotes: none;
    }
    blockquote:before,
    blockquote:after,
    q:before,
    q:after {
      content: '';
      content: none;
    }
    table {
      border-collapse: collapse;
      border-spacing: 0;
    }
    
    button,
    input[type='submit'],
    input[type='reset'] {
      background: none;
      color: inherit;
      border: none;
      padding: 0;
      font: inherit;
      cursor: pointer;
      outline: inherit;
    }
  </style>
  `;

export const getAppStyle = () => `
  ${getResetStyle()}
  <style>
    .app-wrapper {
      display: flex;
      justify-content: center;
      background: var(--background);
      height: 100%;
    }
    .mobile-view {
      width: 400px;
      height: 100%;
      box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;
    }
    .main-wrapper {
      display: grid;
      grid-template-rows: 4fr 6fr;
      height: 100%;
    }
    .calculator-wrapper {
      height: 100%;
    }
  </style>
  `;

export const getHeaderStyle = () => `
  ${getResetStyle()}
  <style>
    .header-wrapper {
      display: flex;
      align-items: end;
      padding: 20px;
      height: 100%;
      background: var(--main);
      color: white;
    }
    .budget-wrapper {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }
    .remainingbudget-percent {
      font-size: var(--font-3x);
    }
    .remainingbudget {
      font-size: var(--font-2x);
    }
    .used-wrapper {
      display: flex;
      align-items: center;
      gap: 20px;
    }
    .used-wrapper > div {
      display: flex;
      align-items: center;
      gap: 5px;
    }
  </style>
  `;

export const getSummaryStyle = () => `
  ${getResetStyle()}
  <style>
  .summary-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: start;
    padding: 0 20px;
    background: white;
    height: 100%;
  }
  .card {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 10px;
    padding: 20px 0;
    border-bottom: 1px solid gray;
  }
  </style>
  `;

export const getFloatingButtonStyle = () => `
  ${getResetStyle()}
  <style>
  .button-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 50%;
    bottom: 5%;
    transform: translateX(-50%);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: var(--main-dark);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
  </style>
  `;

export const getCalculatorStyle = () => `
  ${getResetStyle()}
  <style>
  .calculator-wrapper {
    display: grid;
    grid-template-rows: 4fr 6fr;
    height: 100%;
    color: white;
  }
  .calculator-header {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    background: var(--main-expense);
  }
  .income-background {
    background: var(--main-income);
  }
  .inout-button-wrapper {
    display: flex;
    justify-content: end;
    gap: 10px;
  }
  .selected {
    font-size: var(--font-2x);
  }
  .inout-view-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: var(--font-3x);
  }
  .calculator-input {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    background: white;
    color: black;
  }
  .digit-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .digit {
    width: 100%;
    height: 100%;
    font-size: var(--font-l);
  }
  .add-button-wrapper {
    display: flex;
    justify-content: end;
    
  }
  .add-button {
    padding: 10px;
    background: black;
    border-radius: 5px;
  }
  button {
    display: block;
  }
  </style>
  `;
