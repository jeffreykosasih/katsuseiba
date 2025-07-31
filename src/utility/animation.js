export const FadeUp = (delay = 0) => {
  return {
    hidden: {
      y: 30,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 150,
        damping: 25,
        delay: delay,
      },
    },
  };
};

export const FadeLeft = (delay = 0) => {
  return {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 150,
        damping: 25,
        delay: delay,
      },
    },
  };
};

export const FadeRight = (delay = 0) => {
  return {
    hidden: {
      x: 100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 150,
        damping: 25,
        delay: delay,
      },
    },
  };
};
