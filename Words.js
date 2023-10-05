function learnLanguage(wordsArray, repeatCount) 
{
    let mistakes = 0;
    let correctAnswer = 0;
  
    for (let i = 0; i < repeatCount; i++) 
    {
      for (const key in wordsArray) 
      {
        const element = wordsArray[key];
        let input = prompt("Введите перевод слова " + key + ":");
  
        if (input === null) 
        {
          alert("Выход из программы.");
          break;
        }
  
        if (input === wordsArray[key]) 
        {
          alert("Правильно!");
          correctAnswer++;
        } 
        else if (input === "!") 
        {
          alert("Выход из текущего повторения.");
          break;
        } 
        else 
        {
          alert("Неправильно. Правильный перевод: " + element);
          mistakes++;
        }
      }
    }
  
    alert("Правильных ответов: " + correctAnswer + " Ошибок: " + mistakes);
  }
  
  const words = 
  {
    'apple': 'яблуко',
    'house': 'будинок',
    'mouse': 'миша'
  };
  const repeatCount = +prompt("Введите желаемое количество повторов перебора слов:");
  learnLanguage(words, repeatCount);