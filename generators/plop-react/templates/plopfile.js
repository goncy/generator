const actions = {
  module: {
    api: {
      type: "add",
      path: `src/{{lowerCase name}}/api.js`,
      templateFile: `plop/api.js.hbs`,
    },
    context: {
      type: "add",
      path: `src/{{lowerCase name}}/context.js`,
      templateFile: `plop/context.js.hbs`,
    },
    hooks: {
      type: "add",
      path: `src/{{lowerCase name}}/hooks.js`,
      templateFile: `plop/hooks.js.hbs`,
    },
    screens: {
      type: "add",
      path: `src/{{lowerCase name}}/screens/{{pascalCase name}}.js`,
      templateFile: `plop/screen.js.hbs`,
    },
    components: {
      type: "add",
      path: `src/{{lowerCase name}}/components/{{pascalCase name}}.js`,
      templateFile: `plop/component.js.hbs`,
    },
  },
  api: {
    type: "add",
    path: `{{destinationpath}}/api.js`,
    templateFile: `plop/api.js.hbs`,
  },
  context: {
    type: "add",
    path: `{{destinationpath}}/context.js`,
    templateFile: `plop/context.js.hbs`,
  },
  hooks: {
    type: "add",
    path: `{{destinationpath}}/hooks.js`,
    templateFile: `plop/hooks.js.hbs`,
  },
  screen: {
    type: "add",
    path: `{{destinationpath}}/{{pascalCase name}}.js`,
    templateFile: `plop/screen.js.hbs`,
  },
  component: {
    type: "add",
    path: `{{destinationpath}}/{{pascalCase name}}.js`,
    templateFile: `plop/component.js.hbs`,
  },
};

module.exports = function(plop) {
  plop.setGenerator("api", {
    description: "api methods",
    prompts: [
      {
        type: "input",
        default: "src",
        name: "destinationpath",
        message: "Destination path",
      },
    ],
    actions: [actions.api],
  });

  plop.setGenerator("context", {
    description: "empty react context",
    prompts: [
      {
        type: "input",
        default: "src",
        name: "destinationpath",
        message: "Destination path",
      },
      {
        type: "input",
        name: "name",
        message: "Module name",
      },
    ],
    actions: [actions.context],
  });

  plop.setGenerator("hooks", {
    description: "hooks for a context",
    prompts: [
      {
        type: "input",
        default: "src",
        name: "destinationpath",
        message: "Destination path",
      },
      {
        type: "input",
        name: "name",
        message: "Module name",
      },
    ],
    actions: [actions.hooks],
  });

  plop.setGenerator("screen", {
    description: "screen component",
    prompts: [
      {
        type: "input",
        default: "src",
        name: "destinationpath",
        message: "Destination path",
      },
      {
        type: "input",
        name: "name",
        message: "Screen name",
      },
    ],
    actions: [actions.screen],
  });

  plop.setGenerator("component", {
    description: "empty component",
    prompts: [
      {
        type: "input",
        default: "src",
        name: "destinationpath",
        message: "Destination path",
      },
      {
        type: "input",
        name: "name",
        message: "Component name",
      },
    ],
    actions: [actions.component],
  });

  plop.setGenerator("module", {
    description: "react app module",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "module name",
      },
      {
        type: "checkbox",
        message: "Select features",
        name: "features",
        choices: [
          {
            name: "api",
            checked: true,
          },
          {
            name: "context",
          },
          {
            name: "hooks",
          },
          {
            name: "screens",
          },
          {
            name: "components",
          },
        ],
      },
    ],
    actions: ({features}) => features.map(feature => actions.module[feature]),
  });
};
