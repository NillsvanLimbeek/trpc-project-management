import type { IconType } from '@/lib/types';

import { Dashboard } from './Dashboard';

// autocomplete name prop for icon
export const names = ['dashboard'] as const;

export const ICONS: IconType[] = [{ name: 'dashboard', component: Dashboard }];
