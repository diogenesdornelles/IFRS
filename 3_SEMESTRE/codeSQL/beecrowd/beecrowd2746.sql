select 
	case when (v.name like '%H1%') then replace(v.name, 'H1', 'X')
    else v.name
    end as name
from virus as v;