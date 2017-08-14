# Local Asciinema screencasts in your book

This plugins requires gitbook `>=2.0.0`.
This plugin is based on the original [gitbook-plugin-asciinema](https://github.com/simman/gitbook-plugin-asciinema) plugin.


## How to use it?

Add the below to your `book.json` file, then run `gitbook install` :

```json
{
    "plugins": ["asciinema-local"]
}
```

You can now add locally recorded Asciinema screencats to your book using this
tag:

```markdown
Take a look at this:
{% asciinema_local %}_recordings/test.json{% endasciinema_local %}
```

This will embed the player onto the page, and use the local file for the playback.
