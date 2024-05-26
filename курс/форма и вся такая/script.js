// function handleSubmit(event) {
//     event.preventDefault(); // Предотвращаем стандартное поведение отправки формы

//     const formData = new FormData(event.target);
//     const message = `Новая заявка!\n\nИмя: ${formData.get('name')}\nТелефон: ${formData.get('phone')}`;

//     fetch(`https://api.telegram.org/bot6996860775:AAFsGhjHZdNKFV3nGzjbzPVIyvjSC67uT0g/sendMessage`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             chat_id: '-1002041495544', // Айди чата, куда будет отправлено сообщение
//             text: message
//         })
//     })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Ошибка при отправке сообщения');
//         }
//         alert('Сообщение успешно отправлено!');
//         event.target.reset(); // Очищаем форму после успешной отправки
//     })
//     .catch(error => {
//         console.error('Ошибка:', error);
//         alert('Произошла ошибка при отправке сообщения');
//     });
// }

// document.getElementById('index-bottom-form').addEventListener('submit', handleSubmit);
// document.getElementById('modal-form').addEventListener('submit', handleSubmit);


