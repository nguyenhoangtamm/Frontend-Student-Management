import { useQuery } from '@tanstack/react-query';
import { fetchDomainarie, fetchDomainarieById } from '../api/domainarieApi';

export const useDomainarie = (id?: number) => {
    return useQuery({
        queryKey: id ? ['domainarie', id] : ['domainarie'],
        queryFn: async () => id ? fetchDomainarieById(id) : fetchDomainarie(),
        staleTime: 1000 * 60 * 5, // Cache 5 phút
    });
};
