import { EnglishRequirementTable } from '@cmp/molecules/EnglishRequirementTable';
import { PTE_REQUIREMENT } from '@d';

export interface Props {}

export const PTETable = () => (
  <EnglishRequirementTable data={PTE_REQUIREMENT} />
);
