import js from "@eslint/js";

export default [
  js.configs.recommended, // base recommended rules
  {
    languageOptions: {
      globals: {
        console: "readonly", // allow console as a global
        window: "readonly",
        document: "readonly",
        process: "readonly",
        require: "readonly",
        module: "readonly"
      }
    },
    rules: {
      "no-unused-vars": "error", // unused vars are errors
      "eqeqeq": "error",         // require ===
      "no-console": "warn"       // console.log is a warning
    }
  }
];
