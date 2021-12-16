module.exports = function (event, world) {
  if (event.name === "playerDidInteract") {
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
};
