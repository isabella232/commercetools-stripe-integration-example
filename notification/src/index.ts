import app, { PACKAGE_NAME, Logger } from '@vsf-enterprise/commercetools-stripe-integration-notification'

const port = process.env.PORT || 8080;
app.listen(port, () => {
  Logger.info(`⚡️[${PACKAGE_NAME}]: Server is running at http://localhost:${port}`);
});
