export const toLegalUpperCase = (value) =>
  value
    .split(' ')
    .map((text) => {
      text = text.toLocaleLowerCase();
      return text.replace(text[0], text[0].toUpperCase());
    })
    .join(' ');

export const getRandomChoice = (items) => {
  const index = Math.floor(Math.random() * items.length);
  return items[index];
};
