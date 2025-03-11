import { useDormitory } from '@/services/hooks/useDomitory';

export function FetchingDormitory({ selected }: { selected: number }) {
  const { data: currentDormitory } = useDormitory(selected);
  return currentDormitory;
}
