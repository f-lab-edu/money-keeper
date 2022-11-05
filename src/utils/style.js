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
    .main-wrapper {
      display: flex;
      justify-content: center;
      background: var(--background);
      height: 100%;
    }
    .mobile-view {
      display: grid;
      grid-template-rows: 4fr 6fr;
      width: 400px;
      height: 100%;
      box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;
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
      gap: 0.5rem;
    }
    .remain-budget-percent {
      font-size: var(--font-3x);
    }
    .remain-budget {
      font-size: var(--font-2x);
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
    gap: 20px;
    padding: 20px;
    background: white;
    height: 100%;
  }
  .card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px 0;
    height: 60px;
    border-bottom: 1px solid gray;
  }
  </style>
  `;
