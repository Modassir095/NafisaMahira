document.addEventListener("DOMContentLoaded", () => {
    const photoStack = document.querySelectorAll(".photo");
  
    // Register GSAP Draggable plugin
    gsap.registerPlugin(Draggable);
  
    // Make each photo draggable
    Draggable.create(photoStack, {
      type: "x,y", // Allow dragging in both x and y directions
      bounds: "body", // Constrain dragging within the viewport
      inertia: true, // Smooth dragging
      onDragEnd: function () {
        // Rotate photo slightly when dragging ends
        gsap.to(this.target, {
          rotation: Math.random() * 30 - 15,
          duration: 0.5,
        });
      },
    });
  
    // Initially stack all photos directly on top of each other
    photoStack.forEach((photo, index) => {
      gsap.set(photo, {
        x: 0, // Align horizontally
        y: 0, // Align vertically
        rotation: 0, // No initial rotation
        zIndex: index, // Stagger stacking order
      });
    });
  });
  