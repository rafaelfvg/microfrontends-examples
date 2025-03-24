import("remoteApp/Component").then((module) => {
  const component = module.default;
  document.body.appendChild(component());
});
