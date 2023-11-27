export const header = {
  initial: {
    scaleX: 0,
  },
  animate: {
    scaleX: 1,
    transition: {
      duration: 0.5,
      ease: [0.12, 0, 0.39, 0],
    },
  },
  exit: {
    scaleX: 0,
    transition: {
      delay: 0.6,
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const container = {
  hidden: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: 'easeOut',
      delayChildren: 0.7,
      staggerChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const item = {
  hidden: {
    y: '100%',
    opacity: 0,
  },
  animate: {
    y: '0%',
    opacity: 1,
    transition: {
      duration: 1,
      ease: [0.37, 0, 0.63, 1],
    },
  },
};
