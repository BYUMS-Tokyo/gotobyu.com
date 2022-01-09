import { FC } from 'react';
import { EnglishRequirementTable } from '@c/molecules/EnglishRequirementTable';
import { TOEFL_REQUIREMENT } from '@d';

export interface Props {}

export const TOEFLTable: FC<Props> = () => (
  <EnglishRequirementTable data={TOEFL_REQUIREMENT} />
);
