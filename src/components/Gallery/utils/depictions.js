export const depictionLabel = depiction => [
  depiction.caption, 
  depiction.figure_label
].filter(attr => attr).join(', ')
