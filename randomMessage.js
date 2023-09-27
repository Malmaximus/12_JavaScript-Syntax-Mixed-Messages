const sillyFortunes = () => {
  return {
    sillyFortunes: ["Have you considered reconsidering something you previously took for granted?","If living your best life costs more money than you have then why is gratitude still free?","Give an unproven code monkey a shot and he'll appreciate it for a lifetime, but shooting him will also land you in prison for poaching...","If i had a penny for every random fortune generator i coded i'd have 2 pennies now, not a lot but it's still weird its happened twice...plus im unemployed so i still wouldn't turn it down.","Have you considered a career in politics? "],

      getRandomFortune() {
          const randomNumber = Math.floor(Math.random() * this.sillyFortunes.length);

          return this.sillyFortunes[randomNumber];
      }
  }
}
const fortune = sillyFortunes();
console.log(fortune.getRandomFortune());
