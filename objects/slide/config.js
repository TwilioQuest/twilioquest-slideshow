module.exports = {
  animations: {},
  spriteSheets: {
    slideShowTerminal: {
      fileName: "terminal.png",
      frameDimensions: {
        width: 24,
        height: 48,
      },
    },
  },
  events: {
    onPlayerDidInteract: (self, event, world) => {
      if (self === event.target) {
        if (event.target.iFramePathName) {
          world.showOverlayComponent({
            key: "iframe",
            props: {
              url:
                "http://localhost:3000/" +
                event.target.iFramePathName +
                "?embedded=true",
            },
          });
        }
      }
    },
  },
  properties: {
    sprite: {
      defaultFrameIndex: 0,
      spriteSheet: "slideShowTerminal",
      layers: [],
    },
  },
};
