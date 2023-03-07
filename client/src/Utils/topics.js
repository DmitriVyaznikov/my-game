export function mappedQuestions(arr) {
  return arr.map((el) => {
    const result = {
      id: el[0].theme_id,
      name: el[0].themeName,
      questions: el.map((item) => ({
        id: item.id,
        question: item.questionText,
        points: item.points,
        answered: false,
      })),
    };
    return result;
  });
}
