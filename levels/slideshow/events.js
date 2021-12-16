module.exports = function (event, world) {
  /**
   * Allow any object with an iFramePathName property
   * to pop a slide.
   *
   * Currently, this logic is commented out and is
   * contained in the custom object called "slide".
   *
   * This logic remains here to demonstrate how you
   * can accomplish tasks via custom objects or the
   * events.js file.
   */
  // if (event.name === "playerDidInteract") {
  //   if (event.target.iFramePathName) {
  //     world.showOverlayComponent({
  //       key: "iframe",
  //       props: {
  //         url:
  //           "http://localhost:3000/" +
  //           event.target.iFramePathName +
  //           "?embedded=true",
  //       },
  //     });
  //   }
  // }
};
