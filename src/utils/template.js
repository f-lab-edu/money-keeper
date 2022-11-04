export const createTemplate = (self) => {
  if (!self || !self.getTemplate) return;
  const template = document.createElement('template');
  template.innerHTML = self.getTemplate();
  self.shadowRoot.append(template.content.cloneNode(true));
};

export const createViewTemplate = (self, shadow) => {
  if (!self || !self.getTemplate || !shadow) return;
  const template = document.createElement('template');
  template.innerHTML = self.getTemplate();
  shadow.shadowRoot.append(template.content.cloneNode(true));
};
