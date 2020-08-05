exports.formatMessage = (event) => {
  const {
    messageId,
    eventSourceARN: arn,
    receiptHandle,
    body,
  } = event.Records[0];

  const data = JSON.parse(body);

  return {
    info: {
      messageId,
      subject: data.Subject,
      arn,
      receiptHandle,
      stage: process.env.environment
        .slice(process.env.environment.length - 3)
        .toLowerCase(),
    },
    body: JSON.parse(data.Message),
  }
};
