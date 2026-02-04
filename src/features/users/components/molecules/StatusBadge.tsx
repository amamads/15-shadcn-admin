import { Badge } from '@/components/atoms/badge';
import type { Status } from '../../types';

export default function StatusBadge({status}:{status:Status}) {
    switch(status){
        case 'inactive':return <Badge className=''>Inative</Badge>;
        case 'active':return <Badge >Active</Badge>;
        case 'invited':return <Badge className='text-foreground border border-chart-1/70 bg-chart-1-'>Invited</Badge>;
        case 'suspended':return <Badge variant='destructive'>Suspended</Badge>;
    }
}
