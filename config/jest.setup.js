import "@testing-library/jest-dom";

import { render } from "@testing-library/react";

global.render_test = function render_test(ui, options) {
  if (!options) options = {};
  if (options.container) {
    return render(ui, options);
  } else {
    const div = document.createElement("div");
    div.id = "root";
    return render(ui, {
      container: document.body.appendChild(div),
      ...options,
    });
  }
};
