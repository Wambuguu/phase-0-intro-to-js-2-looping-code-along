// Code your solutions in this file

function writeCards(names) {
    const thankYouMessages = [];
    for (let i = 0; i < names.length; i++) {
      const message = `Thank you, ${names[i]}, for the wonderful surprise gift!`;
      thankYouMessages.push(message);
    }
    return thankYouMessages;
  }

function countDown(number) {
    for (let i = number; i >= 0; i--) {
        console.log(i);
    }
}



