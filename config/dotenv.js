module.exports = function (/* env */) {
  return {
    clientAllowedKeys: [
      "API_HOST",
      "API_NAMESPACE"
    ],
    failOnMissingKey: false
  };
};
