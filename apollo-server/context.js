import { db } from './utils/db';
import { processUpload } from './utils/upload';

// eslint-disable-next-line no-unused-vars
export default ({ req, connection }) => {
  return {
    db,
    processUpload,
  };
};
