module.exports = {
    book: {
        assets: "./static",
        js: ["asciinema-player.js"],
        css: ["asciinema-player.css"]
    },

    blocks: {
        asciinema_local: {
            process: function(blk) {
                if (this.generator != "website") {
                    throw new Error("Asciinema-Local does not yet support ebooks");
                }

                const file = blk.body;
                const kwargs = blk.kwargs;

                const attrs = ['cols', 'rows', 'autoplay', 'preload', 'loop', 'start-at', 'speed',
                                'poster', 'font-size', 'title', 'author', 'author-url', 'author-img-url']
                    .map(name => (name in kwargs) ? `${name}="${kwargs[name]}"` : "");

                return [`<asciinema-player src="${file}"`]
                    .concat(attrs)
                    .concat('></asciinema-player>')
                    .join(" ");
            }
        }
    }
};
