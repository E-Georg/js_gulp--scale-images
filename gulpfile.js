const gulp = require("gulp");
const flatMap = require("flat-map").default;
const scaleImages = require("gulp-scale-images");

function defaultTask(cb) {
  const twoVariantsPerFile = (file, cb) => {
    // JPEG Mobile
    const jpegPortrait = file.clone();
    jpegPortrait.scale = { maxWidth: 450, maxHeight: 950, format: "jpeg" };
    const jpegLandscape = file.clone();
    jpegLandscape.scale = { maxWidth: 950, maxHeight: 450, format: "jpeg" };
    // JPEG DEKTOP
    const jpegPortrait2 = file.clone();
    jpegPortrait2.scale = { maxWidth: 1440, maxHeight: 900, format: "jpeg" };
    const jpegLandscape2 = file.clone();
    jpegLandscape2.scale = { maxWidth: 900, maxHeight: 1440, format: "jpeg" };
    const jpegPortrait3 = file.clone();
    jpegPortrait3.scale = { maxWidth: 1920, maxHeight: 1080, format: "jpeg" };
    const jpegLandscape3 = file.clone();
    jpegLandscape3.scale = { maxWidth: 1080, maxHeight: 1920, format: "jpeg" };
    // WEBP Mobile
    const webpPortrait = file.clone();
    webpPortrait.scale = { maxWidth: 450, maxHeight: 950, format: "webp" };
    const webpLandscape = file.clone();
    webpLandscape.scale = { maxWidth: 950, maxHeight: 450, format: "webp" };
    // WEBP DEKTOP
    const webpPortrait2 = file.clone();
    webpPortrait2.scale = { maxWidth: 1440, maxHeight: 900, format: "webp" };
    const webpLandscape2 = file.clone();
    webpLandscape2.scale = { maxWidth: 900, maxHeight: 1440, format: "webp" };
    const webpPortrait3 = file.clone();
    webpPortrait3.scale = { maxWidth: 1920, maxHeight: 1080, format: "webp" };
    const webpLandscape3 = file.clone();
    webpLandscape3.scale = { maxWidth: 1080, maxHeight: 1920, format: "webp" };
    cb(null, [
      jpegPortrait,
      jpegLandscape,
      jpegPortrait2,
      jpegLandscape2,
      jpegPortrait3,
      jpegLandscape3,
      webpPortrait,
      webpLandscape,
      webpPortrait2,
      webpLandscape2,
      webpPortrait3,
      webpLandscape3,
    ]);
  };

  return gulp
    .src("src/**/*.{jpeg,jpg,png}")
    .pipe(flatMap(twoVariantsPerFile))
    .pipe(scaleImages())
    .pipe(gulp.dest("dist"));
}

exports.default = defaultTask;
