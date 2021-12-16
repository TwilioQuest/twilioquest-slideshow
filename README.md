# TwilioQuest Slideshow Extension

This extension demonstrates how to use TwilioQuest's IFrameOverlay component as an interactive slideshow experience.

This demo extension also requires you to run a local server to see the slides of the presentation. We have created a demo server repository called [twilioquest-slideshow-slides](https://github.com/TwilioQuest/twilioquest-slideshow-slides) you can use to test this extension.

The iframed slides in this presentation are hardcoded to look at the URL structure:

```bash
http://localhost:3000/<slide-path-value>?embedded=true;
```

You can change this as you see fit for your own application in the custom object `slide` [configuration file](objects/slide/config.js).
