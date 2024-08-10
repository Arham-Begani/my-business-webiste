const breaks = 4;
const duration = 11600;
for (let i = 0; i <= breaks; i++) {
  setTimeout(
    () => {
      window.scrollTo({
        top: (thresold / breaks) * i,
        behavior: 'smooth',
      });
    },
    (duration / breaks) * i
  );
}