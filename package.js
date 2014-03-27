Package.describe({
  summary: "Parsley form validation v2"
});

Package.on_use(function (api) {
  api.add_files('lib/dist/parsley.js', "client");
});