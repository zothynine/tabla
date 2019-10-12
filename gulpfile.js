const {src, dest} = require("gulp");
const svgSprite = require("gulp-svg-sprite");

const svgConfig = {
    mode: {
        symbol: true,
        inline: true
    },

    svg: {
        xmlDeclaration: false,
        doctypeDeclaration: false,
        namespaceIDs: false,
        namespaceClassnames: false
    }
};

function svg() {
    return src("assets/cards/**/*.svg")
        .pipe(svgSprite(svgConfig))
        .pipe(dest("client/inline-svg"))
}

exports.svg = svg;
