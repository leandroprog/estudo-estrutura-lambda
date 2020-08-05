const event = require('./__tests__/domain-mocks/event-mock.json');
const { handler } = require('./src');

const context = {
  msg: 'Teste',
};

handler(event, context, (err, result) => {
  console.log('err', err);
  console.log('result', result);
}).then(res => {
  console.log('Retorno Sucesso', res);
});
