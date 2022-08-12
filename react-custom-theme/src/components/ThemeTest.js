import "./ThemeTest.scss";
import { FormBuilder } from "react-formio";
import React, { useState } from "react";

const ThemeTest = () => {
  const themeOptions = [
    { value: "", label: "--Select--" },
    { value: "light", label: "Light" },
    { value: "dark", label: "Dark" },
    { value: "material", label: "Material" },
  ];
  const [selectedThemeOption, setSelectedThemeOption] = useState(
    themeOptions[0].value
  );

  const changeTheme = (theme, selectOptionSetter) => {
    console.log("value==>", theme);
    if (theme) setTheme(theme);
    selectOptionSetter(theme)
  };

  const setTheme = (themeName) => {
    const selectedCssProps = Array.from(document.styleSheets).reduce(
      (acc, sheet) =>
        (acc = [
          ...acc,
          ...Array.from(sheet.cssRules).reduce(
            (def, rule) =>
              (def =
                rule.selectorText === ":root"
                  ? [
                      ...def,
                      ...Array.from(rule.style).filter((name) =>
                        name.startsWith("--selected")
                      ),
                    ]
                  : def),
            []
          ),
        ]),
      []
    );
    console.log("selectedCssProps=>", selectedCssProps);
    selectedCssProps.forEach((prop) => {
      document.documentElement.style.setProperty(
        prop,
        `var(--${themeName}${prop.substring(10)})`
      );
    });
  };

  return (
    <div class="container">
      <div>
        <label class="form-label mt-4">Selected Theme :</label>
        <select
          value={selectedThemeOption}
          onChange={(e) => changeTheme(e.target.value, setSelectedThemeOption)}
        >
          {themeOptions.map((theme) => (
            <option key={theme.value} value={theme.value}>
              {theme.label}
            </option>
          ))}
        </select>

        <label class="form-label mt-4">{`You selected ${selectedThemeOption}`}</label>
      </div>
      <div class="form-group">
        <label class="col-form-label mt-4" for="inputDefault">
          Default input
        </label>
        <input
          type="text"
          class="form-control"
          placeholder="Default input"
          id="inputDefault"
        />
      </div>
      <div class="p-20">
        <button type="button" class="btn btn-primary">
          Primary Button
        </button>
      </div>

      <div class="form-group">
        <label class="form-label mt-4">Floating labels</label>
        <div class="form-floating mb-3">
          <input
            type="email"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating">
          <input
            type="password"
            class="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label for="floatingPassword">Password</label>
        </div>
      </div>

      <div class="container">
        <FormBuilder
          form={{ display: "form" }}
          onChange={(schema) => console.log(schema)}
        />
      </div>
    </div>
  );
};

export default ThemeTest;
