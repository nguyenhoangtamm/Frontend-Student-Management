import { useDormitory } from '@/services/hooks/useDomainarie';

export function FetchingDormitory({ selected }: { selected: number }) {
  const { data: currentDormitory } = useDormitory(selected);
  return currentDormitory;
}
