import { DeadlineTable } from '@cmp/molecules/DeadlineTable';
import { BYU_APPLICATION_DEADLINE } from '@d';

export interface Props {}

export const BYUDeadlineTable = () => (
  <DeadlineTable data={BYU_APPLICATION_DEADLINE} />
);
