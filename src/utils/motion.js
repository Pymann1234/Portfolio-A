// Function to create a text animation variant
export const textVariant = (delay) => {
    return {
      hidden: {
        y: -50, // Start position for the vertical axis (above the final position)
        opacity: 0, // Start opacity (hidden)
      },
      show: {
        y: 0, // End position for the vertical axis (final position)
        opacity: 1, // End opacity (visible)
        transition: {
          type: "spring", // Animation type (spring for a bouncy effect)
          duration: 1.25, // Duration of the animation
          delay: delay, // Delay before animation starts
        },
      },
    };
  };
 
  // Function to create a fade-in animation variant
  export const fadeIn = (direction, type, delay, duration) => {
    return {
      hidden: {
        x: direction === "left" ? 100 : direction === "right" ? -100 : 0, // Horizontal start position based on direction
        y: direction === "up" ? 100 : direction === "down" ? -100 : 0, // Vertical start position based on direction
        opacity: 0, // Start opacity (hidden)
      },
      show: {
        x: 0, // End horizontal position (final position)
        y: 0, // End vertical position (final position)
        opacity: 1, // End opacity (visible)
        transition: {
          type: type, // Animation type (e.g., "spring", "tween")
          delay: delay, // Delay before animation starts
          duration: duration, // Duration of the animation
          ease: "easeOut", // Easing function for the animation (smooth out)
        },
      },
    };
  };
  
  // Function to create a zoom-in animation variant
  export const zoomIn = (delay, duration) => {
    return {
      hidden: {
        scale: 0, // Start scale (shrunk)
        opacity: 0, // Start opacity (hidden)
      },
      show: {
        scale: 1, // End scale (normal size)
        opacity: 1, // End opacity (visible)
        transition: {
          type: "tween", // Animation type (tween for smooth interpolation)
          delay: delay, // Delay before animation starts
          duration: duration, // Duration of the animation
          ease: "easeOut", // Easing function for the animation (smooth out)
        },
      },
    };
  };
  
  // Function to create a slide-in animation variant
  export const slideIn = (direction, type, delay, duration) => {
    return {
      hidden: {
        x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0, // Horizontal start position based on direction
        y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0, // Vertical start position based on direction
      }, 
      show: {
        x: 0, // End horizontal position (final position)
        y: 0, // End vertical position (final position)
        transition: {
          type: type, // Animation type (e.g., "spring", "tween")
          delay: delay, // Delay before animation starts
          duration: duration, // Duration of the animation
          ease: "easeOut", // Easing function for the animation (smooth out)
        },
      },
    };
  };
  
  // Function to create a staggered container animation variant
  export const staggerContainer = (staggerChildren, delayChildren) => {
    return {
      hidden: {},
      show: {
        transition: {
          staggerChildren: staggerChildren, // Delay between animations of child elements
          delayChildren: delayChildren || 0, // Delay before the first child animation starts
        },
      },
    };
  };