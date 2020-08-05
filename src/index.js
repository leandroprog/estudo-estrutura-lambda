const { formatMessage }  = require('./app/helpers/formatMessage');

/**
 * @param {*} event
 * @param {*} context
 * @returns
 */
const handler = async (event, context) => {
  console.log(event, context);

  const {body: messageBody} = formatMessage(event);
  console.log(messageBody);
}

module.exports.handler = handler;
